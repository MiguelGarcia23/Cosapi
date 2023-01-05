import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroMaintenance: FC = () => {

    return (

        <Box sx={{ marginBottom: '2.5rem', padding: '0 3.75rem' }}>

            <Typography variant='h5' color='info.dark' fontWeight={ 400 } className={ styles['maintenance-intro-title']}>
                En Cosapi ofrecemos soluciones para ayudarte a maximizar el valor y funcionamiento de tus maquinarias, ya que ponemos a tu disposición cualquier tipo de mantenimiento, bien sea para optimizar el rendimiento y la calidad de los equipos o para realizar reparaciones y corregir errores.    
            </Typography>

            <Typography variant='body2' color='info.dark' className={ styles['maintenance-intro-subtitle'] }>
                Puedes contar con nosotros para el mantenimiento y reparación de equipos como:
            </Typography>

        </Box>

    )
}