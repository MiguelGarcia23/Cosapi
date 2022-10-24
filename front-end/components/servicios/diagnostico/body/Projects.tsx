import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Button, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardProjectsDiagnostic } from './CardProjects';

import styles from './Body.module.css';

export const ProjectsDiagnostic: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' sx={{ marginBottom: '3.75rem' }}>

            <Box className={ styles['diagnostic-projects-img']}>
                <Image 
                    src='/diagnostic-projects.png'
                    alt='Imagen de evaluación de proyectos'
                    layout='fill'
                />
            </Box>

            <Box className={ styles['diagnostic-projects-body-container'] }>

                <Typography variant='h2' color='info.dark' sx={{ textAlign: 'left', marginBottom: '1rem' }}>
                    Evaluación de proyectos
                </Typography>

                <Typography variant='body2' color='info.dark' sx={{ marginBottom: '0.625rem' }}>
                    Nuestro grupo de profesionales detectará las necesidades de tu proyecto y, de esta forma, podrá establecer la mejor alternativa para ejecutarlo y brindar los más óptimos resultados evitando la pérdida de tiempo y de dinero.
                </Typography>

                <Typography variant='body2' color='info.dark' sx={{ fontWeight: 700, marginBottom: '2.5rem' }}>
                    Así es como funciona:
                </Typography>

                <Grid container spacing={ 2 } sx={{ justifyContent: 'center', marginBottom: '2.5rem' }}>

                    <CardProjectsDiagnostic 
                        img='/diagnostic-projects-number-1.svg'
                        alt='Imagen de paso 1'
                        title='Reunión'
                        info='Tendrás una reunión con algunos de nuestros profesionales donde plantearás tus ideas. y podremos coordinar necesidades, tiempos y presupuesto'
                    />

                    <CardProjectsDiagnostic 
                        img='/diagnostic-projects-number-2.svg'
                        alt='Imagen de paso 2'
                        title='Diseño y planificación'
                        info='En base a tus ideas de proyecto y necesidades planteadas en la reunión, haremos una propuesta donde explicaremos los recursos necesarios para desarrollar el proyecto'
                    />

                    <CardProjectsDiagnostic 
                        img='/diagnostic-projects-number-3.svg'
                        alt='Imagen de paso 3'
                        title='Evaluación'
                        info='Una vez que comience el desarrollo del proyecto nuestros profesionales se encargaran de hacer un seguimiento y evaluaciones rutinarias para asegurarnos de que todo marche de la manera más eficiente posible'
                    />
              
                </Grid>

                <Typography variant='h4' color='info.dark' sx={{ marginBottom: '1rem' }}>
                    ¿Qué estas esperando? Contáctanos para que construyamos juntos tu próximo proyecto
                </Typography>

                <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                  <Typography variant='h5' color='info.main' textTransform='capitalize'>Agendar reunión</Typography>
                </Button>    

            </Box>

        </Box>

    )
}
