import { useState } from 'react';
import type { AppProps } from 'next/app';

import { CssBaseline, FormControlLabel, FormGroup, Switch, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import { lightTheme, darkTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  /* const [mode, setMode] = useState("light");

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme; */

  return(

    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      {/* <FormGroup>
        <FormControlLabel control={<Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />} label={mode === "light" ? "Light Mode" : "Dark Mode"} />
      </FormGroup> */}
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp;