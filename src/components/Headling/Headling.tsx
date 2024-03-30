import { Typography } from "@mui/material";
import { HeadlingProps } from "./Headling.props";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "36px !important",
  fontWeight: 700,
  fontFamily: theme.typography.fontFamily,
}));

export const Headling = ({ children }: HeadlingProps) => {
  return <StyledTypography variant="h1">{children}</StyledTypography>;
};
