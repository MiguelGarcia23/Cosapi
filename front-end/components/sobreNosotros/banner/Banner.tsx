import { FC } from 'react';

import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

import styles from './Banner.module.css';


export const BannerAboutUs: FC = () => {

    const breadcrumbs = [
        <Link underline='hover' key='1' color='info.main' href='/'>
          Inicio
        </Link>,
        <Typography key='2' color='info.main' sx={{ display: 'block', padding: '3px', borderBottom: '2px solid white' }}>
          Sobre Nosotros
        </Typography>,
    ];

    return (

        <Box className={ styles['about-us-banner'] }>

            <Stack spacing={ 2 } sx={{ position: 'absolute', top: '20px', left:'30px' }}>
                <Breadcrumbs
                    separator={<NavigateNext fontSize='small' color='info' />}
                    aria-label='breadcrumb'
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Typography variant='h2' color='info.main' className={ styles['title-about-us-banner'] }>
                Sobre Cosapi
            </Typography>
            
        </Box>
        
    )
}
