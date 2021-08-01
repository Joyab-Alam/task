import React from 'react';
import "./CardNav.scss";


function CardNav() {
    return (
       <div className="cardnav__parent">
            <div className="container">
         <ul>
             <li>
                <span> Overview</span>
             </li>
              <li>
                 <span>About</span>
             </li>
              <li>
                 <span>Product</span>
             </li>
              <li>
                <span>Posts</span>
             </li>
              <li>
                <span>Jobs</span>
             </li>
              <li>
                <span>People</span>
             </li>
              <li>
                <span>Videos</span>
             </li>
         </ul>            
        </div>
       </div>
    )
}

export default CardNav;
