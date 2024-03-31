import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import { CustomButton } from "../../components/Button/CustomButton";
import { AuthPage, ErrorMessage, Field, Form, Label, Question } from "../Login/styles";
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import axios from "../../helpers/axiosInterceptor";
// import axios from "axios";

export interface RegisterForm {
  name: {
    value: string;
  };
  email: {
    value: string;
  };
  key: {
    value: string;
  };
  secret: {
    value: string;
  };
  confirm?: {
    value: string;
  };
}

export interface RegisterResponse {
  data: {
    id: number;
    name: string;
    email: string;
    key: string;
    secret: string;
  };
  isOk: boolean;
  message: string;
}

export const Register = () => {
  const [errorMessage, setErrorMessage] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & RegisterForm & {};
    const { name, email, key, confirm, secret } = target;
    console.log(
      name.value,
      email.value,
      key.value,
      confirm?.value,
      secret.value
    );
    if (key.value === confirm?.value) {
      console.log("confirmed");
      await sendLogin(name.value, email.value, key.value, secret.value);
    } else {
      setErrorMessage(true);
      return;
    }
  };

  const sendLogin = async (
    name: string,
    email: string,
    key: string,
    secret: string
  ) => {
    const user = JSON.stringify({
      name: name,
      email: email,
      key: key,
      secret: secret,
    });

    try {
      const { data } = await axios.post<RegisterResponse>(`/signup`, user);
      if(data.isOk) {
        localStorage.setItem('key', data.data.key);
        localStorage.setItem('secret', data.data.secret);
      };
    } catch (e) {
      setErrorMessage(true);
      console.log(e);
    }
  };

  useEffect(() => {
    if (errorMessage === true) {
      let timerId = setTimeout(() => {
        setErrorMessage(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [errorMessage]);

  return (
    <AuthPage>
      {errorMessage ? <ErrorMessage>Something went wrong</ErrorMessage> : <></>}
      <Headling>Sign up</Headling>
      <Form
        style={{ marginTop: "10px", marginBottom: "5px", gap: "8px" }}
        onSubmit={submit}
      >
        <Field>
          <Label htmlFor="name">Username</Label>
          <CustomInput
            id="name"
            name="name"
            placeholder="Enter your username"
          />
        </Field>
        <Field>
          <Label htmlFor="name">Email</Label>
          <CustomInput
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Field>
        <Field>
          <Label htmlFor="key">Key</Label>
          <CustomInput
            id="key"
            name="key"
            type="password"
            placeholder="Enter your password"
          />
        </Field>
        <Field>
          <Label htmlFor="username">Confirm key</Label>
          <CustomInput
            id="confirm"
            name="confirm"
            type="password"
            placeholder="Confirm your password"
          />
        </Field>
        <Field style={{ marginBottom: "15px" }}>
          <Label htmlFor="username">Secret</Label>
          <CustomInput
            id="secret"
            name="secret"
            type="password"
            placeholder="Confirm your secret key"
          />
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
