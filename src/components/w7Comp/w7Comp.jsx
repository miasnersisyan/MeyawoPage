

import { memo } from 'react'
import './style.css'

export default memo(function W7Comp({props}){
    return (
        <div className='w7d1'>
            <div className='w7d1textdiv'>
                <p className='G-selection w7d1p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                <p className='w7d1p2 G-selection'>{props.name}</p>
            </div>
            <div className='w7d1-1'>
                <img src={props.src} className='w7d1-1img1 G-selection' />
            </div>
        </div>
    )
})