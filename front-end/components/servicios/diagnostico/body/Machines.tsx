import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const MachinesDiagnostic: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up'>

            <Box className={ styles['diagnostic-machines-img']}>
                <Image 
                    src='/diagnostic-machines.png'
                    alt='Imagen de evaluación de maquinaria'
                    layout='fill'
                />
            </Box>

            <Box className={ styles['diagnostic-machines-body-container'] }>

                <Typography variant='h2' color='info.dark' sx={{ textAlign: 'left', marginBottom: '1rem' }}>
                    Evaluación de maquinaria
                </Typography>

                <Typography variant='body2' color='info.dark' sx={{ marginBottom: '0.625rem' }}>
                    Estamos capacitados para evaluar el rendimiento y situación actual de tus equipos y maquinaria para identificar si están trabajando correctamente, si existe alguna falla o si creemos que podría desarrollar una falla a corto plazo.
                </Typography>

                <Typography variant='body2' color='info.dark' sx={{ marginBottom: '2.5rem' }}>
                    La identificación de estos problemas a tiempo permite idear soluciones para corregirlos antes de que sea demasiado tarde y poner a trabajar tus equipos de manera eficiente, llo que te permitirá ahorrar tanto tiempo como dinero.
                </Typography>

                <Typography variant='h4' color='info.dark' sx={{ marginBottom: '1rem' }}>
                    ¿Listo para optimizar tu maquinaria?
                </Typography>

                <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                  <Typography variant='h5' color='info.main' textTransform='capitalize'>Agendar reunión</Typography>
                </Button>    

            </Box>

        </Box>

    )
}
