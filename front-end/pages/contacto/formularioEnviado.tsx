import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { SubmittedFormContact } from '../../components/contacto';


const SubmittedFormContactPage: FC = () => {

    return (

        <Layout title='Formulario de contacto enviado'>

            <Box>

                <SubmittedFormContact />

            </Box>

        </Layout>
        
    )
}

export default SubmittedFormContactPage;