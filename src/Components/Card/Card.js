import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export default function Card({
  totemp,
  name,
  description,
  about,
  about1,
  about2,
  image
}) {
  return (
   <div className="container">
       <div className="Card">
        <div className="profile_wrapper">
    <div className='upper_container'>
            <div className="img_container">
                <img src={image} alt="" height="100px" width="100px"/>
            </div>
        </div>
    
     <div className="card__content">
         <div className="mar_form">
          <h2>{name}</h2>
      <h3>{description}</h3>
      <div className="address">
          <div class="summery">
     {about}
    </div>
    <div class="inline-block">
      <div class="summery">
        {about1}
      </div>
        <div class="summery">
         {about2}
        </div>
  </div>
      </div>
      
      <Link><div className="seeallemp"><span>{totemp}<ArrowForwardIcon/></span></div></Link>
      <Button/>
      
      
     </div>
     </div>
    </div>
   </div>
   </div>
  );
}
