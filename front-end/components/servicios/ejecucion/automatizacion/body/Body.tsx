import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroAutomation } from './Intro';
import { InfoAutomation } from './Info';
import { FooterAutomation } from './Footer';

import styles from './Body.module.css';


export const BodyAutomation: FC = () => {

    return (

        <Box className={ styles['automation-body'] }>

            <IntroAutomation />

            <InfoAutomation />

            <FooterAutomation />

        </Box>

    )
}