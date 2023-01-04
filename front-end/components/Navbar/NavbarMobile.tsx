import { FC, useState } from 'react';

import NextLink from 'next/link';
import Image from 'next/image';

import { Button, Container, Drawer, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { SlideMenuMobile } from './SlideMenuMobile';

import styles from './Navbar.module.css';


export const NavbarMobile: FC = () => {

    const [ open, setOpen ] = useState( false );

    const [ menuService, setMenuService ] = useState(false);

    const handleClickServices = ( event: any ) => {
        event.preventDefault();

        if ( menuService === false ) {
            setMenuService( true );
        } else {
            setMenuService( false );
        }
    }

    const handleDrawerOpen = () => {
        setOpen( true );
    };

    const handleDrawerClose = () => {
        if ( menuService ) {
            setMenuService( false );
        } else {
            setOpen( false );
        }
    };

    let iconHeader: JSX.Element = <MenuIcon  color='primary' sx={{ fontSize: 40 }} onClick={ handleDrawerOpen } />;

    if ( open && menuService ) {
        iconHeader = <ArrowBackIcon color='primary' sx={{ fontSize: 40 }}  onClick={ handleDrawerClose } />
    } else if ( open && !menuService ) {
        iconHeader = <CloseIcon color='primary' sx={{ fontSize: 40 }}  onClick={ handleDrawerClose } />
    } else {
        <MenuIcon  color='primary' sx={{ fontSize: 40 }} onClick={ handleDrawerOpen } />
    }
  
    return (

        <nav className={ styles['navbar-mobile'] }>

            <Container>
                <NextLink href='/' passHref>
                <Link>
                    <Image 
                    src= '/logo.svg'
                    alt= 'Logo Cosapi'
                    width= { 190 }
                    height= { 100 }
                    />
                </Link>
                </NextLink>
            </Container>

            <Button variant='text' color='info' sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                { iconHeader }
            </Button>

            <Drawer
                sx={{
                    [`& .MuiDrawer-paper`]: { marginTop: '100px' }
                }}
                variant="persistent"
                anchor="left"
                open={ open }
            >
                <SlideMenuMobile menuServicesState={ menuService } handleClickServices={ handleClickServices } />
            </Drawer>

        </nav>
    )
}