import { FC } from 'react';

import Image from 'next/image';

import { Box, Typography } from '@mui/material';

import styles from './Welcome.module.css';

interface Props {
    src: string,
    alt: string,
    title: string,
    info: string
}

export const ItemWelcomeInfo: FC<Props> = ({ src, alt, title, info }) => {

    return (

        <Box className={ styles['welcome-info-item']}>
            <Image 
                src={ src }
                alt={ alt }
                width={ 80 }
                height={ 80 }
                style={{ paddingRight: '10px'}}
            />
            <Box sx={{ width: '80%' }}>
                <Typography variant="h4" color="info.dark">{ title }</Typography> 
                <Typography variant="body2" color="info.dark">{ info }</Typography>
            </Box>
        </Box>

    )
}
