import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroContact } from './Intro';
import { FormContact } from './Form';
import { InfoContact } from './Info';

import styles from './Body.module.css';


export const BodyContact: FC = () => {

    return (

        <Box className={ styles['contact-body'] }>

            <IntroContact />

            <FormContact />

            <InfoContact />

        </Box>

    )
}
