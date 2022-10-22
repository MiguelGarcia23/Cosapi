import { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';

import styles from './Body.module.css';
import Image from 'next/image';

interface Props {
    title: string;
    info: string;
    link: string;
    img: string;
    alt: string;
}


export const CardServicesExecution: FC<Props> = ({ title, info, link, img, alt }) => {

    const router: NextRouter = useRouter();

    const handleClick = (): void => {
        router.push( link )
    }

    return (

        <Box className={ styles['execution-card-services'] }>

            <Box className={ styles['execution-card-services-info'] }>

                <Typography variant='h2' color='info.dark' sx={{ marginBottom: '2.125rem', textAlign: 'left' }}>{ title }</Typography>

                <Typography variant='body2' color='info.dark' sx={{ marginBottom: '2.125rem' }}>{ info }</Typography>

                <Button variant='outlined' color='secondary' className={ styles['execution-card-services-button'] } onClick={ handleClick }>
                    <Typography variant='body2' fontWeight={ 700 } color='info.dark' 
                        className={ styles['execution-card-services-button-text'] }>
                        Ver más
                    </Typography>
                </Button>

            </Box>

            <Box className={ styles['execution-card-services-img'] }>
                <Image 
                    src={ img }
                    alt={ alt }
                    layout='fill'
                />
            </Box>

        </Box>

    )
}
