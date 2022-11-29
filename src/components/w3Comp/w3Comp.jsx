
import { memo } from 'react'
import './style.css'

export default memo( function W3Comp({props}){
    return(
      <div className='w3d1'>
        <div className='G-center'>
           <span className={props.icnLink} id='w3d1sp1'></span>
        </div>
        <p className='w3d1p1 G-selection'>{props.text}</p>
        <div className='G-center'>
        <p className='w3d1p2 G-selection'>Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
        </div>
        
      </div>
    )
})

