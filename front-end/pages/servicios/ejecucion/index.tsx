import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BannerExecution, BodyExecution } from '../../../components/servicios/ejecucion';


const ExecutionPage: FC = () => {

    return (

        <Layout title='Ejecución'>

            <Box>

                <BannerExecution />

                <BodyExecution />

            </Box>

        </Layout>

    )
}

export default ExecutionPage;