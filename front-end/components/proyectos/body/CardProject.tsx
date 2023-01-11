import { FC } from 'react';
import { useRouter } from 'next/router';

import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import styles from './Body.module.css';


interface Props {
    img: string,
    alt: string,
    year: string,
    title: string
}

export const CardProject: FC<Props> = ({ img, alt, year, title }) => {

    const router = useRouter();

    const handleClick = (): void => {
        router.push(`/proyectos/${ title.toLowerCase() }`)
    }

    return (
        
        <Grid item sm={ 12 } lg={ 6 }>

            <Card className={ styles['projects-card'] } onClick={ handleClick }>
                <CardActionArea sx={{ position: 'relative', width: '100%', height: '100%' }}>

                    <CardMedia
                        component='img'
                        image={`http://localhost:3030/img/projects/${ img }`}
                        alt={ alt }
                        sx={{ width: '100%', height: '100%' }}
                    />

                    <CardContent className={ styles['projects-card-info'] }>
                        <Typography variant='body1' color="info.main" sx={{ textShadow: '2px 2px 1px black' }}>{ year }</Typography>
                        <Typography variant='h3' color="info.main" sx={{ textShadow: '2px 2px 1px black' }}>{ title }</Typography>
                    </CardContent>

                </CardActionArea>
            </Card>

        </Grid>

    )
}
