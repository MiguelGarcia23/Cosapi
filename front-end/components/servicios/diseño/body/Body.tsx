import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const BodyDesing: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box className={ styles['design-body'] }>

            <Box data-aos='fade-up' style={{ marginBottom: '3.75rem' }}>
                <Typography variant='h5' color='info.dark' className={ styles['design-intro-title']}>
                    En Cosapi entendemos que cada proyecto tiene necesidades diferentes, por lo que estamos preparados para diseñar planes a medida en función a los objetivos concretos de cada cliente, ajustándonos a los tiempos, presupuesto, etc.    
                </Typography>

                <Typography variant='h5' color='info.dark' className={ styles['design-intro-title']}>
                    Nuestros profesionales están capacitados para establecer, según los requerimientos del proyecto, cuáles son los recursos necesarios para desarrollarlo, tomando en cuenta materiales y mano de obra. Y están en completa capacidad de asesorar sobre los productos más eficientes de acuerdo a la calidad de resultados y al costo, para asegurarse de entregar soluciones óptimas con los más altos estándares de calidad y garantizando la seguridad.  
                </Typography>
            </Box>

            <Box data-aos='fade-up' className={ styles['design-img']}>
                <Image 
                    src='/diagnostic-projects.png'
                    alt='Imagen de diseño'
                    layout='fill'
                />
            </Box>

            <Box className={ styles['diagnostic-info-container'] }>

                <Typography variant='body2' color='info.dark' sx={{ marginBottom: '2.5rem' }}>
                    Nuestros profesionales están capacitados para establecer, según los requerimientos del proyecto, cuáles son los recursos necesarios para desarrollarlo, tomando en cuenta materiales y mano de obra. Y están en completa capacidad de asesorar sobre los productos más eficientes de acuerdo a la calidad de resultados y al costo, para asegurarse de entregar soluciones óptimas con los más altos estándares de calidad y garantizando la seguridad.    
                </Typography>

                <Typography variant='h4' color='info.dark' sx={{ marginBottom: '1rem' }}>
                    Construyamos juntos tu próximo proyecto
                </Typography>

                <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                    <Typography variant='h5' color='info.main' textTransform='capitalize'>Agendar reunión</Typography>
                </Button>    

            </Box>

        </Box>

    )
}
