import { FC } from 'react';

import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';

import styles from './Infrastructure.module.css'

interface Props {
    img: string;
    alt: string;
    title: string;
    id: number;
    numeroDiv: number;
}

export const CardInfrastructure: FC<Props> = ({ img, alt, title, id, numeroDiv }) => {

    return (

        <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 3 }>        
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