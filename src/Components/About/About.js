import React from 'react';
import "./About.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function About() {
    return (
        <div className="about__ln">
          <ul>
              <li>About</li>
               <li>Assicibility</li>
                <li>Help Center</li>
                 <li>Privacy & Terms<ExpandMoreIcon/></li>
                  <li>Add Choices</li>
                   <li>Advertising</li>
                    <li>Business Services<ExpandMoreIcon/></li>
                     <li>Get the LinkedIn App</li>
                      <li>...</li>
          </ul>
          <div className="linkcopyright">
              <div className="leftcopyright">
                  <span>Linked</span>
              </div>
              <div className="rightcopyright">Linkedin @ Copyright</div>
          </div>
        </div>
    )
}

export default About
