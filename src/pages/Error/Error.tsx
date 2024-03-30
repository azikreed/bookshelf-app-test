import { styled } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { CustomButton } from "../../components/Button/CustomButton";
import { Link, useLocation } from "react-router-dom";


export const StyledError = styled("div")(() => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "72px",
}));

export const StyledButtons = styled("div")(() => ({
  display: "flex",
  alignItems:'center',
  gap: "12px",
  button: {
    width: "240px",
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

export const ErrorPage = () => {
    const location = useLocation();

  return (
    <StyledError>
        <img src="/error_page.png" alt="" />
        <StyledButtons>
          <CustomButton><Link to='/'>Go Home Page</Link></CustomButton>
          <CustomButton appearance="transparent" onClick={() => window.location.reload()}>Reload Page</CustomButton>
        </StyledButtons>
    </StyledError>
  );
};
