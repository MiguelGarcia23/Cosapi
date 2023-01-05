import { FC } from 'react';

import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

import styles from './Banner.module.css';


export const BannerSupplies: FC = () => {

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
        <Link
          underline='hover'
          key='3'
          color='info.main'
          href='/servicios/ejecucion'
          sx={{ textDecoration: 'none' }}
        >
          Ejecución
        </Link>,
        <Typography key='4' color='info.main' sx={{ display: 'block', padding: '3px', borderBottom: '2px solid white' }}>
          Alquiler y suministro
        </Typography>,
    ];

    return (

        <Box className={ styles['supplies-banner'] }>

            <Stack spacing={2} sx={{ position: 'absolute', top: '20px', left:'30px' }}>
                <Breadcrumbs
                    separator={<NavigateNext fontSize='small' color='info' />}
                    aria-label='breadcrumb'
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Typography variant='h2' color='info.main' className={ styles['title-supplies-banner'] }>
                Alquiler de equipos y suministro de personal especializado
            </Typography>
            
        </Box>
        
    )
}