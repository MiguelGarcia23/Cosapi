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
                    info= 'Puedes contar con nosotros para realizar cualquier tipo de mantenimiento, bien sea para optimizar el rendimiento y la calidad de tus equipos o para realizar reparaciones y corregir errores.'
                    link= '/servicios/ejecucion/mantenimiento'
                    img= '/execution-maintenance.png'
                    alt= 'Imagen de mantenimiento y reparación de equipos'
                />

                <CardServicesExecution 
                    title= 'Calibración de instrumentos'
                    info= 'Contamos con los conocimientos necesarios para calibrar y mantener tus equipos en el mejor estado posible, además, tenemos bancos de prueba y herramientas de alta tecnología para asegurarnos de entregar resultados excelentes.'
                    link= '/servicios/ejecucion/calibracion'
                    img= '/execution-calibration.jpg'
                    alt= 'Imagen de calibracion de instrumentos'
                />

                <CardServicesExecution 
                    title= 'Automatización de equipos y sistemas'
                    info= 'Te ayudamos a mejorar la eficiencia de tus sistemas de control y operaciones ofreciendo equipos innovadores y confiables para optimizar el manejo de tu planta de producción.'
                    link= '/servicios/ejecucion/automatizacion'
                    img= '/execution-automation.png'
                    alt= 'Imagen de automatización de equipos y sistemas'
                />

                <CardServicesExecution 
                    title= 'Alquiler de equipos y suministro de personal especializado'
                    info= 'Ponemos a tu alcance equipos de última tecnología que te ayudarán a obtener los mejores resultados en tu proyecto, de la mano de personal capacitado con años de experiencia en el mercado seleccionados según tus necesidades'
                    link= '/servicios/ejecucion/suministro'
                    img= '/execution-supplies.jpg'
                    alt= 'Imagen de suministro de equipos y personal especializado'
                />

            </Box>

        </Box>

    )
}
