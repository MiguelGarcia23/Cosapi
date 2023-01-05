import { FC, useEffect } from 'react';
import Image from 'next/image';

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
    img: string,
    alt: string,
    title: string,
    info: string
}

export const CardInfoAutomation: FC<Props> = ({ img, alt, title, info }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Grid item sm={ 12 } md={ 6 } lg={ 4 } data-aos='zoom-out'>        
            <Card sx={{ maxWidth: 350, height: 400, margin: '0px auto', backgroundColor: '#696A6C' }}>
                <CardContent style={{ margin: '0 auto'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                        <Image 
                            src={ img }
                            alt={ alt }
                            width= { 140 }
                            height= { 140 }
                        />
                    </Box>
                    <Typography gutterBottom variant='h4' textAlign='center' component='div' color='info.main'>
                        { title }
                    </Typography>
                    <Typography variant='body1' textAlign='center' color='info.main'>
                        { info }
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}