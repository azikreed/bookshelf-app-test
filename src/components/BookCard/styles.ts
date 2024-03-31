import { Theme, styled } from "@mui/material/styles";

export const Card = styled("div")(({ theme }: { theme: Theme }) => ({
  position: "relative",
  "&:hover": {
    ".card-actions": {
      opacity: 1,
    },
  },
  width: "calc((100% - 48px) / 3)",
  padding: "32px",
  background: theme.palette.primary.light,
  borderRadius: "12px",
  boxShadow: "0 4px 24px 0 rgba(51, 51, 51, 0.08)",
}));

export const CardBody = styled("div")(({ theme }: { theme: Theme }) => ({
  p: {
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  marginTop: "6px",
  marginBottom: "20.5px",
}));

export const CardFooter = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CardActions = styled("div")(({ theme }: { theme: Theme }) => ({
  opacity: 0,
  transition: "opacity 0.7s ease",
  position: "absolute",
  top: "16px",
  right: "-32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2px",
  width: "32px",
  zIndex: 2,
  button: {
    padding: "8px",
    borderRadius: "6px",
    img: {
      width: "16px",
      height: "16px",
    },
    boxShadow: "0 6px 32px 0 rgba(21, 21, 21, 0.48)",
  },
}));
