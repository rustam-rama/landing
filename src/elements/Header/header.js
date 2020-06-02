import React from 'react';
import HeaderMenu from './_headerMenu';
import HeaderLogo from './_headerLogo';
import HeaderTitle from './_headerTitle';
import HeaderButton from './_headerButton';
import HeaderCards from './_headerCards';

function Header() {
  
  return (
    <header className="header">
      <div className="header-picture"></div>
      <div className="container">
        <div className="header__wrapper">
          <HeaderMenu />
          <HeaderLogo />
          <HeaderTitle />
          <HeaderButton />
          <HeaderCards />
        </div>
      </div> 
    </header>
  )
  
}

export default Header;
          
            
         
        
