import { FC, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const IntroExecution: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' sx={{ marginBottom: '3.75rem' }}>

            <Typography variant='h5' color='info.dark' className={ styles['execution-intro-title']}>
                Nuestros años de experiencia nos han permitido desarrollar una completa capacidad de realizar servicios de ejecución de proyectos, dando siempre vital importancia a entregar resultados profesionales y eficientes. Estamos a su disposición para servicios de:    
            </Typography>

        </Box>

    )
}
