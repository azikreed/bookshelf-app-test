import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import { CustomButton } from "../../components/Button/CustomButton";
import { AuthPage, Field, Form, Label, Question } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import axios from "../../helpers/axiosInterceptor";

export interface LoginForm {
  secret: {
    value: string;
  };
  key: {
    value: string;
  };
}

export interface LoginResponse {
  data: {
    id: number;
    name: string;
    email: string;
    key: string;
    secret: string;
  },
  isOk: number;
  message: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const { key, secret } = target;
    await sendLogin(secret.value, key.value);
  };

  const sendLogin = async (secret: string, key: string) => {
    try {
      const { data } = await axios.get<LoginResponse>(`/myself`, {
        data: { secret },
        headers: {
          key: key,
        },
      });
      if (data?.isOk) {
        localStorage.setItem("key", data?.data.key);
        localStorage.setItem("secret", data?.data.secret);
        navigate('/');
      }
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
          <Label htmlFor="name">Secret</Label>
          <CustomInput
            id="secret"
            name="secret"
            type="password"
            placeholder="Enter your secret"
          />
        </Field>
        <Field style={{ marginBottom: "20px" }}>
          <Label htmlFor="key">Key</Label>
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
