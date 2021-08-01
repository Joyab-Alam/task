import React from 'react';
import "./Header.scss";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import PersonIcon from '@material-ui/icons/Person';
import NavBar from '../Nav/NavBar';
import Card from '../Card/Card';
import CardNav from '../CardNav/CardNav';
import Overview from '../ContentShow/Overview';
import View from '../View/View';
import About from '../About/About';

function Header() {
    
    return (
        <div>
        <div className="parent">
            <div className="parent__child">
                 <div className="container">
              <div className="nav__parent">
                  <div className="logo__search">
                 <div className="linkedin__logo">
                 <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="global-nav__logo">
      <title>
        LinkedIn
      </title>

      <g>
 <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
      </g>
    </svg>
              </div>
         <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"><SearchIcon/></span>
       <input type="text" class="form-control" placeholder="Search"/>
      </div>
             </div>
          <div className="right__icons">
              <div className="notification"><NotificationsIcon/></div>
              <div className="message"><SmsIcon/></div>
              <div className="profile"><PersonIcon/></div>
              <div className = "dotSquare" > <svg id = "global-nav-icon--classic__work"
              height = "24"
              width = "24" >
    <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
  </svg></div>
              <div className="premium">
                  <button>Upgrade to Premium</button>
              </div>
          </div>
              </div>
             
         </div>
            </div>
        
        </div>
         <NavBar/>
        <div className="total__parent">
            <div className="container cardparent__lr">
             <div className="left__card">
             <Card
         image = "https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=1635984000&v=beta&t=iO3EwW8DSZWwdhEtcbxAIus1K-X0dq1oa_WZIh6G-eY"
             name="Figma"
             description="A design paltform for terms who build products together"
             about="Design"
             about1 = "San Francisco, CA"
             about2 = " 201,392 followers"
             totemp="See All 123 employees on Linkedin"
         />
         <CardNav/>
         <Overview/>
         </div>
         <div className="right__card">
          <div className="view__about">
              <div className="heading__span">
              <span id="viewheading">Pages People also view</span>
          </div>
             <View
                 img = "https://media-exp1.licdn.com/dms/image/C4D0BAQE6ES80K3TmDw/company-logo_100_100/0/1594059882721?e=1635984000&v=beta&t=UFa-UlY1uivPQwP7Kma_htxFWHNikXH46NBGWikn9_I"
                 heading="InVision"
                 text1="Internet"
                 text2="137k followers"
             />
              <View
                 img = "https://media-exp1.licdn.com/dms/image/C4D0BAQE6ES80K3TmDw/company-logo_100_100/0/1594059882721?e=1635984000&v=beta&t=UFa-UlY1uivPQwP7Kma_htxFWHNikXH46NBGWikn9_I"
                 heading="InVision"
                 text1="Internet"
                 text2="137k followers"
             />
              <View
                 img = "https://media-exp1.licdn.com/dms/image/C4D0BAQE6ES80K3TmDw/company-logo_100_100/0/1594059882721?e=1635984000&v=beta&t=UFa-UlY1uivPQwP7Kma_htxFWHNikXH46NBGWikn9_I"
                 heading="InVision"
                 text1="Internet"
                 text2="137k followers"
             />
              <View
                 img = "https://media-exp1.licdn.com/dms/image/C4D0BAQE6ES80K3TmDw/company-logo_100_100/0/1594059882721?e=1635984000&v=beta&t=UFa-UlY1uivPQwP7Kma_htxFWHNikXH46NBGWikn9_I"
                 heading="InVision"
                 text1="Internet"
                 text2="137k followers"
             />
              <View
                 img = "https://media-exp1.licdn.com/dms/image/C4D0BAQE6ES80K3TmDw/company-logo_100_100/0/1594059882721?e=1635984000&v=beta&t=UFa-UlY1uivPQwP7Kma_htxFWHNikXH46NBGWikn9_I"
                 heading="InVision"
                 text1="Internet"
                 text2="137k followers"
             />
          </div>
             <About/>
         </div>
         
        </div>
        </div>
         </div>
    )
}

export default Header
