import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroAboutUs } from './Intro';
import { WorkTeamAboutUs } from './WorkTeam';
import { ClientsAboutUs } from './Clients';

import styles from './Body.module.css';


export const BodyAboutUs: FC = () => {

    return (

        <Box className={ styles['about-us-body'] }>

            <IntroAboutUs />

            <WorkTeamAboutUs />

            <ClientsAboutUs />

        </Box>

    )
}
