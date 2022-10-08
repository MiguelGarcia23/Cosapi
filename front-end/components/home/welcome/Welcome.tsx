import { FC } from 'react';

import { Box } from '@mui/material';

import { WelcomeHeader } from './WelcomeHeader';
import { WelcomeInfo } from './WelcomeInfo';

export const Welcome: FC = () => {

    return (

        <Box sx={{ padding: '0px 3.75rem', margin: '5rem 0 4rem 0'}}>

            <WelcomeHeader />

            <WelcomeInfo />
        
        </Box>

    )
}
