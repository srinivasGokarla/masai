import React from 'react'
import './Masai.css';

export const Masai = () => {
  return (
    <div>
        <div className='head'>
            <p>Still Studying? If yes, launch yourself ahead of the pack with our Career Accelerator Program</p>
            <button>KNOW MORE</button>
        </div>
    
        <div className="categories">
        <div className="container">
            <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
            <ul>
    <li ><a href="#">COURSES</a></li>
    <li><a href="#">REFER & EARN</a></li>
    <li><a href="#">FEES & PAP</a></li>
    <li><a href="#">FREE RESOURCES</a>
      <ul className="dropdown">
        <li><a href="#">PROGRAM'D BY MASAI</a></li>
        <li><a href="#">HIRE FROM US</a></li>
      </ul>
    </li>
    <li className='student'><a href="#">FOR STUDENT</a></li>
    <button className='btn'>LOGIN</button>
  </ul>
        </div>
    </div>
         
      </div>
  
  )
}
