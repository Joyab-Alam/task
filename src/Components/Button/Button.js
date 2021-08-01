import React from 'react';
import "./Button.scss";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

function Button() {
    return (
         <div div className = "container" >
        <div className="butoon__parent">
           <button id="follow"><span><VisibilityOutlinedIcon/>Follow</span></button>
           <button id="visit"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
</svg>Visit Site</span></button>
<button id="more"><span>.</span><span>.</span><span>.</span></button>
                
            </div>
        </div>
    )
}

export default Button
