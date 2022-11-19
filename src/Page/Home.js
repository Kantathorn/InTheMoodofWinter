import React from 'react'
import MediaQuery from 'react-responsive'
import Timer from '../Component/Timer'
import Location from './Location'
import transition1 from '../Image/transition-1.svg'

import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <MediaQuery minWidth={1025}>
        <div className='countdown'>
          <div className='Countdown-h'>Countdown to Mood</div>
          <Timer/>
          <div className='ticket-button'>
            <a href='https://www.ticketmelon.com'>
              <button type='button' className='btn btn-outline-dark btn-lg'>Ticket Reserve</button>
            </a>
          </div>
        </div>
        <img src={transition1} alt='transition btw cd and lc' width='100%'/>
        <Location/>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <div className='countdown'>
          <div className='Countdown-h-m'>Countdown to Mood</div>
          <Timer/>
        </div>
      </MediaQuery>
    </div>
  )
}

export default Home