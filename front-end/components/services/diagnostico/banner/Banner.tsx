import { FC } from 'react';

import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

import styles from './Banner.module.css';


export const BannerDiagnostic: FC = () => {

    const breadcrumbs = [
        <Link underline='hover' key='1' color='info.main' href='/'>
          Inicio
        </Link>,
        <Link
          underline='hover'
          key='2'
          color='info.main'
          href='/'
          sx={{ textDecoration: 'none' }}
        >
          Servicios
        </Link>,
        <Typography key='3' color='info.main' sx={{ display: 'block', padding: '3px', borderBottom: '2px solid white' }}>
          Diagnóstico
        </Typography>,
    ];

    return (

        <Box className={ styles['diagnostic-banner'] }>

            <Stack spacing={2} sx={{ position: 'absolute', top: '20px', left:'30px' }}>
                <Breadcrumbs
                    separator={<NavigateNext fontSize='small' color='info' />}
                    aria-label='breadcrumb'
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Typography variant='h2' color='info.main' className={ styles['title-diagnostic-banner'] }>
                Diagnóstico y evaluación de proyectos y maquinaria
            </Typography>
            
        </Box>
        
    )
}
