import React from 'react';
import './View.scss';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


function View({
    img,
    heading,
    text1,
    text2,
   
}) {
    return (
        <>
        <div className="patent__view">
         
        <div className="view__conatainer">
        
         <div className="img_view">
                <img src={img} alt="" />
            </div>
            <div className="heading">
                {heading}
                <div className="text">
                <span>{text1}</span>
                 <span>{text2}</span>
            </div>
            </div>
            
            <div className="viewicon">
               <VisibilityOutlinedIcon/>
            </div>
            
        </div>
        
        </div>
       
        </>
    )
}

export default View;
