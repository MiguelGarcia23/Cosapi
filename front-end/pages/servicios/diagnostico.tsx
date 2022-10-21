import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from "../../components/layouts";
import { BannerDiagnostic, BodyDiagnostic } from '../../components/services/diagnostico';


const DiagnosticPage: FC = () => {

    return (

        <Layout title='Diagnóstico'>

            <Box>

                <BannerDiagnostic />

                <BodyDiagnostic />

            </Box>

        </Layout>

    )
}

export default DiagnosticPage;