"use client"; // This is a client component

import Image from 'next/image'
import Button from '../Widgets/button';
import Navbar from './navbar';

export default function Hero(){

    return(<div className="w-full hero-bg">
        <Navbar />
        <Image
            src="https://res.cloudinary.com/db4clvkdl/image/upload/v1756136143/summers-in-mountainhome_qlzdob.webp"
            alt="summers in mountain home"
            quality={[50,75]}
            layout="fill"
            style={{ objectFit:'cover',}}
        />
        {/* <div className='overlay'/>  */}
        <div className='overlay-content text-center'>
            <h1 className='text-white text-2xl pb-4 hero-heading'>PAHADI BASERA HOMESTAY</h1>
            <p className='text-white text-sm pb-4 px-8 '>A peaceful mountain escape near Manali with orchard views and a warm Kathkuni welcome.</p>
            <Button text='Book your stay' onClick={()=>{ window.open('https://wa.me/+919910859297?text=Hello,%20can%20I%20get%20more%20info%20about%20your%20homestay?','_blank')}}/>
        </div>
    </div>)
}
