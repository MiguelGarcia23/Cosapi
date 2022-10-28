import { FC, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const IntroContact: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' sx={{ padding: '0 3.75rem', marginBottom: '3.75rem' }}>

            <Box className={ styles['contact-intro']}>
                <Typography variant='h5' color='info.dark'>
                    Nuestra empresa nace en 2007 con la principal misión de brindarle a nuestros clientes el mayor grado de satisfacción posible, proporcionándoles asesoría, mano de obra y suministros que resulten en soluciones confiables que garanticen la mejor calidad en sus proyectos.    
                </Typography>
            </Box>

        </Box>

    )
}
