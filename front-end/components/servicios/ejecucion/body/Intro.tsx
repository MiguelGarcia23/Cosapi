import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroExecution: FC = () => {

    return (

        <Box sx={{ marginBottom: '3.75rem' }}>

            <Typography variant='h5' color='info.dark' className={ styles['execution-intro-title']}>
                Nuestros años de experiencia nos han permitido desarrollar una completa capacidad de realizar servicios de ejecución de proyectos, dando siempre vital importancia a entregar resultados profesionales y eficientes. Estamos a su disposición para servicios de:    
            </Typography>

        </Box>

    )
}
