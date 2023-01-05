import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroMaintenance } from './Intro';
import { EquipmentsMaintenance } from './Equipments';
import { FooterMaintenance } from './Footer';

import styles from './Body.module.css';


export const BodyMaintenance: FC = () => {

    return (

        <Box className={ styles['maintenance-body'] }>

            <IntroMaintenance />

            <EquipmentsMaintenance />

            <FooterMaintenance />

        </Box>

    )
}