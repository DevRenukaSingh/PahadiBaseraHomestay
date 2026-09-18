"use client"; // This is a client component

import Image from 'next/image'
import Button from '../widgets/button';

export default function Hero(){

    return(<div className="w-full hero-bg">
        <Image
            src="https://res.cloudinary.com/db4clvkdl/image/upload/v1756136143/summers-in-mountainhome_qlzdob.webp"
            alt="summers in mountain home"
            width={4032}
            height={3024}
            quality={[50,75]}
            style={imageStyle}
        />
        <div className='overlay-content text-center'>
            <h1 className='text-white text-3xl pb-4 hero-heading'>PAHADI BASERA HOMESTAY</h1>
            <p className='text-white text-sm pb-4 px-8 '>A peaceful mountain escape near Manali with orchard views and a warm Kathkuni welcome.</p>
            <Button text='Check Availability' onClick={()=>{ window.open('https://wa.me/+919910859297?text=Hello,%20can%20I%20get%20more%20info%20about%20your%20homestay?','_blank')}}/>
        </div>
    </div>)
}


const imageStyle = {
  width: '100vw',
  height: '100vh',
}