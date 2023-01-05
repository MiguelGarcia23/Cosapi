import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const IntroAboutUs: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' sx={{ marginBottom: '3.75rem' }}>

            <Box className={ styles['about-us-intro-title']}>
                <Typography variant='h5' color='info.dark' sx={{ marginBottom: '1rem' }} className={ styles['about-us-intro-paragraph']}>
                    Somos una empresa dedicada a la prestación de servicios integrales relacionados con la instrumentación y válvulas requeridas en la industria petrolera y petroquímica.    
                </Typography>
                <Typography variant='h5' color='info.dark' sx={{ marginBottom: '1rem' }} className={ styles['about-us-intro-paragraph']}>
                    Nuestra empresa nace en 2007 con la principal misión de brindarle a nuestros clientes el mayor grado de satisfacción posible, proporcionándoles asesoría, mano de obra y suministros que resulten en soluciones confiables que garanticen la mejor calidad en sus proyectos.    
                </Typography>
                <Typography variant='h5' color='info.dark' className={ styles['about-us-intro-paragraph']}>
                    En 2015 nos convertimos en Cosapi Servicios, C.A. Una refundación de nuestra cooperativa y estamos orgullosos de seguir contanto con toda nuestra infraestructura y personal especializado, además de la amplia experiencia comprobada y capacidad instalada de la cooperativa.    
                </Typography>
            </Box>

            <Box className={ styles['about-us-intro-img'] }>

                <Image 
                    src='/icon-logo.svg'
                    alt='Logo de Cosapi'
                    width={ 155 }
                    height={ 200 }
                />

                <Typography variant='h3' color='info.main' fontWeight={ 500 } className={ styles['about-us-intro-text'] }>
                    Más de <strong style={{ fontWeight: '900' }}>15 años</strong> brindando servicios de calidad
                </Typography>
                
            </Box>

        </Box>

    )
}
