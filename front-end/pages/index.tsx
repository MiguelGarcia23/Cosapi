import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';

const HomePage: NextPage = () => {
  return (
    <>
      <Typography variant="h1" color="primary.light">Hola Mundo</Typography>
      <Typography variant="h2" color="primary.main">Hola Mundo</Typography>
      <Typography variant="h3" color="primary.dark">Hola Mundo</Typography>
      <Typography variant="h4" color="secondary">Hola Mundo</Typography>
      <Typography variant="subtitle1" color="error">Un subtítulo</Typography>
      <Typography variant="subtitle2" color="success.main">Un subtítulo</Typography>
    </>
  )
}

export default HomePage;