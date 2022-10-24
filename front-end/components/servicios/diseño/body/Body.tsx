import { FC, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const BodyDesing: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' className={ styles['design-body'] }>

            <Typography variant='h5' color='info.dark' className={ styles['design-intro-title']}>
                En Cosapi entendemos que cada proyecto tiene necesidades diferentes, por lo que estamos preparados para diseñar planes a medida en función a los objetivos concretos de cada cliente, ajustándonos a los tiempos, presupuesto, etc.    
            </Typography>

            <Typography variant='h5' color='info.dark' className={ styles['design-intro-title']}>
                Nuestros profesionales están capacitados para establecer, según los requerimientos del proyecto, cuáles son los recursos necesarios para desarrollarlo, tomando en cuenta materiales y mano de obra. Y están en completa capacidad de asesorar sobre los productos más eficientes de acuerdo a la calidad de resultados y al costo, para asegurarse de entregar soluciones óptimas con los más altos estándares de calidad y garantizando la seguridad.  
            </Typography>

        </Box>

    )
}
