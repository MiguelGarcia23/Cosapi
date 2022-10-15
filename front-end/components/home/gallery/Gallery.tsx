import { FC } from 'react';

import { Box, Button, Typography, Grid } from '@mui/material';

import { CardGallery } from './CardGallery';

import styles from './Gallery.module.css';

export const Gallery: FC = () => {
    return (

        <Box className={ styles['gallery-home'] }>

            <Typography variant='h2' color='info.dark'>Galería de proyectos</Typography>

            <Grid container spacing={ 2 }>

                <CardGallery 
                    img='/petromonagas.png'
                    alt='Imagen de Petromonagas'
                    year='2020'
                    title='Petromonagas'
                />

                <CardGallery 
                    img='/pdvsa-gas.png'
                    alt='Imagen de PDVSA Gas'
                    year='2021'
                    title='PDVSA Gas'
                />

                <CardGallery 
                    img='/petrosucre.png'
                    alt='Imagen de Petrosucre'
                    year='2020'
                    title='Petrosucre'
                />

                <CardGallery 
                    img='/petrodelta.png'
                    alt='Imagen de Petrodelta'
                    year='2021'
                    title='Petrodelta'
                />

            </Grid>

            <Button variant="outlined" color="secondary" className={ styles['gallery-home-button'] }>
                <Typography variant="h5" color="info.dark">Ver más proyectos</Typography>
            </Button>

        </Box>
        
    )
}
