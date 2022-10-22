import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BannerInstallation, BodyInstallation } from '../../../components/servicios/ejecucion/instalacion';


const InstallationPage: FC = () => {

    return (

        <Layout title='Instalación de equipos'>

            <Box>

                <BannerInstallation />

                <BodyInstallation />

            </Box>

        </Layout>

    )
}

export default InstallationPage;