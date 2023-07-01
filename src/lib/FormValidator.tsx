// https://github.com/chriso/validator.js
import validator from "validator";

/**
 * Helper methods to validate form inputs
 * using controlled components
 */
const FormValidator = {
  /**
   * Validate input element
   * @param element Dome element of the input
   * Uses the following attributes
   *     data-validate: array in json format with validation methods
   *     data-param: used to provide arguments for certain methods.
   */
  validate(element: any) {
    const isCheckbox = element.type === "checkbox";
    const value = isCheckbox ? element.checked : element.value;
    const name = element.name;

    if (!name) throw new Error("Input name must not be empty.");

    // use getAttribute to support IE10+
    const param = element.getAttribute("data-param");
    const validations = JSON.parse(element.getAttribute("data-validate"));

    let result: any[] = [];
    if (validations && validations.length) {
      /*  Result of each validation must be true if the input is invalid
                and false if valid. */
      validations.forEach((m: string) => {
        switch (m) {
          case "required":
            result[parseInt(m)] = isCheckbox
              ? value === false
              : validator.isEmpty(value);
            break;
          case "email":
            result[parseInt(m)] = !validator.isEmail(value);
            break;
          case "number":
            result[parseInt(m)] = !validator.isNumeric(value);
            break;
          case "integer":
            result[parseInt(m)] = !validator.isInt(value);
            break;
          case "alphanum":
            result[parseInt(m)] = !validator.isAlphanumeric(value);
            break;
          case "url":
            result[parseInt(m)] = !validator.isURL(value);
            break;
          case "equalto":
            // here we expect a valid ID as param
            const value2: any = (
              document.getElementById(param) as HTMLInputElement
            ).value;
            result[parseInt(m)] = !validator.equals(value, value2);
            break;
          case "minlen":
            result[parseInt(m)] = !validator.isLength(value, { min: param });
            break;
          case "maxlen":
            result[parseInt(m)] = !validator.isLength(value, { max: param });
            break;
          case "len":
            const [min, max] = JSON.parse(param);
            result[parseInt(m)] = !validator.isLength(value, { min, max });
            break;
          case "min":
            result[parseInt(m)] = !validator.isInt(value, {
              min: validator.toInt(param),
            });
            break;
          case "max":
            result[parseInt(m)] = !validator.isInt(value, {
              max: validator.toInt(param),
            });
            break;
          case "list":
            const list = JSON.parse(param);
            result[parseInt(m)] = !validator.isIn(value, list);
            break;
          default:
            throw new Error("Unrecognized validator.");
        }
      });
    }

    return result;
  },

  /**
   * Bulk validation of input elements.
   * Used with form elements collection.
   * @param  {Array} inputs Array for DOM element
   * @return {Object}       Contains array of error and a flag to
   *                        indicate if there was a validation error
   */
  bulkValidate(inputs: any[]) {
    let errors = {},
      hasError = false;

    inputs.forEach((input) => {
      let result = this.validate(input);
      errors = { ...errors, [input.name]: result };
      if (!hasError)
        hasError = Object.keys(result).some(
          (val: string) => result[parseInt(val)]
        );
    });

    return {
      errors,
      hasError,
    };
  },
};

export default FormValidator;
