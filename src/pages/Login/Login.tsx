import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import { CustomButton } from "../../components/Button/CustomButton";
import { AuthPage, Field, Form, Label, Question } from "./styles";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import axios from '../../helpers/axiosInterceptor';

export interface LoginForm {
  name: {
    value: string;
  };
  key: {
    value: string;
  };
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  key: string;
  secret: string;
}

export const Login = () => {
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const {data} = await axios.get<LoginResponse>(`/myself`)
      console.log(data);
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  };

  return (
    <AuthPage>
      <Headling>Sign in</Headling>
      <Form onSubmit={submit}>
        <Field>
          <Label htmlFor="name">Username</Label>
          <CustomInput
            id="name"
            name="name"
            placeholder="Enter your username"
          />
        </Field>
        <Field style={{ marginBottom: "20px" }}>
          <Label htmlFor="key">Password</Label>
          <CustomInput
            id="key"
            name="key"
            type="password"
            placeholder="Enter your password"
          />
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
