import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Body.module.css';

export const IntroDiagnostic: FC = () => {

    return (

        <Box sx={{ marginBottom: '3.75rem' }}>

            <Typography variant='h5' color='info.dark' className={ styles['diagnostic-intro-title']}>
                En Cosapi somos tu aliado en el desarrollo de tu proyecto. Contamos con profesionales expertos cuyos años de experiencia en el área han permitido que desarrollen capacidades evaluativas tanto de proyectos en general, como de maquinaria y equipos específicos, y los ponemos a tu disposición para asesorarte.
            </Typography>

        </Box>

    )
}
