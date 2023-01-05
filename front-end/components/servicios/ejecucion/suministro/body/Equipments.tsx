import { FC } from 'react';

import { Box, Grid } from '@mui/material';

import { CardEquipmentsSupplies } from './CardEquipment';

import styles from './Body.module.css';


export const EquipmentsSupplies: FC = () => {

    return (

        <Box className={ styles['equipments-supplies'] }>

            <Grid container spacing={ 2 }>
              
              <CardEquipmentsSupplies 
                img= '/equipos/separador-bifasico.png'
                alt= 'Separadores bifásicos'
                title= 'Separadores bifásicos'
                subtitle= 'Gas-Petróleo'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/separador-trifasico.jpg'
                alt= 'Separadores trifásicos'
                title= 'Separadores trifásicos'
                subtitle= 'Gas-Petróleo-Agua'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/desalador.jpg'
                alt= 'Desaladores'
                title= 'Desaladores'
                subtitle= 'Coalescedores electrostáticos'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/enfriador-industrial.jpg'
                alt= 'Enfriadores industriales'
                title= 'Enfriadores industriales'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/tanque-almacenamiento-crudo.jpg'
                alt= 'Tanques de almacenamiento de crudo'
                title= 'Tanques de almacenamiento de crudo'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/valvula-de-control.jpg'
                alt= 'Válvulas de control'
                title= 'Válvulas de control'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/valvula-de-seguridad.jpg'
                alt= 'Válvulas de seguridad y alivio'
                title= 'Válvulas de seguridad y alivio'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/compresor.jpg'
                alt= 'Compresores'
                title= 'Compresores'
                subtitle= 'De desplazamiento positivos, Dinámicos'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/generador-electrico.jpg'
                alt= 'Generadores eléctricos'
                title= 'Generadores eléctricos'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/motor.jpg'
                alt= 'Motores'
                title= 'Motores'
                subtitle= 'Eléctricos, De combustión interna'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/bomba.jpg'
                alt= 'Bombas'
                title= 'Bombas'
                subtitle= 'Centrífugas, Periféricas, Rotatorias, Reciprocantes'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/cabezal-de-rotacion.jpg'
                alt= 'Cabezales de rotación'
                title= 'Cabezales de rotación'
              />

            </Grid>

        </Box>

    )
}