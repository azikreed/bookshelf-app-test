import { Theme, styled } from "@mui/material/styles";

export const PopupProvider = styled("div")<{ isOpen: boolean }>(
  ({ isOpen }) => ({
    display: isOpen ? "block" : "none",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    zIndex: 1,
  })
);

export const StyledPopup = styled("div")(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  padding: "24px 28px",
  background: theme.palette.primary.light,
  borderRadius: "12px",
  width: "430px",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  boxShadow: "0 4px 32px 0 rgba(51, 51, 51, 0.04)",
}));

export const PopupTitle = styled("div")(() => ({
  p: {
    margin: 0,
    fontWeight: 600,
    fontSize: "20px",
  },
  display: "flex",
  justifyContent: "space-between",
  button: {
    width: "auto",
    padding: 0,
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
}));

export const PopupBody = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  p: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
}));

export const PopupFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  button: {
    width: "calc((100% - 12px) / 2)",
  },
}));

export const PopupForm = styled("form")(() => ({
  ".input_div": {
    position: "relative",
    img: {
      position: "absolute",
      top: '50%',
      left: '16px',
      opacity: '.5',
      transform: 'translateY(-50%)'
    },
    input: {
      width: "100%",
      paddingLeft: '48px'
    },
    marginBottom: '28px'
  },
}));
