
import { memo } from 'react'
import './style.css'

export default memo(function W8Comp({props}){
    return (
        <div className='w8d1'>
            <div className='w8d1-1'>
                <img src={props.src} className='w8d1img1' />
            </div>
            <div className='w8d1-2'>
                
                <p className='w8d1p1 G-selection'>{props.text1}</p>
                <p className='w8d1p2'>
                    <span className='w8d1sp1 G-selection'>By: Admin</span>
                    <span className='w8d1sp1 G-selection'><span className={props.icon1} id='w8d1icn1'></span>{props.num1}</span>
                    <span className='w8d1sp1 G-selection'><span className={props.icon2} id='w8d1icn1'></span>{props.num2}</span>
                </p>
                <p className='w8d1p3 G-selection'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.
                </p>
                <a className='w8d1link1 G-selection' href=''>Read more </a>
              
            </div>
        </div>
    )
})
