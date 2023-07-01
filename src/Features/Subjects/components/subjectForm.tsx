import React, { FC } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "../../../store/store";
import {
  CreateSubject,
  UpdateSubject,
} from "../../../store/actions/subject.actions";
import toast from "react-hot-toast";
import api from "../api";
import { Row, Form, FormGroup, Col, Label, Input, Button } from "reactstrap";
import useMounted from "../../../utils/useMounted";
import { Subject } from "../../../type/subject";

interface SubjectFormProps {
  subjects?: Subject | null;
  onClose: () => void;
}

const SubjectForm: FC<SubjectFormProps> = (props) => {
  const { subjects, onClose } = props;

  const validate = Yup.object().shape({
    name: Yup.string().min(3).max(255).required(),
    tag: Yup.string().min(3).max(255).required(),
  });

  const dispatch = useDispatch();
  const mounted = useMounted();

  const handleSubmitForm = async (
    values: any,
    { resetForm, setErrors, setStatus, setSubmitting }: any
  ): Promise<void> => {
    //await dispatch here
    if (subjects) {
      // update User case
      try {
        const response: any = await api.updateSubject(subjects?.id, values);
        if (mounted.current && response) {
          dispatch(UpdateSubject(response.data as Subject));
          toast.success("Success");
          onClose();
        }
      } catch (error: any) {
        console.log(error);
        toast.error(`Error: ${error.data}`);
      }
    } else {
      // Create user case
      const { admin_check, ...valuesRest } = values;
      const requestBody = {
        ...valuesRest,
        user_type: values.admin_check ? "admin" : "star",
      };
      try {
        const response: any = await api.createSubject(requestBody);
        if (mounted.current && response) {
          dispatch(CreateSubject(response.data as Subject));
          toast.success("Success");
          onClose();
        }
      } catch (error: any) {
        console.log(error);
        toast.error(`Error: ${error.data}`);
      }
    }
  };

  /* Initial Values */
  const initialValues = {
    name: subjects?.name || "",
    tag: subjects?.tag || "",
  };
  return (
    <>
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
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      invalid={Boolean(touched.name && errors.name)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.name}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="tag">Tag</Label>
                    <Input
                      disabled={!!subjects}
                      id="tag"
                      name="tag"
                      value={values.tag}
                      onChange={handleChange}
                      invalid={Boolean(touched.tag && errors.tag)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.tag}
                    </span>
                  </FormGroup>
                </Col>
              </Row>

              <div className="mt-2" style={{ textAlign: "right" }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  className="mr-2"
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SubjectForm;
