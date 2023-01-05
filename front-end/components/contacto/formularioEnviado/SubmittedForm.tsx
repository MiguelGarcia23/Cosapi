import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../../../public/lotties/gif-submitted-form.json';

import styles from './SubmittedForm.module.css';


export const SubmittedFormContact: FC = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (

        <Box className={ styles['submitted-form-body'] }>

            <Typography variant='h1' color='info.dark' className={ styles['submitted-form-title'] }>
                Tu mensaje ha sido enviado
            </Typography>

            <Typography variant='h4' color='info.dark' className={ styles['submitted-form-subtitle'] }>
                ¡Gracias por comunicarte con nosotros! Uno de nuestros profesionales te contactará a la brevedad posible
            </Typography>

            <Lottie 
                options={ defaultOptions }
                width= { 300 }
                height= { 300 }
            />

        </Box>

    )
}