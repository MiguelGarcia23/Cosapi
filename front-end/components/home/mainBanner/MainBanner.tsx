import { FC } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';

import styles from './MainBanner.module.css';

export const MainBanner: FC = () => {

  const router = useRouter();

  const handleClick = (): void => {
    router.push('/sobreNosotros')
  }

  return (

    <Box className={ styles['main-banner'] }>

        <Typography variant='h2' color='info.main' className={ styles['title-main-banner'] }>
            Más de 15 años brindando servicios de alta calidad
        </Typography>    

        <Button variant='outlined' color='secondary' className={ styles['button-main-banner'] } onClick={ handleClick }>
          <Typography variant='h5' color='info.main'>Ver más</Typography>
        </Button>

    </Box>

  )
}
