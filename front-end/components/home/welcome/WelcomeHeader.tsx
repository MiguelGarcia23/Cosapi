import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Welcome.module.css';

export const WelcomeHeader: FC = () => {

  return (

    <Box className={ styles['welcome-header'] }>

        <Typography variant='h2' color='info.dark' sx={{ marginBottom: '1rem' }}>
          Bienvenido a Cosapi
        </Typography>

        <Typography variant='h4' color='info.dark' className={ styles['welcome-paragraph'] }>
          Somos una empresa multidisciplinaria dedicada a la prestación de servicios integrales y al suministro de productos de vanguardia para el desarrollo y ejecución de proyectos en la industria petrolera y petroquímica, enérgica, minera y mucho más
        </Typography>
        
    </Box>

  )
}
