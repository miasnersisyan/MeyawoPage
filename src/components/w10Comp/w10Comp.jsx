
import { memo } from 'react'
import './style.css'

export default memo(function W10Comp({props}){
    return (
        <button className={props.icon} id='w10btn1'></button>
    )
})