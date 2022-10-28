import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Grid, Typography } from '@mui/material';
import { EventAvailable, WatchLater } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';


export const InfoProject: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        
        <Grid container spacing={ 1 }>

            <Grid item xs={ 12 } md={ 4 } data-aos='zoom-out'>

                <Box className={ styles['project-info-container'] }>
                    <WatchLater sx={{ fontSize: '3.75rem', color: 'black' }} />

                    <Typography variant='body2' color='info.dark' fontWeight={ 700 } sx={{ fontSize: '1.5rem' }}>
                        Tiempo de completación
                    </Typography>

                    <Typography variant='body2' color='info.dark' fontWeight={ 500 } sx={{ fontSize: '1.5rem' }}>
                        2 semanas
                    </Typography>
                </Box>


            </Grid>

            <Grid item xs={ 12 } md={ 4 } data-aos='zoom-out'>

                <Box className={ styles['project-info-container'] }>
                    <Image 
                        src= '/logo-pdvsa.svg'
                        alt= 'PDVSA'
                        width= { 255 }
                        height= { 100 }
                    />
                </Box>


            </Grid>

            <Grid item xs={ 12 } md={ 4 } data-aos='zoom-out'>

                <Box className={ styles['project-info-container'] }>
                    <EventAvailable sx={{ fontSize: '3.75rem', color: 'black' }} />

                    <Typography variant='body2' color='info.dark' fontWeight={ 700 } sx={{ fontSize: '1.5rem' }}>
                        Fecha de realización
                    </Typography>

                    <Typography variant='body2' color='info.dark' fontWeight={ 500 } sx={{ fontSize: '1.5rem' }}>
                        2010
                    </Typography>
                </Box>

            </Grid>
          
        </Grid>

    )
}
