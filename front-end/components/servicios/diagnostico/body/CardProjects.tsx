import { FC } from 'react';

import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import styles from './Body.module.css'
import Image from 'next/image';

interface Props {
    img: string,
    alt: string,
    title: string,
    info: string
}

export const CardProjectsDiagnostic: FC<Props> = ({ img, alt, title, info }) => {

    return (

        <Grid item sm={ 12 } md={ 6 } lg={ 4 }>        
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