import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const font = '"Montserrat", sans-serif';

let theme = createTheme({
    palette: {
        primary: {
            main: '#6200EE',
            dark: '#8731ff',
            light: '#FEFEFE'
        },
        secondary: {
            main: '#151515',
            light: '#EBEBEB'
        },
        text: {
            disabled: '#151515'
        },
        error: {
            main: '#FF4D4F'
        }
    },
    typography: {
        fontFamily: font,
    }
})

theme = responsiveFontSizes(theme);

export default theme;