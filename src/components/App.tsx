import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { FiledWrapper as Form, Field, LoginFormWrapper, LoginImg, LoginDetail, LoginButton, ResetButton, SubmitButton, ErrorMessage } from './styled';

const formValidaiton = Yup.object().shape({
  email: Yup.string().required("*required email").test("", "", function (value: string | any) {
    if (value) {
      const stringArray = value.split("@");
      if (stringArray.length === 2 && stringArray[0] && stringArray[1]) return true;
      else return this.createError({ message: 'Email is not valid' });
    } else return this.createError({ message: '' });;
  }),
  password: Yup.string().required("*required password").min(8, "password less than 8 characters").max(12, "password more than 12 characters"),
  showPassword: Yup.string().default("password"),
});

function onSubmitForm(value: any) {
  alert(`Hey dude, ${value.email}`);
}

enum showPasswordType {
  TEXT = "text",
  PASSWORD = "password"
}

type formTypes = {
  email: string,
  password: string,
  showPassword: showPasswordType
}

const initValue: formTypes = {
  email: "", password: "", showPassword: showPasswordType.PASSWORD
}

function App() {

  const onClickShowHide = (state: showPasswordType, handleChange: any) => {
    handleChange({ target: { name: "showPassword", value: state === "password" ? "text" : "password" } })
  }

  const isValidLogin = (errors: any, touched: any): boolean => {
    return ((errors.email && touched.email) && (errors.password && touched.password))
  }

  return (
    <LoginFormWrapper>
      <LoginImg />
      <LoginDetail>
        <Formik initialValues={initValue} validationSchema={formValidaiton} onSubmit={onSubmitForm}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => (
            <Form>
              <h1>Login</h1>
              <Field>
                <label>Email</label>
                <input
                  type={"text"}
                  name={"email"}
                  placeholder="Enter email here..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <ErrorMessage hidden={!(errors.email && touched.email)}>{errors.email}</ErrorMessage>
              </Field>
              <Field className="passwordInput">
                <label>Password</label>
                <input
                  type={values.showPassword}
                  name={"password"}
                  placeholder="Enter password here..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                {values.showPassword === "text" ?
                  <Visibility onClick={() => onClickShowHide(values.showPassword, handleChange)} /> :
                  <VisibilityOff onClick={() => onClickShowHide(values.showPassword, handleChange)} />}
                <ErrorMessage hidden={!(errors.password && touched.password)}>{errors.password}</ErrorMessage>
              </Field>
              <LoginButton>
                <SubmitButton disabled={isValidLogin(errors, touched)} type={"submit"} onClick={(handleSubmit as any)}>Login</SubmitButton>
                <ResetButton type={"reset"} onClick={handleReset}>Reset</ResetButton>
              </LoginButton>
            </Form>
          )}
        </Formik>
      </LoginDetail>
    </LoginFormWrapper >
  );
}

export default App;
