import { Button } from "@mui/material";
import { CustomButtonProps } from "./CustomButton.props";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles";


export function CustomButton({ children, appearance = 'default', ...props }: CustomButtonProps) {
  const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
    padding: "10px 24px",
    background: `${appearance === 'default' ? theme?.palette?.primary?.main : 'transparent'}`,
    transition: '.7s',
    "&:hover": {
      background: `${appearance === 'default' ? 'transparent' : theme?.palette?.primary?.main} `,
      color: `${appearance === 'default' ? theme?.palette?.primary?.main : theme?.palette?.primary?.light}`,
      border: `1px solid ${ appearance === 'default' ? theme?.palette?.primary?.main : 'transparent'}`,
    },
    border: `1px solid ${appearance === 'default' ? 'transparent' : theme?.palette?.primary?.main}`,
    color: `${appearance === 'default' ? theme?.palette?.primary?.light : theme?.palette?.primary?.main}`,
    textTransform: "revert",
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: theme?.typography?.fontFamily,
    display: 'flex',
    gap: '12px',
    alignItems: 'center',

  }));

  return <StyledButton {...props}>
    {children}
  </StyledButton>;
}
