import { Input } from "@mui/material";
import { CustomInputProps } from "./CustomInput.props";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles";

export function CustomInput({ appearance = "default", ...props }: CustomInputProps) {
  const StyledInput = styled(Input)(({ theme }: { theme: Theme }) => ({
    padding: "14px 16px",
    background: "transparent",
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '6px',
    color: theme.palette.secondary.main,
    textTransform: "revert",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "120%",
    fontFamily: theme.typography.fontFamily,
    boxShadow: "0 4px 18px 0 rgba(51, 51, 51, 0.04)",
    "&::after": {
        display: 'none'
    },
    "&::before": {
        display: 'none'
    },
    "&::placeholder": {
        color: theme.palette.secondary.light,
        opacity: '.7'
    }
  }));

  return <StyledInput {...props}></StyledInput>;
}
