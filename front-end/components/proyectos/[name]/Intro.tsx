import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const IntroProject: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box sx={{ padding: '0 3.75rem' }}>

            <Typography variant='h2' color='info.dark' sx={{ textAlign: 'left', marginBottom: '3.75rem' }}>
                PDVSA Petrosucre
            </Typography>

            <Box className={ styles['project-img'] } data-aos='zoom-out'>
                <Image 
                    src='/petrosucre.png'
                    alt='Imagen de Petrosucre'
                    layout='fill'
                />
            </Box>

        </Box>

    )
}
