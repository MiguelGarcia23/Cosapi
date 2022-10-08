import type { NextPage } from 'next';

import { Box } from '@mui/material';

import { Layout } from '../components/layouts';
import { MainBanner, Welcome } from '../components/home';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Box>

        <MainBanner />

        <Welcome />

      </Box>
    </Layout>
  )
}

export default HomePage;