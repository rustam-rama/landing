import React from 'react';
// import Footer from 'sections/footer';
import Header from 'elements/Header/header.js';
import SectionCentre from 'elements/SectionCentre/sectionCentre.js';

function Home() {
  return (
    <div>
      <Header />
      <SectionCentre />
      {/* <div>Весь другой контент подключается секциями как футер и хедер</div> */}
      {/* <Footer /> */}
    </div> 
  )
}

export default Home;
