import React from 'react'
import { useState } from 'react'
import "../stylecolor.css";

const Colortoggle = () => {

    const [backgroundColor,setBackgroundcolor]=useState('white');
    const [textcolor,setTextcolor]=useState('#1b1b1b');
    const [buttonStyle,setButtonstyle]=useState("white");


    const handlerClick=()=>{
        setBackgroundcolor(backgroundColor==='white'? "#1b1b1b":"white")
        setTextcolor(textcolor==="#1b1b1b" ? "#ffa31a":"#1b1b1b");
        setButtonstyle(backgroundColor==='white'?'#1b1b1b':'white');
        setButtonstyle(backgroundColor==="#lblblb" ? "Black Theme":"white theme")
        
    }
  return (
    <div style={{backgroundColor,color:textcolor}}>
        <button onClick={handlerClick} style={{buttonStyle,color:textcolor,border:`2px solid ${textcolor}`}}>
            {backgroundColor==="#lblblb" ?"Black Theme":"White Theme"}
        </button>
        <section className='content'>
            <h1>Welcome to A <br/>
           Real world... </h1>

        </section>

    </div>
  )
}

export default Colortoggle