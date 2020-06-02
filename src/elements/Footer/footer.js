import React from 'react';
import FooterSearch from './_footer_input';
import FooterMenu from './_footer_menu';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
       <div className="footer-wrapper">
         <FooterSearch />
          <FooterMenu />
       </div>
      </div>
    </footer>
  )
}

export default Footer;