import { FC } from 'react';

import { Grid, Typography } from '@mui/material';

import styles from './Footer.module.css';

interface Props {
    title: string;
    large: number;
    children: JSX.Element;
}

export const ItemFooter: FC<Props> = ({ title, large, children }) => {

    return (

        <Grid item sm={ 12 } md={ 6 } lg={ large }>
                  
            <Typography variant='h4' color='info.main' className={ styles['footer-title'] }>{ title }</Typography>

            { children }

        </Grid>

    )
}
