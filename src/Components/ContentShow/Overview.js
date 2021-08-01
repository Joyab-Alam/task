import React from 'react';
import { Link } from 'react-router-dom';
import "./Overview.scss";

function Overview() {
    return (
        <div className="overview__container">
          <div className="overview__about">About</div>
          <div className="overview__content">
              Figma is the first professional-grade online tool created specially for interface design. Born on the Web, Figma Help
              the entire product team create,test and ship better design,faster. 
          </div>
          <div className="overview__card">
              <div className="cardA">
                <div className="card__child">
                    <span id="weburl">Website URL</span>
                
                <div className="web__url">
                    <Link to = "/Home" >
                    <span>Figma.com</span>
                </Link>
                </div>
                </div>

              </div>
               <div className="cardB">
                 <div className="card__child">
                      <span>Funding via CrunchBase</span>
                
                <div className="web__url">
                    <span>Series D</span>
                </div>
                 <div className="usd">
                    <span id="usdt">US$ 50M</span>
                </div>
                 </div>
              </div>
          </div>
          <div className="seedetails">
              <button>See all destails</button>
          </div>
        </div>
    )
}

export default Overview;
