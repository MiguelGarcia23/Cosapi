import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BannerCalibration, BodyCalibration } from '../../../components/servicios/ejecucion/calibracion';


const CalibrationPage: FC = () => {

    return (

        <Layout title='Calibración de instrumentos'>

            <Box>

                <BannerCalibration />

                <BodyCalibration />

            </Box>

        </Layout>

    )
}

export default CalibrationPage;