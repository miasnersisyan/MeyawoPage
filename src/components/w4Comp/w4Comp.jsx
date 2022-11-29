
import { memo } from 'react'
import './style.css'

export default memo(function W4Comp({props}){
   return(
    <div className='w4d1'>
        <img src={props.imgLink} className='w4d1img1' />
        <div className='w4d1-1'>
            <div className='w4d1-1textdiv'>
                <h2 className='w4d1ver1 G-selection'>Web Designing</h2>
                <p className='w4d1p1 G-selection'>Category : Web Templates</p>
            </div>
        </div>
    </div>
   )
})