import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroInstallation: FC = () => {

    return (

        <Box sx={{ marginBottom: '2.5rem', padding: '0 3.75rem' }}>

            <Typography variant='h5' color='info.dark' fontWeight={ 400 } className={ styles['installation-intro-title']}>
                Instalar equipos que sean accesibles y seguros requiere tanto una estrategia inteligente como los productos correctos. En Cosapi ofrecemos la experiencia y los conocimientos de la industria necesarios, para brindar el soporte técnico que haga de tu próximo proyecto todo un éxito.    
            </Typography>

            <Typography variant='body2' color='info.dark' className={ styles['installation-intro-subtitle'] }>
                Puedes contar con nosotros para instalar equipos como:
            </Typography>

        </Box>

    )
}