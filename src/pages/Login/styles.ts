import { styled } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const AuthPage = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const Form = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  marginTop: "36px",
  marginBottom: "12px",
}));

export const Field = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

export const Label = styled("label")(({theme}: {theme: Theme}) => ({
    color: theme.palette.secondary.main,
    fontSize: '14px',
    fontWeight: 500,
}));

export const Question = styled("p")(() => ({
  display: "flex",
  color: "#24272C",
  gap: "5px",
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: '120%',
  a: {
    color: "#1B28BC",
    textDecoration: "none",
  },
}));