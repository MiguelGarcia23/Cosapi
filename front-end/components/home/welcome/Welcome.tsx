import { FC } from 'react';

import { Box } from '@mui/material';

import { WelcomeHeader } from './WelcomeHeader';
import { WelcomeInfo } from './WelcomeInfo';

import styles from './Welcome.module.css';

export const Welcome: FC = () => {

    return (

        <Box className={ styles['welcome-section'] }>

            <WelcomeHeader />

            <WelcomeInfo />
        
        </Box>

    )
}
