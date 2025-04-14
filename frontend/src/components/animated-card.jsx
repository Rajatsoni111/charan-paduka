import React, { useState } from 'react'
import './stylesheet/animatedCards.css'

function AnimatedCard() {
    const [style, setStyle] = useState('0')

    const animation = () => {
        setStyle("180")
        console.log(style, 'animation')
    }
    const animation2 = () => {
        setStyle("0")
        console.log(style, 'animation')
    }
    return (
        <div className='animation-frame'>
            <div className='animation-card' onMouseEnter={animation} onMouseLeave={animation2} style={{ transform: `rotateY(${style}deg)`, transition: '1s' }}>
                <div className='front'>

                    front
                </div>
                <div className='back'>
                    Back
                </div>
            </div>
            <div className='animation-card' onMouseEnter={animation} onMouseLeave={animation2} style={{ transform: `rotateY(${style}deg)`, transition: '1s' }}>
                <div className='front'>

                    front
                </div>
                <div className='back'>
                    Back
                </div>
            </div>
            <div className='animation-card' onMouseEnter={animation2} onMouseLeave={animation} style={{ transform: `rotateX{${style}deg}`, transition: '1s' }}>
                <div className='front'>

                    front
                </div>
                <div className='back'>
                    Back
                </div>
            </div>
            <div className='animation-card' onMouseEnter={animation2} onMouseLeave={animation} style={{ transform: `rotateX{${style}deg}`, transition: '1s' }}>
                <div className='front'>

                    front
                </div>
                <div className='back'>
                    Back
                </div>
            </div>
            <div className='animation-card' onMouseEnter={animation2} onMouseLeave={animation} style={{ transform: `rotateX{${style}deg}`, transition: '1s' }}>
                <div className='front'>

                    front
                </div>
                <div className='back'>
                    Back
                </div>
            </div>
        </div>

    )
}

export default AnimatedCard