import React, { useEffect, useState } from 'react'

export default function MouseEvent() {
    const[pos,setPos]=useState({x:0,y:0});
    useEffect(()=>{
        const handleMove=(e)=>{
            setPos({
                x:e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener("mousemove",handleMove);
    },[])
  return (
    <div style={{height:"20px",
    width:"20px",
    background:"black",
    transform:`translate(${pos.x}px,${pos.y}px)`}}>
       {/* transform:`translate(${pos.x}px,${pos.y}px)`, */}
      
    </div>
  )
}
