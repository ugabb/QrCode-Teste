import React from 'react'
import { useState } from 'react';

const Linda = (props) => {
    const [toggle,setToggle] = useState(false);

    const toggleHandle =  (toggle) =>{
        setToggle(prevToggle => !prevToggle);
    }
  return (
    <div className='container'>

         <button className='bts-video' onClick={toggleHandle} >Hey, clica aqui {toggle ? "🙉" : "🙈"} </button>

        <div className={ toggle ? "linda-true" : "linda-false"}>
            <iframe width="400" height="315" src="https://www.youtube.com/embed/jYwWRWNSIFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </div>
  )
}

export default Linda        