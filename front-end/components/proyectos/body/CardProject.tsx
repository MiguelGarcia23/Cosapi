import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

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
    }, []);

    const router = useRouter();

    const handleClick = (): void => {
        router.push(`/proyectos/${ title.toLowerCase() }`)
    }

    return (
        
        <Grid item sm={ 12 } lg={ 6 } data-aos='zoom-out'>

            <Card className={ styles['projects-card'] } onClick={ handleClick }>
                <CardActionArea sx={{ position: 'relative' }}>

                    <CardMedia
                        component='img'
                        image={`http://localhost:3030/img/projects/${ img }`}
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
