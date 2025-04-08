"use client";

import { useState } from "react";
import ImageSlider from "./ImageSlider";


export default function Rooms(){
    const roomTypes=[
        {id:1,title:'Private room with attached washroom', images:['/bedroom1.webp','hall.webp','hall4.webp']},
        {id:2,title:'Private room with shared washroom', images:['/economyroom.webp','view.webp','guests1.webp']},
        {id:3,title:'Hostel room with shared washroom', images:['/hostelroom.webp','food1.webp','food2.webp']},
    ];
    const [selectedRoom, setSelectedRoom]=useState(1);

    return(<div className="w-full grid grid-cols-1 md:grid-cols-6 bg-white theme-text-color text-center">
       
        <div className='pt-10 pb-20 px-10 md:px-20 text-center md:text-left col-span-1 md:col-span-3'>
            <h2 className="text-4xl mb-5 md:mb-10 font-overpass ">Our Rooms</h2>
            <p className="text-base font-mulish ">We offer a range of room options to suit different budgets and preferences, from private rooms with mountain views to hostel rooms for budget travelers</p>
            <div className='flex flex-row md:flex-col justify-between mt-4'>
              {roomTypes.map(room=>(<div className="theme-bg-color-light mx-1 md:my-4" key={room.id} onClick={()=>{
                setSelectedRoom(room.id)
              }}>
                <p className={`p-4 text-sm md:text-base font-mulish ${ room.id === selectedRoom ? ' border-b-8 md:border-b-0 md:border-r-8 border-orange-950':''}`}>{room.title}</p>
              </div>
              ))} 
            </div>  
        </div>
        <div className='grid justify-items-center align-items-center relative col-span-3 md:h-auto'>
        <ImageSlider images={roomTypes[selectedRoom-1].images}/>
         {/* <Image
             fill
            src={roomTypes[selectedRoom-1].url}
              alt={roomTypes[selectedRoom-1].url}
           />   */}
        </div>
       
    </div>)

}