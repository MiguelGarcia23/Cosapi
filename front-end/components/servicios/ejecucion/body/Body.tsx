import { FC } from 'react';

import { Box } from '@mui/material';

import { IntroExecution } from './Intro';
import { CardServicesExecution } from './CardServicesExecution';

import styles from './Body.module.css';


export const BodyExecution: FC = () => {

    return (

        <Box className={ styles['execution-body'] }>

            <IntroExecution />

            <Box>

                <CardServicesExecution 
                    title= 'Instalación de equipos'
                    info= 'Instalar equipos que sean accesibles y seguros requiere tanto una estrategia inteligente como los productos correctos.'
                    link= '/servicios/ejecucion/instalacion'
                    img= '/execution-installation.png'
                    alt= 'Imagen de instalación de equipos'
                />

                <CardServicesExecution 
                    title= 'Mantenimiento y reparación de equipos'
                    info= 'En Cosapi ponemos a tu disposición cualquier tipo de mantenimiento, bien sea para optimizar el rendimiento y la calidad de los equipos o para realizar reparaciones y corregir errores.'
                    link= '/servicios/ejecucion/mantenimiento'
                    img= '/execution-maintenance.png'
                    alt= 'Imagen de mantenimiento y reparación de equipos'
                />

                <CardServicesExecution 
                    title= 'Automatización de equipos y sistemas'
                    info= 'En Cosapi ponemos a tu disposición cualquier tipo de mantenimiento, bien sea para optimizar el rendimiento y la calidad de los equipos o para realizar reparaciones y corregir errores.'
                    link= '/servicios/ejecucion/automatizacion'
                    img= '/execution-automation.png'
                    alt= 'Imagen de automatización de equipos y sistemas'
                />

                <CardServicesExecution 
                    title= 'Suministro de equipos y personal especializado'
                    info= 'En Cosapi ponemos a tu disposición cualquier tipo de mantenimiento, bien sea para optimizar el rendimiento y la calidad de los equipos o para realizar reparaciones y corregir errores.'
                    link= '/servicios/ejecucion/suministro'
                    img= '/execution-supplies.png'
                    alt= 'Imagen de suministro de equipos y personal especializado'
                />

            </Box>

        </Box>

    )
}
