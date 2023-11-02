import React, { useState } from 'react'
import './App.css';

export default function ColorChange() {
  const[color,setColor]=useState('black')
  const[txt,setTxt]=useState('white')
  const changeColor=() =>{
    const newColor=color==='black'?'red':'black'
    const txtColor=txt==='white'?'black':'white'
    setColor(newColor)
    setTxt(txtColor)
  }

  
   

    
  return (
    <>
        <div className='App' style={{fontSize:"25px",fontWeight:"bold" ,background:color,color:txt}}>HELLO</div>
       <button onClick={changeColor}>Change Color</button>
    </>


  )
}
