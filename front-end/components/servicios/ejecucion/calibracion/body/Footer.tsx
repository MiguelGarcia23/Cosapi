import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const FooterCalibration: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    let router = useRouter();

    const handleClick = () => {
        router.push('/contacto')
    }

    return (

        <Box data-aos='fade-up' sx={{ padding: '0 3.75rem' }}>

            <Typography variant='h3' color='info.dark' sx={{ marginBottom: '1rem' }}>
                ¿Listo para calibrar tus instrumentos?
            </Typography>

            <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }} onClick={ handleClick }>
                <Typography variant='h5' color='info.main' textTransform='capitalize'>Solicitar presupuesto</Typography>
            </Button> 

        </Box>

    )
}