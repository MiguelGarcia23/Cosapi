import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { BannerContact, BodyContact } from '../../components/contacto';


const ContactPage: FC = () => {

    return (

        <Layout title='Contacto'>

            <Box>

                <BannerContact />

                <BodyContact />

            </Box>

        </Layout>
        
    )
}

export default ContactPage;