import React from 'react'
import MediaQuery from 'react-responsive'
import './Clock.css'

const Clock = ({timerDays, timerHours, timerMins, timerSecs}) => {
  return (
    <div>
        <MediaQuery minWidth={1025}>
            <div className='timer-container'>
                <div className='timer'>
                    <div className='clock'>
                        <div className='clock-day'>
                            <p className='time-count'>{timerDays}</p>
                            <p className='time-unit'>Days :</p>
                        </div>
                        <div className='clock-hour'>
                            <p className='time-count'>{timerHours}</p>
                            <p className='time-unit'>Hours :</p>
                        </div>
                        <div className='clock-minute'>
                            <p className='time-count'>{timerMins}</p>
                            <p className='time-unit'>Minutes :</p>
                        </div>
                        <div className='clock-second'>
                            <p className='time-count'>{timerSecs}</p>
                            <p className='time-unit'>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
        <div className='timer-container'>
                <div className='timer'>
                    <div className='clock-m'>
                        <div className='clock-day'>
                            <p className='time-count-m'>{timerDays}</p>
                            <p className='time-unit-m'>Days :</p>
                        </div>
                        <div className='clock-hour'>
                            <p className='time-count-m'>{timerHours}</p>
                            <p className='time-unit-m'>Hours :</p>
                        </div>
                        <div className='clock-minute'>
                            <p className='time-count-m'>{timerMins}</p>
                            <p className='time-unit-m'>Minutes :</p>
                        </div>
                        <div className='clock-second'>
                            <p className='time-count-m'>{timerSecs}</p>
                            <p className='time-unit-m'>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </MediaQuery>
    </div>
  )
}
Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMins: 10,
    timerSecs: 10,
};

export default Clock