import React from 'react'
import MediaQuery from 'react-responsive'
import Timer from '../Component/Timer'
import Location from './Location'

import './Home.css'

function Home() {
  return (
    <div>
      <MediaQuery minWidth={1025}>
        <div className='Countdown-h'>Countdown to Mood</div>
        <Timer/>
        <div className='ticket-button'>
          <button type='button' className='btn btn-outline-dark btn-lg'>Ticket Reserve</button>
        </div>
        <Location/>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <div className='Countdown-h-m'>Countdown to Mood</div>
        <Timer/>
      </MediaQuery>
    </div>
  )
}

export default Home