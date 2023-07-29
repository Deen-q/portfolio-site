import React from 'react'
import avatar from "./avatar.png"
import './App.css'

export default function App() {
  return (
    <>
    <div className='NavBar'>
    </div>

    <div className='Segment1'>
        <div className='TextContainer'>
    <h1>Hi, I'm Deen</h1>
    <h3>Yep, that's 2 e's</h3>
    <h2>Full stack web developer.</h2>
        </div> {/*End of TextContainer*/}

        <div className="ImageContainer">
    <img className="AvatarImg" src={avatar} alt="SoC Avatar"/>
        </div>
    </div>

    <div className='Segment2'>

    </div>
    </>
  )
}