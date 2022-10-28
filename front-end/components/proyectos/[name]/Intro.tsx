import { FC } from 'react';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroProject: FC = () => {

    return (

        <Box sx={{ padding: '0 3.75rem' }}>

            <Typography variant='h2' color='info.dark' sx={{ textAlign: 'left', marginBottom: '3.75rem' }}>
                PDVSA Petrosucre
            </Typography>

            <Box className={ styles['project-img'] }>
                <Image 
                    src='/petrosucre.png'
                    alt='Imagen de Petrosucre'
                    layout='fill'
                />
            </Box>

        </Box>

    )
}
