import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroDiagnostic } from './Intro';
import { ProjectsDiagnostic } from './Projects';
import { MachinesDiagnostic } from './Machines';

import styles from './Body.module.css';

export const BodyDiagnostic: FC = () => {

    return (

        <Box className={ styles['diagnostic-body'] }>

            <IntroDiagnostic />

            <ProjectsDiagnostic />

            <MachinesDiagnostic />

        </Box>

    )
}
