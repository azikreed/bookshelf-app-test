import { CustomInputProps } from "./CustomInput.props";
import { Theme, styled } from "@mui/material/styles";
import React from "react";

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(({ appearance = "default", ...props }, ref) => {
  const StyledInput = styled('input')(({ theme }: { theme: Theme }) => ({
    padding: "14px 16px",
    background: "transparent",
    border: `1px solid ${theme?.palette?.secondary?.light}`,
    borderRadius: '6px',
    color: theme?.palette?.secondary?.main,
    textTransform: "revert",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "120%",
    fontFamily: theme?.typography?.fontFamily,
    boxShadow: "0 4px 18px 0 rgba(51, 51, 51, 0.04)",
    "&::placeholder": {
        color: theme?.palette?.secondary?.light,
    },
    "&:focus": {
      outline: 'none'
    }
  }));

  return <StyledInput ref={ref} {...props}></StyledInput>;
})
