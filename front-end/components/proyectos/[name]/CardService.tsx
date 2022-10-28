import { FC } from 'react';

import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './Body.module.css';

interface Props {
    title: string
}

export const CardService: FC<Props> = ({ title }) => {

    return (
        
        <Grid item sm={ 12 } md={ 4 } lg={ 3 }>

            <Card className={ styles['project-service-card'] }>
                <CardActionArea sx={{ height: '100%' }}>

                    <CardContent>
                        <Typography variant='h5' color="info.dark" sx={{ marginBottom: '2rem' }}>{ title }</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <ArrowForwardIcon fontSize='large' />                        
                        </Box>
                    </CardContent>

                </CardActionArea>
            </Card>

        </Grid>

    )
}
