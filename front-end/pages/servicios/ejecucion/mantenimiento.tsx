import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BannerMaintenance, BodyMaintenance } from '../../../components/servicios/ejecucion/mantenimiento';


const MaintenancePage: FC = () => {

    return (

        <Layout title='Mantenimiento y reparación de equipos'>

            <Box>

                <BannerMaintenance />

                <BodyMaintenance />

            </Box>

        </Layout>

    )
}

export default MaintenancePage;