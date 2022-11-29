

import { useState,useEffect } from 'react'
import MediaComp1 from '../components/mediaComp1/mediaComp1'
import W10Comp from '../components/w10Comp/w10Comp'
import W3Comp from '../components/w3Comp/w3Comp'
import W4Comp from '../components/w4Comp/w4Comp'
import W5Comp from '../components/w5Comp/w5Comp'
import W7Comp from '../components/w7Comp/w7Comp'
import W8Comp from '../components/w8Comp/w8Comp'

import './style.css'

function AllPage(){

    const [sp1rotate,setSp1Rotate] = useState(0)
    const [sp1top,setSp1Top] = useState(0)
    const [sp3rotate,setSp3Rotate] = useState(0)
    const [sp3bottom,setSp3Bottom] = useState(0)

    const [sp2opacity,setSp2Opacity] = useState(1)

    const [spVal,setSpVal] = useState(false)

    const [w1sp2tr,setW1sp2tr] = useState(55)
    const [w1sp2op,setW1sp2op] = useState(0)

    let w3Arr = [
        {id : 1,icnLink : 'icon-eyedropper',text : 'Adipisicing'},
        {id : 2,icnLink : 'icon-ticket',text : 'Sapiente'},
        {id : 3,icnLink : 'icon-display',text : 'Placeat'},
        {id : 4,icnLink : 'icon-page-break',text : 'Iusto'}
    ]

    let w4Arr = [
        {id : 1,imgLink : './images/w4d1img1.jpg'},
        {id : 2,imgLink : './images/w4d1img2.jpg'},
        {id : 3,imgLink : './images/w4d1img3.jpg'},
    ]

    let [posDivColor1,setPosDivColor1] = useState('white')
    let [posDivColor2,setPosDivColor2] = useState('white')
    
    let w1sp2Style = {opacity : `${w1sp2op}`,transform : `translateY(-${w1sp2tr}px)`,color : `${posDivColor2}`}

    let [posDivBackColor,setPosDivBackColor] = useState('none')

    

    

    window.onscroll = function(){
        if(window.scrollY > 2){
            setPosDivColor1('#695aa6')
            setPosDivColor2('#111')
            setPosDivBackColor('white')
        }else{
            setPosDivColor1('white')
            setPosDivColor2('white')
            setPosDivBackColor('none')
        }
    }


    let w5Arr = [
        {id : 1,icnName : 'icon-android',text1 : 'Free',icons : [
            'accusamus reprehenderit','provident dolorem','quos neque','fugiat quibusdam','icon-cancel-circle','icon-cancel-circle'
        ]},
        {id : 2,icnName : 'icon-truck',text1 : 'Basic',icons : [
            'accusamus reprehenderit','provident dolorem','quos neque','fugiat quibusdam','accusamus reprehenderit','icon-cancel-circle'
        ]},
        {id : 3,icnName : 'icon-rocket',text1 : 'Premium',icons : [
            'accusamus reprehenderit','provident dolorem','quos neque','fugiat quibusdam','accusamus reprehenderit','provident dolorem'
        ]},
    ]

    let w7Arr = [
        {id : 1,name : 'Emily Reb',src : './images/w7d1img1.jpg'},
        {id : 2,name : 'Emily Reb',src : './images/w7d1img2.jpg'}
    ]

    let a8Arr = [
        {id : 1,src : './images/w8d1img1.jpg',text1 : 'Consectetur adipisicing elit',icon1 : 'icon-stack',num1 : 234,icon2 : 'icon-video-camera',num2 : 123},
        {id : 2,src : './images/w8d1img2.jpg',text1 : 'Explicabo illo',icon1 : 'icon-stack',num1 : 456,icon2 : 'icon-video-camera',num2 : 234}
    ]

    let w10Arr = [
        {id : 1,icon : 'icon-google-plus'},
        {id : 2,icon : 'icon-facebook2'},
        {id : 3,icon : 'icon-rss2'},
        {id : 4,icon : 'icon-tumblr'},
        {id : 5,icon : 'icon-yahoo'},
        {id : 6,icon : 'icon-pinterest2'}
    ]

    let [mediaDivOp,setMedaDivOp] = useState(0)
    let [mediaDivZindex,setMediaDivZindex] = useState(100)
    let [mediaDivVal,setMediaDivVal] = useState(false)

    

   return(
    <>

       <div className='w1-1parent' style={{background : `${posDivBackColor}`}}>
            <div className='w1-1 G-mainDiv'>
                <div className='w1-1d1'><h1 className='w1ver1 G-selection' style={{color : `${posDivColor1}`}}>Meyawo</h1></div>
                <div className='w1-1d1'>
                    <div className='w1-1d1 mediaNone1'>
                        <span className='w1sp2 w1sp2tr1' style={w1sp2Style}>Home</span>
                        <span className='w1sp2 w1sp2tr2' style={w1sp2Style}>About</span>
                        <span className='w1sp2 w1sp2tr3' style={w1sp2Style}>Portfolio</span>
                        <span className='w1sp2 w1sp2tr4' style={w1sp2Style}>Testmonial</span>
                        <span className='w1sp2 w1sp2tr5' style={w1sp2Style}>Blog</span>
                        <span className='w1sp2 w1sp2tr6' style={w1sp2Style}>Contact</span>
                    </div>
                    <div className='w1sp1' onClick={() => {
                    if(window.innerWidth > 1000){
                        if(!spVal){
                            setSpVal(true)
                            setSp1Rotate(45)
                            setSp1Top(12)
                            setSp3Bottom(11.5)
                            setSp3Rotate(45)
                            setSp2Opacity(0)

                            setW1sp2tr(0)
                            setW1sp2op(1)
                            
                        }else{
                            setSpVal(false)
                            setSp1Rotate(0)
                            setSp1Top(0)
                            setSp3Bottom(0)
                            setSp3Rotate(0)
                            setSp2Opacity(1)

                            setW1sp2tr(55)
                            setW1sp2op(0)
                        }
                    }else{
                        if(!mediaDivVal){
                            setMedaDivOp(1)
                            setMediaDivZindex(0)
                            setMediaDivVal(true)
                            setSp1Rotate(45)
                            setSp1Top(12)
                            setSp3Bottom(11.5)
                            setSp3Rotate(45)
                            setSp2Opacity(0)

                            setW1sp2tr(0)
                            setW1sp2op(1)
                        }else{
                            setMedaDivOp(0)
                            setMediaDivZindex(100)
                            setMediaDivVal(false)

                            setSp1Rotate(0)
                            setSp1Top(0)
                            setSp3Bottom(0)
                            setSp3Rotate(0)
                            setSp2Opacity(1)

                            setW1sp2tr(55)
                            setW1sp2op(0)
                        }
                        
                    }
                    }}>
                        <div className='w1sp1-1' style={{top: `${sp1top}px`,transform : `rotate(${sp1rotate}deg)`,backgroundColor : `${posDivColor2}`}}></div>
                        <div className='w1sp1-2' style={{opacity : `${sp2opacity}`,backgroundColor : `${posDivColor2}`}}></div>
                        <div className='w1sp1-3' style={{bottom: `${sp3bottom}px`,transform : `rotate(-${sp3rotate}deg)`,backgroundColor : `${posDivColor2}`}}></div>
                    </div>
                </div>
            </div>
        </div>

        <MediaComp1 opacity = {mediaDivOp} left = {mediaDivZindex} />
        
      <div className='w1' style={{backgroundImage : `url('./images/w1backImg.jpg')`}}>
       
        <div className='G-center'>
            <div className='w1textdiv'>
                <h1 className='G-selection w1textver1'>HI!</h1>
                <h1 className='G-selection w1textver2'>I am John<br />Doe </h1>
                <h1 className='G-selection w1textver3'>FRONTEND WEB<br />DESIGNER</h1>
                <button className='w1btn1'>Visit My Works</button>
            </div>
        </div>
   
      </div>

      <div className='w2'>
        <div className='w2-1 G-mainDiv'>
            <div className='w2-1d1'>
                <img src='./images/man.jpg' className='w2img1' />
            </div>
            <div className='w2-1d2'>
                <p className='w2p1 G-selection'>Who Am I ?</p>
                <h1 className='w2ver1 G-selection'>About Me</h1>
                <p className='w2p2 G-selection'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
                culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!</p>
                <button className='w2btn1'>Download CV</button>
            </div>
        </div>
      </div>


      <div className='w3'>
        <p className='pageP1 G-selection'>What I Do ?</p>
        <h1 className='pageVer1 G-selection'>Service</h1>
        <div className='G-center'>
        <div className='w3-1 G-mainDiv'>
            {
                w3Arr.map((elm) => {
                    return <W3Comp key = {elm.id} props = {elm} />
                })
            }
        </div>
        </div>
      </div>

      <div className='w4'>
      <p className='pageP1 G-selection'>What I Did ?</p>
        <h1 className='pageVer1 G-selection'>Portfolio</h1>
        <div className='G-center'>
        <div className='w4-1 G-mainDiv'>
            {
                w4Arr.map((elm) => {
                    return <W4Comp key={elm.id} props={elm} />
                })
            }
        </div>
        </div>
      </div>

      <div className='w5'>
      <p className='pageP1 G-selection'>How Much I Charge ?</p>
        <h1 className='pageVer1 G-selection'>My Pricing</h1>

        <div className='G-center'>
            <div className='w5-1 G-mainDiv'>
                  {
                    w5Arr.map((elm) => {
                        return <W5Comp key={elm.id} props = {elm} />
                    })
                  }
            </div>
        </div>
      </div>

      <div className='w6'>
        <div className='w6-1'>
            <div className='w6-1d1'>
                <h1 className='w6ver1 G-selection'>Want to work with me?</h1>
                <p className='w6p1 G-selection'>Always feel Free to Contact & Hire me</p>
            </div>
            <div className='w6-1d1'>
                <button className='w6btn1'>Hire Me</button>
            </div>
        </div>
      </div>

      <div className='w7'>
      <p className='pageP1 G-selection'>What Think Client About Me ?</p>
        <h1 className='pageVer1 G-selection'>Testmonial</h1>
        <div className='G-center'>
        <div className='w7-1 G-mainDiv'>
           {
            w7Arr.map((elm) => {
               return <W7Comp key={elm.id} props = {elm} />
            })
           }
        </div>
        </div>
      </div>

      <div className='w8'>
      <p className='pageP1 G-selection'>Recent Posts?</p>
        <h1 className='pageVer1 G-selection'>Blog</h1>
        <div className='G-center'>
           <div className='w8-1 G-mainDiv'>
               {
                a8Arr.map((elm) => {
                    return <W8Comp key={elm.id} props = {elm} />
                })
               }
           </div>
        </div>
      </div>


      <div className='w9'>
      <p className='pageP1 G-selection'>How can you communicate?</p>
        <h1 className='pageVer1 G-selection'>Contact Me</h1>
        <div className='G-center'>
            <div className='w9-1'>
                <div className='inpDiv1'>
                    <input className='inp1' type='text' placeholder='Your Name' />
                    <input className='inp1' type='text' placeholder='Enter Email' />
                </div>
                <textarea className='textarea' placeholder='Write Something'></textarea>
                <div className='G-center'>
                    <button className='w9btn1'>Send Message</button>
                </div>
            </div>
        </div>
      </div>

      <div className='w10'>
        <div className='w10-1 G-mainDiv'>
            <p className='w10p1 G-selection'>Copyright 2022 © DevCRUD</p>
            <div className='w10btndiv'>
                {
                    w10Arr.map((elm) => {
                       return <W10Comp key={elm.id} props = {elm} />
                    })
                }
            </div>
        </div>
      </div>
    
    </>
   )
}

export default AllPage