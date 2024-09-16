import React, { useEffect } from "react";
import logo from './images/logo.png'
import podcast from './images/podcast.png'
import lady1 from './images/lady1.png'
import iphone15 from './images/iPhone 15.png'
import rectangle from './images/Group 5.png'
import realme from './images/Realme 10 (1).png'
import frame2 from './images/Frame 2.png'
import frame4 from './images/frame4.png'
import asana from './images/asana.png'
import frame5 from './images/Frame 5.png'
import frame7 from './images/Frame 7.png'
import slack from './images/slack.png'
import group from './images/Group.png'
import frame6 from './images/Frame 6.png'
import toogle from './images/toogleDark.png'
import handsomeman from './images/handsomeman.png'
import { ArrowBigRight, ArrowRight, MoveRight } from "lucide-react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Aos from 'aos'
import second from 'aos/dist/aos.css'

const DashboardLight = () =>{
    // useEffect for AOS
    useEffect(()=>{
        Aos.init();
    },[]);
    return(
        
        <div>
            <nav className="border-b-2 border-[#3D3B3A]">
                 <div className="bg-[#3D3B3A] rounded-full flex justify-between p-1 md:px-4">
                    <div>
                        <img className="w-36 md:w-64" src={logo}/>
                    </div>
                    <div className="flex">
                            <button className="bg-[#886085] text-white h-7 md:h-12 w-16 md:w-48 rounded-2xl md:rounded-full mt-2 md:mt-4 text-sm">LOGIN</button>
                            <Link to="/dark"><img className="border w-12 md:w-16 h-7 md:h-9 mt-2 md:mt-5 rounded-full" src={toogle}/></Link>
                    </div>
                </div>
            </nav>
            
            <section className="md:grid grid-cols-3 md:px-16">
                <div className="col-span-2 mt-5 px-4 md:px-0">
                    <h1 className="text-3xl md:text-5xl font-bold">Record And Transcribe Audio <br className="hidden md:block"></br> For free:</h1>
                    <p className="md:text-3xl md:mt-1 text-[#805A7D]">Client track was built for project mangers, 
                        product owners and business analysts to get 
                        the most out of chaotic meetings.<br></br> Start Recording today. 
                    </p>
                    <br></br>
                    <div className="flex">
                        <button
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="bg-[#3D3B3A] p-3 font-semibold text-white px-10 rounded-xl text-xl">sign up now</button>
                        <button
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="3000"
                        data-aos-delay="1500"
                        className="bg-[#3D3B3A] py-3 font-semibold text-white px-4 rounded-xl ml-1">
                            <MoveRight />
                        </button>
                    </div>
                    
                </div>
                <div className="mt-5 md:mt-0 ml-[-90px] col-span-1 relative">
                    <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="flex border-8 rounded-full bg-[#996C95] w-2/3 ml-40 md:ml-44 z-10 relative shadow-lg"
                    style={{ opacity: 0.5 }}
                    >
                        <img className="w-12" src={lady1}/> <span className="px-2 pt-2">“I don't need to remember to take notes”</span>
                    </div>
                    <div className="flex z-20 relative">
                        <img
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="w-20 h-24 mt-0" src={podcast}/>
                        <img
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="3000"
                        data-aos-delay="3000"
                        className="mt-[-27px] w-64" src={iphone15}/>
                    </div>
                    <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="flex rounded-full bg-[#996C95] w-2/3 p-1 mt-[-100px] ml-[-20px] ml-24 md:ml-2 z-30 relative"
                    style={{ opacity: 0.5 }}>                        
                    <img className="w-12" src={handsomeman}/> <span className="pt-2 pl-3 z-50">“I can focus on the conversation”</span>
                    </div>
                </div>               
            </section>

            <section className="">
                {/* <div>
                    <img src={realme}/>
                </div>
                <div className="col-span-2">
                    <div className="flex justify-end gap-10 mr-16">
                        <img className="w-60" src={frame2}/>
                        <img className="w-60" src={group}/>
                    </div>
                    <div className="flex">
                        <img className="w-60 h-32" src={asana}/>
                        <img className="" src={frame4}/>
                    </div>
                    <div className="flex">
                        <img src={frame7}/>
                        <img src={frame5}/>
                    </div>
                    <div className="flex">
                        <img src={slack}/>
                        <img src={frame6}/>
                    </div>
                </div> */}
                <img className="mt-3 md:mt-[-7px] w-[90%] md:w-[95%] ml-5 h-[25vh] md:h-[50vh]" src={rectangle}/>
            </section>
           
        </div>
    )
}

export default DashboardLight;