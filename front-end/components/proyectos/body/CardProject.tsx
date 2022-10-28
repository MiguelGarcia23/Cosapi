import { FC, useEffect } from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

interface Props {
    img: string,
    alt: string,
    year: string,
    title: string
}

export const CardProject: FC<Props> = ({ img, alt, year, title }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        
        <Grid item sm={ 12 } lg={ 6 } data-aos='zoom-out'>

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
