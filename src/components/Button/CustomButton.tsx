import { Button } from "@mui/material";
import { CustomButtonProps } from "./CustomButton.props";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  padding: "10px 24px",
  background: theme.palette.primary.main,
  ":hover": theme?.palette?.primary?.dark,
  color: "white",
  textTransform: "revert",
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: theme.typography.fontFamily,
  display: 'flex',
  gap: '12px',
  alignItems: 'center'
}));

export function CustomButton({ children, ...props }: CustomButtonProps) {
  return <StyledButton {...props}>
    {children}
  </StyledButton>;
}
