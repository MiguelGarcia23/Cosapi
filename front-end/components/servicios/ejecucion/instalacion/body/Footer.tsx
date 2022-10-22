import { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';


export const FooterInstallation: FC = () => {

    return (

        <Box sx={{ padding: '0 3.75rem' }}>

            <Typography variant='h3' color='info.dark' sx={{ marginBottom: '1rem' }}>
                ¿Listo para instalar tus equipos?
            </Typography>

            <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                <Typography variant='h5' color='info.main' textTransform='capitalize'>Solicitar presupuesto</Typography>
            </Button> 

        </Box>

    )
}