import React from "react";
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
import handsomeman from './images/handsomeman.png'
import { ArrowBigRight, ArrowRight, MoveRight } from "lucide-react";

const DashboardLight = () =>{
    return(
        <div className="bg-[#333130]">
            <nav className="border-b-2 border-[#3D3B3A]">
                 <div className="bg-[#886085] rounded-full flex justify-between px-4">
                <div>
                    <img className="w-64" src={logo}/>
                </div>
                <button className="bg-[#886085] text-white h-12 w-48 rounded-full mt-4 text-md">LOGIN</button>
            </div>
            </nav>
            <section className="grid grid-cols-3 px-16">
                <div className="col-span-2 mt-5">
                    <h1 className="text-5xl font-bold text-[#E5D5E3]">Record And Transcribe Audio <br></br> For free:</h1>
                    <p className="text-3xl mt-14 text-[#805A7D]">Client track was built for project mangers, 
                        product owners and business analysts to get 
                        the most out of chaotic meetings.<br></br> Start Recording today. 
                    </p>
                    <br></br>
                    <div className="flex">
                    <button className="bg-[#3D3B3A] border-2 border-[#996C95] p-3 font-semibold text-white px-10 rounded-xl text-xl">sign up now</button>
                    <button className="bg-[#3D3B3A] py-3 font-semibold text-white px-4 rounded-xl ml-1"><MoveRight /></button>
                    </div>
                    
                </div>
                <div className="ml-[-90px] col-span-1 relative">
                    <div className="flex border-8 rounded-full bg-[#996C95] w-2/3 ml-44 opacity-60 z-10 relative shadow-lg">
                        <img className="w-12" src={lady1}/> <span className="px-2">“I don't need to remember to take notes”</span>
                    </div>
                    <div className="flex z-20 relative">
                        <img className="w-20 h-24 mt-10" src={podcast}/> <img className="mt-[-27px] w-80" src={iphone15}/>
                    </div>
                    <div className="flex rounded-full bg-[#996C95] w-2/3 opacity-60 p-1 mt-[-100px] ml-[-20px] ml-2 z-30 relative">
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
                <img className="w-[95%] ml-5 h-[55vh]" src={rectangle}/>
            </section>
           
        </div>
    )
}

export default DashboardLight;