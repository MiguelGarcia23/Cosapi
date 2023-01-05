import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Navbar.module.css';

export const MenuServicesNavbarDesktop: FC = () => {

    const router = useRouter();

    const handleClick = ( event: any ): void => {
        router.push(`/servicios/${ event.target.id }`)
    }

    useEffect(() => {
        AOS.init({ duration: 600 })
    }, [])

    return (

        <Box data-aos='zoom-out' className={ styles['navbar-menu-services'] }>

            <Grid container spacing={ 0 } sx={{ width: '100vw', display: 'flex', flexWrap: 'nowrap' }}>

                <Grid item id='diagnostico' className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-diagnosis']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] } id='diagnostico'>1</Typography>
                    <Typography variant='h2' color='info.main' id='diagnostico'>Diagnóstico</Typography>
                </Grid>

                <Grid item id='disenio' className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-design']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] } id='disenio'>2</Typography>
                    <Typography variant='h2' color='info.main' id='disenio'>Diseño</Typography>
                </Grid>

                <Grid item id='ejecucion' className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-execution']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] } id='ejecucion'>3</Typography>
                    <Typography variant='h2' color='info.main' id='ejecucion'>Ejecución</Typography>
                </Grid>

            </Grid>

            

        </Box>

    )
}
