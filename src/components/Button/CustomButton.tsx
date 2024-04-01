import { CustomButtonProps } from "./CustomButton.props";
import { Theme, styled } from "@mui/material/styles";


export function CustomButton({ children, appearance = 'default',innerRef, ...props }: CustomButtonProps) {
  const StyledButton = styled('button')(({ theme }: { theme: Theme }) => ({
    padding: "10px 24px",
    cursor: 'pointer',
    background: `${appearance === 'default' ? theme?.palette?.primary?.main : 'transparent'}`,
    transition: '.7s',
    "&:hover": {
      background: `${appearance === 'default' ? theme?.palette?.primary?.dark : theme?.palette?.primary?.main} `,
      color: `${appearance === 'default' ? theme?.palette?.primary?.light : theme?.palette?.primary?.light}`,
      border: `1px solid transparent`,
    },
    border: `1px solid ${appearance === 'default' ? 'transparent' : theme?.palette?.primary?.main}`,
    color: `${appearance === 'default' ? theme?.palette?.primary?.light : theme?.palette?.primary?.main}`,
    textTransform: "revert",
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: theme?.typography?.fontFamily,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '4px'
  }));

  return <StyledButton ref={innerRef} {...props}>{children}</StyledButton>;
}
