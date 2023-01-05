import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroSupplies } from './Intro';
import { EquipmentsSupplies } from './Equipments';
import { FooterSupplies } from './Footer';

import styles from './Body.module.css';


export const BodySupplies: FC = () => {

    return (

        <Box className={ styles['supplies-body'] }>

            <IntroSupplies />

            <EquipmentsSupplies />

            <FooterSupplies />

        </Box>

    )
}