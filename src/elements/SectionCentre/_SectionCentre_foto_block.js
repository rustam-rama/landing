import React from 'react';

function SectionCentreFotoBlock() {
  return (
    <div className="divforResponce">
      <div className="sectionCentreFotoBlock">
        <div className="sectionCentreFotoBlock__left">

          <div className="sectionCentreFotoBlock__left_first-column">
            <div className="first-column__first-foto"></div>
            <div className="first-column__last-foto"></div>
          </div>

          <div className="sectionCentreFotoBlock__left_second-column">
            <div className="second-column__first-foto"></div>
            <div className="second-column__last-foto"></div>
          </div>

        </div>

        <div className="sectionCentreFotoBlock__center">
          <div className="fotoBlock__center_wrapper">
            <div className="fotoBlock__center_content">
              <h2 className="fotoBlock__center-title">IT`S FREE TO JOIN</h2>
              <div className="block-for-facebook">
                <div className="facebook-img"></div>
                <div className="facebook-content">Sign up with Facebook</div>
              </div>
              <div className="fotoBlock__seporator">or</div>
              <form action="" className="fotoBlock__form">
                <input className="fotoBlock__Email inputs" type="text" placeholder="Email "/>
                <input className="fotoBlock__Username inputs" type="text" placeholder="Username "/>
                <input className="fotoBlock__Password inputs" type="text" placeholder="Password" />
                <input className="fotoBlock__ConfirmPass inputs" type="text" placeholder="Confirm Password "/>
                <button className="fotoBlock__button">Let’s Go!</button>
              </form>
            </div>
          </div>

        </div>


        <div className="sectionCentreFotoBlock__right">

          <div className="sectionCentreFotoBlock__right_first-column">
            <div className="block-right-first-column__first-foto"></div>
            <div className="block-right-first-column__last-foto"></div>
          </div>

          <div className="sectionCentreFotoBlock__right_second-column">
            <div className="block-right-second-column__first-foto"></div>
            <div className="block-right-second-column__last-foto"></div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default SectionCentreFotoBlock;
          
