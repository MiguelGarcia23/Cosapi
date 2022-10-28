import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { CardService } from './CardService';

import styles from './Body.module.css';

export const ServicesProject: FC = () => {

    return (

        <Box className={ styles['project-services'] }>

            <Typography variant='h4' color='info.main' className={ styles['project-services-title'] }>
                Servicios ofrecidos
            </Typography>

            <Grid container spacing={ 2 } className={ styles['project-services-cards'] }>
                
                <CardService 
                    title= 'Mantenimiento de válvulas de seguridad y alivio'
                />

                <CardService 
                    title= 'Calibración de válvulas de seguridad y alivio'
                />

            </Grid>

        </Box>

    )
}
