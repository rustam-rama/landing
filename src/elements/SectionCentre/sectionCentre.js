import React from 'react';
import SectionCentreTitle from './_sectionCentre_Title.js';
import SectionCentreTitleContent from './_SectionCentre_Title_content.js';
import SectionCentreFotoBlock from './_SectionCentre_foto_block.js';

function SectionCentre() {
  return (
    <section className="sectionCentre">
      <div className="container">
        <div className="sectionCentre__wrapper">
          <SectionCentreTitle />
          <SectionCentreTitleContent />
          <SectionCentreFotoBlock/>
        </div>
      </div>
    </section>
  )
}

export default SectionCentre;
      