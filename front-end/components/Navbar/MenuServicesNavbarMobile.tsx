import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Navbar.module.css';

export const MenuServicesNavbarMobile: FC = () => {

    const router = useRouter();

    const handleClick = ( event: any ): void => {
        router.push(`/servicios/${ event.target.id }`)
    }

    useEffect(() => {
        AOS.init({ duration: 600 })
    }, [])

    return (

        <Box data-aos='zoom-out' className={ styles['navbar-menu-services-mobile'] }>

            <Grid container spacing={ 0 } sx={{ width: '100vw', height: '100%', display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>

                <Grid item id='diagnostico' className={ `${styles['navbar-menu-services-item-mobile']} ${styles['navbar-menu-services-item-diagnosis']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number-mobile'] }>1</Typography>
                    <Typography variant='h4' color='info.main'>Diagnóstico</Typography>
                </Grid>

                <Grid item id='disenio' className={ `${styles['navbar-menu-services-item-mobile']} ${styles['navbar-menu-services-item-design']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number-mobile'] }>2</Typography>
                    <Typography variant='h4' color='info.main'>Diseño</Typography>
                </Grid>

                <Grid item id='ejecucion' className={ `${styles['navbar-menu-services-item-mobile']} ${styles['navbar-menu-services-item-execution']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number-mobile'] }>3</Typography>
                    <Typography variant='h4' color='info.main'>Ejecución</Typography>
                </Grid>

            </Grid>

            

        </Box>

    )
}
