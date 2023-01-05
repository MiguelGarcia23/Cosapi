import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroAutomation: FC = () => {

    return (

        <Box sx={{ marginBottom: '2.5rem', padding: '0 3.75rem' }}>

            <Typography variant='h5' color='info.dark' fontWeight={ 400 } className={ styles['automation-intro-title']}>
                En Cosapi ofrecemos servicios de automatización para optimizar y mejorar el funcionamiento de tu planta industrial mediante la incorporación y uso sistemático de varios tipos de sistemas o elementos computarizados, electromecánicos, electroneumáticos y electrohidráulicos.    
            </Typography>

            <Typography variant='body2' color='info.dark' className={ styles['automation-intro-subtitle'] }>
                ¿Por qué automatizar?
            </Typography>

        </Box>

    )
}