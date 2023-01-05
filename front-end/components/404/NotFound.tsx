import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';

import styles from './NotFound.module.css';


export const NotFound: FC = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    }

    return (

        <Box className={ styles['not-found-body'] }>

            <Box className={ styles['not-found-box-info'] }>
                <Typography variant='h1' color='info.dark' className={ styles['not-found-title'] }>
                    No pudimos encontrar la página que estás buscando
                </Typography>

                <Typography variant='h4' color='info.dark' className={ styles['not-found-subtitle'] }>
                    Desafortunadamente, la página que estás buscando no existe. Revisa el link o vuelve a la página principal
                </Typography>

                <Button variant='contained' color='secondary' style={{ display: 'block', padding: '0.625rem 1.25rem', borderRadius: '8px', margin: '0 auto', marginBottom: '1.875rem' }} onClick={ handleClick }>
                    <Typography variant='h5' color='info.main' textTransform='capitalize'>Volver a la página principal</Typography>
                </Button>
            </Box>


            <Box className={ styles['not-found-img'] }>
                <Image 
                    src='/404-img.svg'
                    alt='Imagen de Error 404'
                    layout= 'fill'
                />
            </Box>


        </Box>

    )
}