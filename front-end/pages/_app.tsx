import { useState } from 'react';
import type { AppProps } from 'next/app';

import { CssBaseline, FormControlLabel, FormGroup, Switch, ThemeProvider } from '@mui/material';

import { lightTheme, darkTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  const [mode, setMode] = useState("light");

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  return(

    <ThemeProvider theme={ selectedTheme }>
      <CssBaseline />
      <FormGroup>
        <FormControlLabel control={<Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />} label="Dark Mode" />
      </FormGroup>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp;