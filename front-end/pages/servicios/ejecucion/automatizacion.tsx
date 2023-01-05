import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BannerAutomation, BodyAutomation } from '../../../components/servicios/ejecucion/automatizacion';


const AutomationPage: FC = () => {

    return (

        <Layout title='Automatización de equipos y sistemas'>

            <Box>

                <BannerAutomation />

                <BodyAutomation />

            </Box>

        </Layout>

    )
}

export default AutomationPage;