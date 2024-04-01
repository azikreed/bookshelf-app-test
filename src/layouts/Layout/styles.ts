import { CircularProgress } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";

export const MainLayout = styled("div")(() => ({
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
}));

export const Navbar = styled("nav")(() => ({
  padding: "12px 0",
  display: "flex",
  justifyContent: "space-between",
}));

export const Side = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  div: {
    position: "relative",
    img: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
    input: {
      border: "none",
      paddingLeft: "36px",
      width: "310px",
      "&:focus + img": {
        display: "none",
      },
      "&:focus + .close": {
        display: "block",
      },
      "&:focus": {
        paddingLeft: '36px',
        background: theme.palette.primary.light,
        width: "380px",
      },
    },
    ".search_black": {
      position: "absolute",
      top: "50%",
      left: '12px',
      transform: "translateY(-50%)",
      display: "none",
    },
    ".close": {
      cursor: 'pointer',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "none",
      right: "12px",
    },
  },
}));

export const LayoutBody = styled("main")(() => ({
  padding: "36px 0",
}));

export const MainBody = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const MainTop = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  h1: {
    color: theme.palette.primary.light,
    span: {
      color: theme.palette.primary.main,
    },
  },
}));

export const MainBottom = styled("div")(({ theme }: { theme: Theme }) => ({
  p: {
    fontSize: "20px",
    fontWeight: 400,
    margin: 0,
    color: theme.palette.primary.light,
  },
}));

export const Books = styled("div")(() => ({
  padding: "36px 0",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: "24px",
}));

export const Loader = styled(CircularProgress)(
  ({ theme }: { theme: Theme }) => ({
    position: "absolute",
    right: "200px",
    bottom: "50px",
    color: theme.palette.primary.main,
  })
);
