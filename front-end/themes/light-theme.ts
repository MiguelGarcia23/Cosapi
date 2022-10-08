import { createTheme } from '@mui/material';
import { lightGreen, red } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode:'light',
        background: {
            default: '#FFFFFF',
        },
        primary: {
            light: '#696A6C',
            main: '#2E2E2F',
            dark: '#0C0C0C'
        },
        secondary: {
            main: '#0184EF'
        },
        info: {
            main: '#FFFFFF',
            dark: '#000000'
        },
        error: {
            main: red.A400
        },
        success: {
            main: lightGreen[500]
        }
    },
})