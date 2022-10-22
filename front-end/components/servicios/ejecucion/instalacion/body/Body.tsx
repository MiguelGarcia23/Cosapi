import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroInstallation } from './Intro';
import { EquipmentsInstallation } from './Equipments';
import { FooterInstallation } from './Footer';

import styles from './Body.module.css';

export const BodyInstallation: FC = () => {

    return (

        <Box className={ styles['installation-body'] }>

            <IntroInstallation />

            <EquipmentsInstallation />

            <FooterInstallation />

        </Box>

    )
}