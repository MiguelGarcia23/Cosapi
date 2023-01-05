import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroSupplies: FC = () => {

    return (

        <Box sx={{ marginBottom: '2.5rem', padding: '0 3.75rem' }}>

            <Typography variant='h5' color='info.dark' fontWeight={ 400 } className={ styles['supplies-intro-title']}>
                Ponemos a tu alcance equipos de última tecnología que te ayudarán a obtener los mejores resultados en tu proyecto, de la mano de personal capacitado con años de experiencia en el mercado seleccionados según tus necesidades.    
            </Typography>

            <Typography variant='body2' color='info.dark' className={ styles['supplies-intro-subtitle'] }>
                Tenemos disponibles para alquilar los siguientes equipos:
            </Typography>

        </Box>

    )
}