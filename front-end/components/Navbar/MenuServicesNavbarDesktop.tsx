import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import styles from './Navbar.module.css';

export const MenuServicesNavbarDesktop: FC = () => {

    return (

        <Box className={ styles['navbar-menu-services'] }>

            <Grid container spacing={ 0 } sx={{ width: '100vw', display: 'flex', flexWrap: 'nowrap' }}>

                <Grid item className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-diagnosis']}` }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] }>1</Typography>
                    <Typography variant='h2' color='info.main'>Diagnóstico</Typography>
                </Grid>

                <Grid item className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-design']}` }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] }>2</Typography>
                    <Typography variant='h2' color='info.main'>Diseño</Typography>
                </Grid>

                <Grid item className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-execution']}` }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] }>3</Typography>
                    <Typography variant='h2' color='info.main'>Ejecución</Typography>
                </Grid>

                {/* <svg width={ 2000 } height={ 1000 } style={{ position: 'absolute', zIndex: 100 }}>
                    <path d="M 280 250 Q 480 120  740 250 T 1250 270"
                        stroke="white" stroke-dasharray="10" stroke-width={ 4 } fill='transparent' />
                </svg> */}

            </Grid>

            

        </Box>

    )
}
