import { Theme, styled } from "@mui/material/styles";

export const AuthPage = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const Form = styled("form")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  marginTop: "36px",
  marginBottom: "12px",
  '.invalid': {
    input: {
      border: `1px solid ${theme.palette.error.main}`,
      color: `1px solid ${theme.palette.error.main}`,
    }
  }
}));

export const Field = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  ".key": {
    border: `1px solid ${theme.palette.error.main}`,
    color: `1px solid ${theme.palette.error.main}`,
  },
  ".invalid": {
    border: `1px solid ${theme.palette.error.main}`,
    color: `1px solid ${theme.palette.error.main}`,
  },
}));

export const Label = styled("label")(({ theme }: { theme: Theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "14px",
  fontWeight: 500,
}));

export const Question = styled("p")(() => ({
  display: "flex",
  color: "#24272C",
  gap: "5px",
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "120%",
  a: {
    color: "#1B28BC",
    textDecoration: "none",
  },
}));

export const ErrorMessage = styled("div")<{color: string}>(({ theme, color }: { theme: Theme, color: string }) => ({
  position: "absolute",
  padding: "10px 20px",
  right: "50px",
  bottom: "50px",
  background: color,
  color: theme.palette.primary.light,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "120%",
  borderRadius: "6px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px'
}));
