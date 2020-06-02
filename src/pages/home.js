import React from 'react';
import Header from 'elements/Header/header.js';
import SectionCentre from 'elements/SectionCentre/sectionCentre.js';
import BigPicture from 'elements/SectionBigPicture/BigPicture.js';
import Footer from 'elements/Footer/footer.js';
import SocialNetwork from 'elements/Social-network/social_network.js';

function Home() {
  return (
    <div>
      <Header />
      <SectionCentre />
      <BigPicture />
      <Footer />
      <SocialNetwork />
    </div> 
  )
}

export default Home;
