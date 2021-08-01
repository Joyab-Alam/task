import React from 'react';
import "./NavBar.scss";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function NavBar() {
    return (
       <div className="navbar__parent">
            <div className="navbar__Parent__child">
               <div className="container">
         <ul>
             <li>
                <HomeOutlinedIcon/><span> Home</span>
             </li>
              <li>
                <SupervisorAccountOutlinedIcon/> <span>My Network</span>
             </li>
              <li>
                 <WorkOutlineIcon/><span>Job Offer</span>
             </li>
              <li>
                 <PersonOutlineIcon/><span>My Profile</span>
             </li>
         </ul>            
        </div>
            </div>
       </div>
    )
}

export default NavBar
