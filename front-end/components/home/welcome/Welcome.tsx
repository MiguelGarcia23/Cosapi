import { FC, useEffect } from 'react';

import { Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { WelcomeHeader } from './WelcomeHeader';
import { WelcomeInfo } from './WelcomeInfo';

import styles from './Welcome.module.css';

export const Welcome: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up' className={ styles['welcome-section'] }>

            <WelcomeHeader />

            <WelcomeInfo />
        
        </Box>

    )
}
