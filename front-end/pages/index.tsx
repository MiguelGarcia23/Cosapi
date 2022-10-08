import type { NextPage } from 'next';

import { Layout } from '../components/layouts';
import { MainBanner } from '../components/home';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <main>

        <MainBanner />

      </main>
    </Layout>
  )
}

export default HomePage;