import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './MainServices.module.css'

interface Props {
    img: string;
    alt: string;
    subtitle: string;
    title: string;
    link: string;
}

export const CardMainServices: FC<Props> = ({ img, alt, subtitle, title, link }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const router = useRouter();

    const handleClick = (): void => {
        router.push(`/servicios/${ link }`)
    }

    return (

        <Grid item sm={ 12 } md={ 6 } lg={ 4 } data-aos='zoom-out'>        
            <Card sx={{ maxWidth: 425, margin: '0px auto' }} onClick={ handleClick }>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='240'
                        image={ img }
                        alt={ alt }
                    />
                    <CardContent>
                        <Typography variant='body1' fontWeight={ 500 } fontStyle='italic' color='primary.main'>
                            { subtitle }
                        </Typography>
                        <Typography gutterBottom variant='h3' component='div'>
                            { title }
                        </Typography>
                        <Box className={ styles['main-services-see-more']}>
                            <Typography variant='body2' fontWeight={ 700 } color='secondary' sx={{ marginRight: '0.375rem' }}>Ver más</Typography>
                            <EastIcon fontSize='small' color='secondary' />                        
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    )
}
