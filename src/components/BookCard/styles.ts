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

export const CardActions = styled("div")<{searched: boolean}>(({ theme, searched }: { theme: Theme, searched: boolean }) => ({
  opacity: 0,
  transition: "opacity 0.7s ease",
  position: "absolute",
  top: "16px",
  right: "-32px",
  display: searched ? 'none' : 'flex',
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

export const StatusBar = styled("div")<{selectedStatus: number}>(({ theme, selectedStatus }: { theme: Theme, selectedStatus: number }) => ({
  padding: "2px 12px",
  background: selectedStatus === 0
  ? '#FF0000'
  : selectedStatus === 1
  ? '#FFEC43'
  : '#00FF29',
  color: theme.palette.primary.light,
  borderRadius: "8.5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SelectDrop = styled("select")(({ theme }: { theme: Theme }) => ({
  position: 'absolute',
  right: 0,
  padding: '10px 5px 10px 20px',
  border: 'transparent',
  color: theme.palette.primary.light,
  background: theme.palette.primary.main,
  borderRadius: '6px',
  outline: 'none',
  boxShadow: 'none',
  fontSize: '14px',
  ":focus": {
    outline: 'none'
  },
  option: {
    padding: '10px 0 10px 20px',
    fontSize: '14px'
  },
  fontFamily: 'inherit',
}));