import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { CardMainServices } from './CardMainServices';

import styles from './MainServices.module.css';

export const MainServices: FC = () => {

    return (
        
        <Box className={ styles['main-services'] }>

            <Typography variant='h2' color='info.main'>Nuestros servicios populares</Typography>
        
            <Grid container spacing={ 2 } sx={{ justifyContent: 'center' }}>

                <CardMainServices 
                    img='/projects.png'
                    alt='Imagen de desarrollo de proyectos'
                    subtitle='Diseño'
                    title='Desarrollo de proyectos'
                />


                <CardMainServices 
                    img='/installation.png'
                    alt='Imagen de instalación de equipos'
                    subtitle='Ejecución'
                    title='Instalación de equipos'
                />

                <CardMainServices 
                    img='/equipment.png'
                    alt='Imagen de suministro de equipos'
                    subtitle='Ejecución'
                    title='Suministro de equipos'
                />
              
            </Grid>
        
        </Box>

    )
}
