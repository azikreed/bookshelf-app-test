import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const font = '"Mulish", sans-serif';

let theme = createTheme({
    palette: {
        primary: {
            main: '#6200EE',
        },
        secondary: {
            main: '#151515',
            light: '#EBEBEB'
        },
        text: {
            disabled: '#151515'
        }
    },
    typography: {
        fontFamily: font,
    }
})

theme = responsiveFontSizes(theme);

export default theme;