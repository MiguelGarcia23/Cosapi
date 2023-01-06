import { FC, useEffect } from 'react';

import { Box, Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Infrastructure.module.css'

interface Props {
    img: string;
    alt: string;
    title: string;
    id: number;
    numeroDiv: number;
}

export const CardInfrastructure: FC<Props> = ({ img, alt, title, id, numeroDiv }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (

        <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 3 } data-aos='zoom-out'>        
            <Card className={ numeroDiv === id ? styles['card-active'] : styles['card-inactive'] }>
                <CardContent>
                    <Typography variant='h3' component='div' color='info.main'>
                        { title }
                    </Typography>
                </CardContent>
                <CardMedia
                    component='img'
                    height='240'
                    image={ img }
                    alt={ alt }
                />
            </Card>
        </Grid>

    )
}