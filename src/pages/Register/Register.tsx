import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import { CustomButton } from "../../components/Button/CustomButton";
import { AuthPage, Field, Form, Label, Question } from "../Login/styles";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <AuthPage>
      <Headling>Sign up</Headling>
      <Form>
        <Field>
          <Label htmlFor="username">Username</Label>
          <CustomInput id="username" name="username" placeholder="Enter your username" />
        </Field>
        <Field>
          <Label htmlFor="username">Password</Label>
          <CustomInput id="password" name="password" type="password" placeholder="Enter your password" />
        </Field>
        <Field style={{marginBottom: '20px'}}>
          <Label htmlFor="username">Confirm password</Label>
          <CustomInput id="confirm" name="confirm" type="password" placeholder="Confirm your password" />
        </Field>
        <CustomButton>Submit</CustomButton>
      </Form>
      <Question>
        Already signed up?
        <Link to="/auth/login">Go to sign in.</Link>
      </Question>
    </AuthPage>
  );
};
