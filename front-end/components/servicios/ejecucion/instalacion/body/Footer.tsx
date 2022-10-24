import { FC, useEffect } from 'react';

import { Box, Button, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const FooterInstallation: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' sx={{ padding: '0 3.75rem' }}>

            <Typography variant='h3' color='info.dark' sx={{ marginBottom: '1rem' }}>
                ¿Listo para instalar tus equipos?
            </Typography>

            <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                <Typography variant='h5' color='info.main' textTransform='capitalize'>Solicitar presupuesto</Typography>
            </Button> 

        </Box>

    )
}