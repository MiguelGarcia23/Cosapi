import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroCalibration: FC = () => {

    return (

        <Box sx={{ marginBottom: '2.5rem', padding: '0 3.75rem' }}>

            <Typography variant='h5' color='info.dark' fontWeight={ 400 } className={ styles['calibration-intro-title']}>
                La calibración de los instrumentos es de gran importancia para garantizar la obtención de resultados óptimos y así evitar errores que pueden poner en riesgo la seguridad de tu proyecto. En Cosapi contamos con los conocimientos necesarios para mantener tus equipos en el mejor estado posible, además, tenemos bancos de prueba y herramientas de alta tecnología para asegurarnos de entregar resultados excelentes.    
            </Typography>

            <Typography variant='body2' color='info.dark' className={ styles['calibration-intro-subtitle'] }>
                Puedes contar con nosotros para la calibración de instrumentos como:
            </Typography>

        </Box>

    )
}