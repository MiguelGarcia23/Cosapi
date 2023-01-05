import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroCalibration } from './Intro';
import { EquipmentsCalibration } from './Equipments';
import { FooterCalibration } from './Footer';

import styles from './Body.module.css';


export const BodyCalibration: FC = () => {

    return (

        <Box className={ styles['calibration-body'] }>

            <IntroCalibration />

            <EquipmentsCalibration />

            <FooterCalibration />

        </Box>

    )
}