import React, { FC } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { User } from "../../../type/user";
import { useDispatch, useSelector } from "../../../store/store";
import { CreateUser, UpdateUser } from "../../../store/actions/user.actions";
import toast from "react-hot-toast";
import api from "../api";
import { Row, Form, FormGroup, Col, Label, Input, Button } from "reactstrap";
import useMounted from "../../../utils/useMounted";
import { authSelector } from "../../../store/selectors/useSelector";

interface UserFormProps {
  users?: User | null;
  onClose: () => void;
}

const UserForm: FC<UserFormProps> = (props) => {
  const { users, onClose } = props;

  const validate = Yup.object().shape({
    email: Yup.string().min(3).max(255).required().email(),
    birthday: Yup.string().min(3).max(255),
    fullname: Yup.string().min(3).max(255).required(),
    password: users
      ? Yup.string().min(3).max(255)
      : Yup.string().min(3).max(255).required(),
    org_id: Yup.string().min(3).max(255),
    phone: Yup.string().min(3).max(255),
    // user_name: Yup.string().min(3).max(255).required(),
    zalo_id: Yup.string().min(3),
  });

  const auth = useSelector(authSelector);

  const currentUserType = auth?.user?.user_type;

  const dispatch = useDispatch();
  const mounted = useMounted();

  const handleSubmitForm = async (
    values: any,
    { resetForm, setErrors, setStatus, setSubmitting }: any
  ): Promise<void> => {
    //await dispatch here

    if (users) {
      // update User case
      try {
        const response: any = await api.updateUser(users.id, values);

        if (mounted.current && response) {
          dispatch(UpdateUser(response.data as User));
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
        const response: any = await api.createUsers(requestBody);

        if (mounted.current && response) {
          dispatch(CreateUser(response.data as User));

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
    birthday: users?.birthday || "",
    email: users?.email || "",
    fullname: users?.fullname || "",
    org_id: users?.org_id || "",
    password: "",
    phone: users?.phone || "",
    user_name: users?.user_name || "",
    zalo_id: users?.zalo_id || "",
    admin_check: false,
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
                    <Label for="email">Email</Label>
                    <Input
                      disabled={users ? true : false}
                      id="email"
                      name="email"
                      placeholder="email@email.com"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      invalid={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.email}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="password">
                      {users ? `Update Password` : `Create Password`}
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="********"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      invalid={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.password}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Nguyen Van A..."
                  value={values.fullname}
                  onChange={handleChange}
                  invalid={Boolean(touched.fullname && errors.fullname)}
                  onBlur={handleBlur}
                />
                <span className=" mt-1 ml-2 invalid-feedback">
                  {errors.fullname}
                </span>
              </FormGroup>
              {/* <FormGroup>
                    <Label for="user_name">Username</Label>
                    <Input
                      id="user_name"
                      name="user_name"
                      placeholder="Username..."
                      value={values.user_name}
                      onChange={handleChange}
                      invalid={Boolean(touched.user_name && errors.user_name)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.user_name}
                    </span>
                  </FormGroup> */}

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="org_id">Organization ID</Label>
                    <Input
                      id="org_id"
                      name="org_id"
                      placeholder="Organization ID..."
                      value={values.org_id}
                      onChange={handleChange}
                      invalid={Boolean(touched.org_id && errors.org_id)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.org_id}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="zalo_id">Zalo ID</Label>
                    <Input
                      id="zalo_id"
                      name="zalo_id"
                      placeholder="Zalo ID..."
                      value={values.zalo_id}
                      onChange={handleChange}
                      invalid={Boolean(touched.zalo_id && errors.zalo_id)}
                      onBlur={handleBlur}
                    />
                    <span className=" mt-1 ml-2 invalid-feedback">
                      {errors.zalo_id}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="birthday">Date of Birth</Label>
                <Input
                  id="birthday"
                  name="birthday"
                  placeholder="DD/MM/YYYY"
                  value={values.birthday}
                  onChange={handleChange}
                  invalid={Boolean(touched.birthday && errors.birthday)}
                  onBlur={handleBlur}
                />
                <span className=" mt-1 ml-2 invalid-feedback">
                  {errors.birthday}
                </span>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="091234567..."
                  value={values.phone}
                  onChange={handleChange}
                  invalid={Boolean(touched.phone && errors.phone)}
                  onBlur={handleBlur}
                />
                <span className=" mt-1 ml-2 invalid-feedback">
                  {errors.phone}
                </span>
              </FormGroup>
              {!users && currentUserType === "admin" ? (
                <>
                  {" "}
                  <FormGroup row>
                    <div className="col-md-10">
                      <FormGroup check>
                        <Label for="admin_check" check>
                          <Input
                            checked={values.admin_check}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            name="admin_check"
                            value={values.admin_check ? 1 : 0}
                          />{" "}
                          Create this user as admin?
                        </Label>
                      </FormGroup>
                      <Label className="mt-3">
                        Note*: Only admin accounts can create both admin account
                        and star account
                      </Label>
                    </div>
                  </FormGroup>
                </>
              ) : (
                <></>
              )}

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

export default UserForm;
