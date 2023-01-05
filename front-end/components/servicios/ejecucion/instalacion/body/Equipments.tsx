import { FC } from 'react';

import { Box, Grid } from '@mui/material';

import { CardEquipmentsInstallation } from './CardEquipment';

import styles from './Body.module.css';


export const EquipmentsInstallation: FC = () => {

    return (

        <Box className={ styles['equipments-installation'] }>

            <Grid container spacing={ 2 }>
              
              <CardEquipmentsInstallation 
                img= '/equipos/separador-bifasico.png'
                alt= 'Separadores bifásicos'
                title= 'Separadores bifásicos'
                subtitle= 'Gas-Petróleo'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/separador-trifasico.jpg'
                alt= 'Separadores trifásicos'
                title= 'Separadores trifásicos'
                subtitle= 'Gas-Petróleo-Agua'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/desalador.jpg'
                alt= 'Desaladores'
                title= 'Desaladores'
                subtitle= 'Coalescedores electrostáticos'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/enfriador-industrial.jpg'
                alt= 'Enfriadores industriales'
                title= 'Enfriadores industriales'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/tanque-almacenamiento-crudo.jpg'
                alt= 'Tanques de almacenamiento de crudo'
                title= 'Tanques de almacenamiento de crudo'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/valvula-de-control.jpg'
                alt= 'Válvulas de control'
                title= 'Válvulas de control'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/valvula-de-seguridad.jpg'
                alt= 'Válvulas de seguridad y alivio'
                title= 'Válvulas de seguridad y alivio'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/compresor.jpg'
                alt= 'Compresores'
                title= 'Compresores'
                subtitle= 'De desplazamiento positivos, Dinámicos'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/generador-electrico.jpg'
                alt= 'Generadores eléctricos'
                title= 'Generadores eléctricos'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/motor.jpg'
                alt= 'Motores'
                title= 'Motores'
                subtitle= 'Eléctricos, De combustión interna'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/bomba.jpg'
                alt= 'Bombas'
                title= 'Bombas'
                subtitle= 'Centrífugas, Periféricas, Rotatorias, Reciprocantes'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/cabezal-de-rotacion.jpg'
                alt= 'Cabezales de rotación'
                title= 'Cabezales de rotación'
              />

            </Grid>

        </Box>

    )
}