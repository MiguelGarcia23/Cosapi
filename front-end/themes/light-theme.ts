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
    typography: {
        h1: {
            fontSize: '3.75rem',
            fontWeight: 900
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 900
        },
        h3: {
            fontSize: '2.125rem',
            fontWeight: 700
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400
        },
        body2: {
            fontSize: '1.125rem',
            fontWeight: 400
        }
    }
})