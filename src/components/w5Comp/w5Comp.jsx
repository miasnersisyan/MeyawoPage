
import { memo } from 'react'
import './style.css'

export default memo(function W5Comp({props}){
    return(
        <div className='w5d1'>
            <div className='G-center'>
                <span className={props.icnName} id='w5d1icn1'></span>
            </div>
            <h1 className='w5d1ver1 G-selection'>{props.text1}</h1>
            {
                props.icons.map((el) => {
                    if(el.includes(' ')){
                        return <p className='w5d1p1 G-selection'>{el}</p>
                    }
                    return <p className='w5d1icn2 G-selection'><span className={el}></span></p>
                })
            }
            <h1 className='w5d1ver2 G-selection'>$ 9.99/Month</h1>
            <div className='G-center'>
                <button className='w5d1btn1 G-selection'>Subscribe</button>
            </div>
        </div>
    )
})