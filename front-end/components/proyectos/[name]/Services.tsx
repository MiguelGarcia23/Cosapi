import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { CardService } from './CardService';

import styles from './Body.module.css';

interface Props {
    services: string[];
}


export const ServicesProject: FC<Props> = ({ services }) => {

    return (

        <Box className={ styles['project-services'] }>

            <Typography variant='h4' color='info.main' className={ styles['project-services-title'] }>
                Servicios ofrecidos
            </Typography>

            <Grid container spacing={ 2 } className={ styles['project-services-cards'] }>

                <>
                    {
                        services.map( ( service, i ) => {

                            return(
                                <CardService 
                                    key= { i }
                                    title= {`${ service.charAt(0).toUpperCase() + service.slice(1) } de válvulas de seguridad y alivio`}
                                />
                            )

                        })
                    }
                </>

            </Grid>

        </Box>

    )
}
