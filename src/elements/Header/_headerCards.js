import React from 'react';

function HeaderCards() {
  return (
    <div className="header-cards__wrap">
      <div className="header-cards">
        <div className="header-card__one-world">
          <div className="header-card__one-world_icon-wrap">
            <div className="header-card__one-world_icon">
              <div></div>
            </div>
          </div>
          <div className="header-card__text-wrap">
            <div className="header-card__text">
              <div>One World</div>
            </div>
          </div>
        </div>


        <div className="header-card__two-hearts">
          <div className="header-card__two-hearts_icon-wrap">
            <div className="header-card__two-hearts_icon">
              <div></div>
            </div>
          </div>
          <div className="header-card__two-hearts_text-wrap">
            <div className="header-card__two-hearts_text">
              <div>Two Hearts</div>
            </div>
          </div>
        </div>


        <div className="header-card__one-site">
          <div className="header-card__one-site_icon-wrap">
            <div className="header-card__one-site_icon">
              <div></div>
            </div>
          </div>
          <div className="header-card__one-site_text-wrap">
            <div className="header-card__one-site_text">
              <div>One Site</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeaderCards;

