import React, { FC, useState } from "react";

import { Input } from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "../../store/store";

import { Login as LoginActions } from "../../store/actions/actions";
import useMounted from "../../utils/useMounted";
import api from "./api";

const Login: FC<any> = (props) => {
  const validate = Yup.object().shape({
    email: Yup.string()

      .max(255, "Email must be at most 255 characters")
      .required("Email is required")
      .email(),
    password: Yup.string()
      .min(4, "Password must be at least 7 characters")
      .max(255, "Password must be at most 255 characters")
      .required("Password is required"),
  });

  const [errorPrint, setErrorPrint] = useState({ error: false, message: "" });

  const dispatch = useDispatch();
  const mounted = useMounted();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmitForm = async (
    values: any,
    { setErrors, setStatus, setSubmitting }: any
  ): Promise<void> => {
    // dispatch actions here, for later

    setErrorPrint({ error: false, message: "" });

    try {
      const response: object = await api.login(values.email, values.password);

      if (mounted.current && response) {
        dispatch(LoginActions(response));
      }
    } catch (error: any) {
      console.log(error);
      setErrorPrint({ error: true, message: error.data });
    }
  };

  return (
    <div className="block-center mt-4 wd-xl">
      <div className="card card-flat">
        <div className="card-header text-center bg-dark">
          <h4 className="mt-2" style={{ color: "white" }}>
            {" "}
            Connected Plus Admin Login
          </h4>
        </div>
        <div className="card-body">
          <p className="text-center py-2">SIGN IN TO CONTINUE.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={handleSubmitForm}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }): JSX.Element => {
              return (
                <form
                  noValidate
                  name="formLogin"
                  className="mb-3"
                  onSubmit={handleSubmit}
                  {...props}
                >
                  <div className="form-group">
                    <div className="input-group with-focus">
                      <Input
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        invalid={Boolean(touched.email && errors.email)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-validate='["required", "email"]'
                        value={values.email}
                      />

                      <span className="ml-2 invalid-feedback">
                        {errors.email}
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group with-focus">
                      <Input
                        type="password"
                        id="id-password"
                        invalid={Boolean(touched.password && errors.password)}
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-validate='["required"]'
                        value={values.password}
                      />

                      <span className=" ml-2 invalid-feedback">
                        {errors.password}
                      </span>
                    </div>
                  </div>
                  {errorPrint.error && (
                    <span>
                      <p className="ml-2 mt-2 " style={{ color: "red" }}>
                        {errorPrint.message}
                      </p>
                    </span>
                  )}
                  <button
                    className="btn btn-block btn-primary mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="p-3 text-center">
        <span className="mr-2">&copy;</span>
        <span>2023</span>
        <span className="mx-2">-</span>
        <span>ANS CENTER</span>
        <br />
        <span>ANS CENTER API MANAGEMENT</span>
      </div>
    </div>
  );
};

export default Login;
