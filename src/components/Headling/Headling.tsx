import { Typography } from "@mui/material";
import { HeadlingProps } from "./Headling.props";
import { Theme, styled } from "@mui/material/styles";


export const Headling = ({ children, appearance }: HeadlingProps) => {
  const StyledTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
    color: theme?.palette?.secondary?.main,
    fontSize: appearance === 'small' ? "16px !important" : "36px !important",
    fontWeight: appearance === 'small' ? 600 : 700,
    fontFamily: theme?.typography?.fontFamily,
  }));

  return <StyledTypography variant="h1">{children}</StyledTypography>;
};
