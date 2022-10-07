import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode:'dark',
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