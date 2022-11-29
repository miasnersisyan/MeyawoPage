
import { memo } from 'react'
import './style.css'

export default memo(function MediaComp1({opacity},{left}){
    return (
        <div className='mediaDiv1' style={{opacity : `${opacity}`,left : `-${left}%`}}>
            <a className='medialink1 G-selection' href=''>Home</a>
            <a className='medialink1 G-selection' href=''>About</a>
            <a className='medialink1 G-selection' href=''>Portfolio</a>
            <a className='medialink1 G-selection' href=''>Testmonial</a>
            <a className='medialink1 G-selection' href=''>Blog</a>
            <a className='medialink1 G-selection' href=''>Contact</a>
        </div>
    )
})