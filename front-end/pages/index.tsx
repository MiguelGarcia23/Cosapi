import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';

const HomePage: NextPage = () => {
  return (
    <>
      <Typography variant="h1" color="primary">Hola Mundo</Typography>
      <Typography variant="subtitle1" color="secondary">Un subtítulo</Typography>
    </>
  )
}

export default HomePage;