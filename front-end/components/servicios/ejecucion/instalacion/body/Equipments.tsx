import { FC } from 'react';

import { Box, Grid } from '@mui/material';

import styles from './Body.module.css';
import { CardEquipmentsInstallation } from './CardEquipment';


export const EquipmentsInstallation: FC = () => {

    return (

        <Box className={ styles['equipments-installation'] }>

            <Grid container spacing={ 2 }>
              
              <CardEquipmentsInstallation 
                img= '/manometros.svg'
                alt= 'Manómetros'
                title= 'Manómetros'
              />

              <CardEquipmentsInstallation 
                img= '/interruptores.svg'
                alt= 'Interruptores'
                title= 'Interruptores'
                subtitle= 'De presión, de flujo'
              />

              <CardEquipmentsInstallation 
                img= '/termometros.svg'
                alt= 'Termómetros'
                title= 'Termómetros'
                subtitle= 'De presión, de flujo'
              />

              <CardEquipmentsInstallation 
                img= '/transmisores.svg'
                alt= 'Transmisores'
                title= 'Transmisores'
                subtitle= 'De presión, de temperatura, de nivel'
              />

              <CardEquipmentsInstallation 
                img= '/medidores.svg'
                alt= 'Medidores de flujo'
                title= 'Medidores de flujo'
                subtitle= 'Másico, volumétrico'
              />

              <CardEquipmentsInstallation 
                img= '/controladores.svg'
                alt= 'Controladores neumáticos'
                title= 'Controladores neumáticos'
                subtitle= 'De presión, de temperatura, de nivel'
              />

              <CardEquipmentsInstallation 
                img= '/analizadores.svg'
                alt= 'Analizadores'
                title= 'Analizadores'
              />

              <CardEquipmentsInstallation 
                img= '/posicionadores.svg'
                alt= 'Posicionadores para válvulas'
                title= 'Posicionadores para válvulas'
                subtitle= 'Analógicos, neumáticos'
              />

            </Grid>

        </Box>

    )
}