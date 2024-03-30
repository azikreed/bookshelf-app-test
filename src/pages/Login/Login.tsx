import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import { CustomButton } from "../../components/Button/CustomButton";
import { AuthPage, Field, Form, Label, Question } from "./styles";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <AuthPage>
      <Headling>Sign in</Headling>
      <Form>
        <Field>
          <Label htmlFor="username">Username</Label>
          <CustomInput id="username" name="username" placeholder="Enter your username" />
        </Field>
        <Field style={{marginBottom: '20px'}}>
          <Label htmlFor="username">Password</Label>
          <CustomInput id="password" name="password" type="password" placeholder="Enter your password" />
        </Field>
        <CustomButton>Submit</CustomButton>
      </Form>
      <Question>
      Not registered yet?
        <Link to="/auth/register">Go to sign up.</Link>
      </Question>
    </AuthPage>
  );
};
