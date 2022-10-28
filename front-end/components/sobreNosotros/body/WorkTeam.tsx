import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const WorkTeamAboutUs: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' sx={{ marginBottom: '3.75rem' }}>

            <Box className={ styles['about-us-work-team-title'] }>
                <Typography variant='h3' color='info.dark' fontWeight={ 900 } sx={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                    Nuestro equipo de trabajo   
                </Typography>
                <Typography variant='body2' color='info.dark'>
                    Contamos con un excelente equipo de trabajo formado por profesionales especializados y certificados en el área, con más de 50 años de experiencia acumulados en la instalación, mantenimiento, calibración y fabricación de instrumentaria petrolera y petroquímica, capaces de entregar excelentes resultados en cada uno de sus proyectos.    
                </Typography>
            </Box>

            <Box className={ styles['about-us-work-team-img'] }>

                <Image 
                    src='/diagnostic-projects.png'
                    alt='Equipo de trabajo de Cosapi'
                    layout='fill'
                />
                
            </Box>

        </Box>

    )
}
