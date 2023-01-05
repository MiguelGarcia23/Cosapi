import { FC } from 'react';

import { Box, Grid } from '@mui/material';

import { CardEquipmentsCalibration } from './CardEquipment';

import styles from './Body.module.css';


export const EquipmentsCalibration: FC = () => {

    return (

        <Box className={ styles['equipments-calibration'] }>

            <Grid container spacing={ 2 }>
              
              <CardEquipmentsCalibration 
                img= '/instrumentos/termometro.svg'
                alt= 'Termómetros'
                title= 'Termómetros'
              />

              <CardEquipmentsCalibration 
                img= '/instrumentos/manometro.svg'
                alt= 'Manómetros'
                title= 'Manómetros'
              />

              <CardEquipmentsCalibration 
                img= '/instrumentos/transmisor.svg'
                alt= 'Transmisores'
                title= 'Transmisores'
                subtitle= 'De presión, de temperatura, de nivel'
              />

              <CardEquipmentsCalibration 
                img= '/instrumentos/analizador.svg'
                alt= 'Analizadores'
                title= 'Analizadores'
              />

              <CardEquipmentsCalibration 
                img= '/instrumentos/medidor-de-flujo.svg'
                alt= 'Medidores de flujo'
                title= 'Medidores de flujo'
                subtitle= 'Másico, volumétrico'
              />

              <CardEquipmentsCalibration 
                img= '/instrumentos/controlador-neumatico.svg'
                alt= 'Controladores neumáticos'
                title= 'Controladores neumáticos'
                subtitle= 'De presión, de nivel, de temperatura'
              />

              <CardEquipmentsCalibration 
                img= '/instrumentos/posicionador-para-valvula.svg'
                alt= 'Posicionadores para válvulas'
                title= 'Posicionadores para válvulas'
                subtitle= 'Analógicos, neumáticos'
              />

            </Grid>

        </Box>

    )
}