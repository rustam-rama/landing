import React from 'react';

function FooterSearch() {
  return (
    <div className="footer-input__content">
      <div className="footer-newsletter">Sign up for our newsletter</div>
      <form action="" className="footer__form">
        <input className="footer__email" type="text" placeholder="Email Address"/>
        <button className="footer__butoon">Subscribe</button>
      </form>
    </div>
  )
}

export default FooterSearch;