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
