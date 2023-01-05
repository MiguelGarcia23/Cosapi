import { FC } from 'react';

import { Box, Grid } from '@mui/material';

import { CardInfoAutomation } from './CardInfo';


export const InfoAutomation: FC = () => {

    return (

        <Box sx={{ marginBottom: '3.75rem' }}>

            <Grid container spacing={ 2 } sx={{ justifyContent: 'center', marginBottom: '2.5rem' }}>

                <CardInfoAutomation 
                    img='/automatizacion/icono-productividad.png'
                    alt='Imagen de productividad y rendimiento'
                    title='Mejorar la productividad y el rendimiento'
                    info='Un mayor control del proceso genera un uso más eficiente de los materiales, reduciendo los costes de la producción y mejorando la calidad del producto'
                />

                <CardInfoAutomation 
                    img='/automatizacion/icono-confiabilidad.png'
                    alt='Imagen de confiabilidad'
                    title='Mayor confiabilidad'
                    info='Todas las tareas iguales se ejecutan siempre de la misma manera. Esto le permite saber con exactitud cuándo se llevarán a cabo los procesos y durante cuánto tiempo, y le da la certeza de que puede confiar en los resultados'
                />

                <CardInfoAutomation 
                    img='/automatizacion/icono-condiciones-trabajo.png'
                    alt='Imagen de condiciones de trabajo'
                    title='Mejorar las condiciones de trabajo'
                    info='Elimina los procesos tediosos, riesgosos, con incremento de la seguridad laboral.'
                />

            </Grid>

        </Box>

    )
}