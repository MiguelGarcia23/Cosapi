import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroProject } from './Intro';
import { ServicesProject } from './Services';
import { InfoProject } from './Info';

import styles from './Body.module.css';

export const BodyProject: FC = () => {

    return (
        
        <Box className={ styles['project-body'] }>

            <IntroProject />

            <ServicesProject />

            <InfoProject />

        </Box>

    )
}
