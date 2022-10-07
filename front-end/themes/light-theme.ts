import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode:'light',
        background: {
            default: grey[300],
        },
        primary: {
            main: '#4A148C'
        },
        secondary: {
            main: '#19857B'
        },
        error: {
            main: red.A400
        }
    },
})