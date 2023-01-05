import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { CardService } from './CardService';

import styles from './Body.module.css';

interface Props {
    services: string[];
}


export const ServicesProject: FC<Props> = ({ services }) => {

    let newArrayServices: string[] = [];
    
    services.forEach( service => {

        switch ( service ) {
            case 'instalacion':
                newArrayServices.push('Instalación de equipos');
                break;
            case 'mantenimiento':
                newArrayServices.push('Mantenimiento y reparación de equipos');
                break;
            case 'calibracion':
                newArrayServices.push('Calibración de instrumentos');
                break;
            case 'automatizacion':
                newArrayServices.push('Automatización de equipos y sistemas');
                break;
            default:
                newArrayServices.push('Alquiler de equipos y suministro de personal especializado');
                break;
        }
    })

    return (

        <Box className={ styles['project-services'] }>

            <Typography variant='h4' color='info.main' className={ styles['project-services-title'] }>
                Servicios ofrecidos
            </Typography>

            <Grid container spacing={ 2 } className={ styles['project-services-cards'] }>

                <>
                    {
                        newArrayServices.map( ( service, i ) => {

                            return(
                                <CardService 
                                    key= { i }
                                    title= { service }
                                />
                            )

                        })
                    }
                </>

            </Grid>

        </Box>

    )
}
