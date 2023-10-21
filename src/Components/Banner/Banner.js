import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae molestias magni molestiae esse natus consectetur sequi unde placeat, fugit repellendus quo accusamus porro temporibus, beatae sint excepturi nisi. Deleniti?</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
