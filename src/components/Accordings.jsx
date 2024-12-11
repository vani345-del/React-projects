import React, { useState } from 'react'
import "../styleacc.css";

const Accordings = ({title,content}) => {
    const[isActive,setisactive]=useState(false);
  return (
    <section className='accordion-card' key={Math.random()}>
        <div className='header' onClick={()=>setisactive(!isActive)}>
         <div>{title}</div>
         <p className='icon'>{isActive?'-':'+'}</p>
      </div>
      <div className='content'>
       {isActive &&<p className='card-info'>{content}</p>}
      </div>
    </section>
  )
}

export default Accordings