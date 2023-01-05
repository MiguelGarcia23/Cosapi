import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BannerSupplies, BodySupplies } from '../../../components/servicios/ejecucion/suministro';


const SuppliesPage: FC = () => {

    return (

        <Layout title='Alquiler de equipos y suministro de personal especializado'>

            <Box>

                <BannerSupplies />

                <BodySupplies />

            </Box>

        </Layout>

    )
}

export default SuppliesPage;