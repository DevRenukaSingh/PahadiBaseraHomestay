"use client";

import Image from 'next/image';
import { useState } from "react";

export default function Rooms(){
    const roomTypes=[
        {id:1,title:'Private room with attached washroom', url:'/bedroom1.jpg'},
        {id:2,title:'Private room with shared washroom', url:'/economyroom.jpg'},
        {id:3,title:'Hostel room with shared washroom', url:'/hostelroom.jpg'},
    ];
    const [selectedRoom, setSelectedRoom]=useState(1);

    return(<div className="w-full grid grid-cols-5 bg-white theme-text-color text-center">
       
        <div className='pt-10 pb-20 px-20 text-center md:text-left col-span-3'>
            <h2 className="text-4xl mb-10 font-overpass ">Our Rooms</h2>
            <p className="text-base font-mulish ">We offer a range of room options to suit different budgets and preferences, from private rooms with mountain views to hostel rooms for budget travelers</p>
              {roomTypes.map(room=>(<div className="theme-bg-color-light my-4" key={room.id} onClick={()=>{
                setSelectedRoom(room.id)
              }}>
                <p className={`p-4 font-mulish ${ room.id === selectedRoom ? 'border-r-8 border-orange-950':''}`}>{room.title}</p>
              </div>
              ))}  
        </div>
        <div className='grid justify-items-center align-items-center relative col-span-2'>
            <Image
                fill
                src={roomTypes[selectedRoom-1].url}
                alt={roomTypes[selectedRoom-1].url}
            />
        </div>
       
    </div>)

}