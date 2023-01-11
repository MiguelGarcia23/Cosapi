import { FC } from 'react';

import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';

interface Props {
    img: string;
    alt: string;
    title: string;
    subtitle?: string;
}

export const CardEquipmentsMaintenance: FC<Props> = ({ img, alt, subtitle, title }) => {

    return (

        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>        
            <Card sx={{ maxWidth: 300, margin: '0px auto', backgroundColor: 'transparent', border: 'none', boxShadow: 'none', borderRadius: '0' }}>
                <CardMedia
                    component='img'
                    height='300'
                    image={ img }
                    alt={ alt }
                />
                <CardContent sx={{ paddingLeft: '0' }}>
                    <Typography gutterBottom variant='h4' fontWeight={ 900 } component='div' color='info.main' 
                    sx={{ marginBottom: '0.5rem' }}>
                        { title }
                    </Typography>
                    <Typography variant='body2' color='info.main'>
                        { subtitle }
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}
