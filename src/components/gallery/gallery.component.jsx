import React,{useState} from 'react';
import {ChevronLeft, ChevronRight} from "react-feather"

import './gallery.styles.scss'

 

const slideImage = [
'https://res.cloudinary.com/damtrix/image/upload/homePage/IMG-20200628-WA0020_jmsikb.jpg',
'https://res.cloudinary.com/damtrix/image/upload/homePage/building1_ruzxyk.jpg'
];

// 'https://res.cloudinary.com/damtrix/image/upload/v1593809734/homePage/IMG-20200628-WA0018_xaagvp.jpg'
 
const Gallery = () => {
  const [showing, setShowing] = useState(0)
const move=(k)=>{
  if(k==="left"){
    if(showing===0){
      setShowing(1)
    }
  }else{
    if(showing===1){
      setShowing(0)
    }
  }
}
  setTimeout(() => {
   if(showing===1){
     setShowing(0)
   } else{
     setShowing(showing+1)
   }
  }, 2200);
    return(
    <div className="container">

<img src={slideImage[showing]} className="image" />
<div onClick={()=>{
  move("left")
}} className="left-arrow"><ChevronLeft color="black" size={48}/></div>
<div onClick={()=>{
  move("right")
}} className="right-arrow"><ChevronRight color="black" size={48}/></div>
<div className="circleholder">
<div onClick={()=>{
  setShowing(0)
}} on className={showing===0?"showing":"notshowing"}></div>
<div onClick={()=>{
  setShowing(1)
}} className={showing===1?"showing":"notshowing"}></div>
{/* <div className={showing===2?"showing":"notshowing"}></div> */}
</div>
    </div>
    )
    
  
};

export default Gallery