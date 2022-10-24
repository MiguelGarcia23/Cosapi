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
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] }>1</Typography>
                    <Typography variant='h2' color='info.main'>Diagnóstico</Typography>
                </Grid>

                <Grid item id='disenio' className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-design']}` } onClick={ handleClick }>
                    <Typography variant='body1' color='info.main' className={ styles['navbar-menu-services-item-number'] }>2</Typography>
                    <Typography variant='h2' color='info.main'>Diseño</Typography>
                </Grid>

                <Grid item id='ejecucion' className={ `${styles['navbar-menu-services-item']} ${styles['navbar-menu-services-item-execution']}` } onClick={ handleClick }>
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
