"use client"; // This is a client component

import Image from 'next/image'
import Button from '../Widgets/button';
import Navbar from './navbar';

export default function Hero(){

    return(<div className="w-full hero-bg">
        <Navbar />
        <Image
            src="/guests.webp"
            alt="hero image"
            quality={100}
            layout="fill"
            style={{ objectFit:'cover',}}
        />
        {/* <div className='overlay'/>  */}
        <div className='overlay-content text-center'>
            <h1 className='text-white text-2xl pb-4 hero-heading'>PAHADI BASERA HOMESTAY</h1>
            <p className='text-white text-sm pb-4 px-8 '>Escape to a peaceful retreat amidst nature, with stunning mountain views and warm hospitality</p>
            <Button text='Book your stay' onClick={()=>{ window.open('https://wa.me/+919910859297?text=Hello,%20can%20I%20get%20more%20info%20about%20your%20homestay?','_blank')}}/>
        </div>
    </div>)
}
