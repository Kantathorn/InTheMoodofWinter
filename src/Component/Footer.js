import React from 'react'
import MediaQuery from 'react-responsive'
import fb from '../Image/fb-black.svg'
import ig from '../Image/ig-black.svg'
import tw from '../Image/tw-black.svg'

function Footer() {
  return (
    <div className='footer fix-bottom'>
        <MediaQuery minWidth={1025}>
            <div className='footer_header mt-4 ms-5'>In the Mood of Winter</div>
                <div className='footer_body ms-5'>
                    <h5 className='mt-3 credit-head'>จัดโดย</h5>
                    <div className='credit mt-3'>องค์การบริหารองค์การนิสิต มหาวิทยาลัยเกษตรศาสตร์ บางเขน 2565 </div>
                    <h5 className='mb-3 mt-3 credit-head'>KUSAB Social</h5>
                    <div className='social mt-4 mb-3'>
                        <a href='https://web.facebook.com/kusab.bk' target="_blank" rel="noopener noreferrer">
                            <img className='fb-logo me-2' src={fb} alt='facebook'/>
                        </a>
                        <a href='https://www.instagram.com/kusab.bk/' target='_blank' rel='noopener noreferrer'>
                            <img className='ig-logo me-2' src={ig} alt='instragram'/>
                        </a>
                        <a href='https://twitter.com/_KUSAB' target='_blank' rel='noopener noreferrer'>
                            <img className='tw-logo' src={tw} alt='twitter'/>
                        </a>
                </div>
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
            <div className='footer_header mt-4 ms-3'>In the Mood of Winter</div>
            <div className='footer_body ms-3 mt-3'>
                <h5 className='credit-head'>จัดโดย</h5>
                <div className='credit mt-3'>องค์การบริหารองค์การนิสิต <br/> มหาวิทยาลัยเกษตรศาสตร์ บางเขน <br/> 2565 </div>
                <h5 className='mb-3 mt-4'>KUSAB Social</h5>
                <div className='social mt-2 mb-3 credit-head'>
                    <a href='https://web.facebook.com/kusab.bk' target="_blank" rel="noopener noreferrer">
                        <img className='fb-logo me-2' src={fb} alt='facebook'/>
                    </a>
                    <a href='https://www.instagram.com/kusab.bk/' target='_blank' rel='noopener noreferrer'>
                        <img className='ig-logo me-2' src={ig} alt='instragram'/>
                    </a>
                    <a href='https://twitter.com/_KUSAB' target='_blank' rel='noopener noreferrer'>
                        <img className='tw-logo' src={tw} alt='twitter'/>
                    </a>
                </div>
            </div>
        </MediaQuery>
    </div>
  )
}

export default Footer