import { FC } from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import styles from './Body.module.css';

interface Props {
    img: string,
    alt: string,
    year: string,
    title: string
}

export const CardProject: FC<Props> = ({ img, alt, year, title }) => {

    return (
        
        <Grid item sm={ 12 } lg={ 6 }>

            <Card className={ styles['projects-card'] }>
                <CardActionArea sx={{ position: 'relative' }}>

                    <CardMedia
                        component='img'
                        image={ img }
                        alt={ alt }
                    />

                    <CardContent className={ styles['projects-card-info'] }>
                        <Typography variant='body1' color="info.main">{ year }</Typography>
                        <Typography variant='h3' color="info.main">{ title }</Typography>
                    </CardContent>

                </CardActionArea>
            </Card>

        </Grid>

    )
}
