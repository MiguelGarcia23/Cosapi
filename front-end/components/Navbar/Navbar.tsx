import { FC } from 'react';

import { NavbarMobile } from './NavbarMobile';
import { NavbarDesktop } from './NavbarDesktop';

export const Navbar: FC = () => {
  
    return (
      <>
        
        <NavbarMobile />
        <NavbarDesktop />

      </>
    )
}