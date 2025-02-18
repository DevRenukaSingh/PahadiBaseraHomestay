"use client"; // This is a client component

import Image from 'next/image'
import { useCallback, useState , useEffect } from 'react';
import Button from '../Widgets/button';

export default function Hero(){

    const links = ['www.instagram.com/pahadi_basera','www.airbnb.com/h/pahadibaserahomestay','www.airbnb.com/h/pahadibaserahostel','www.facebook.com/pahadibasera'];
    const headings = ['Where Tranquility Meets Tradition','Your Tranquil Homestay in the Heart of the Mountains','Relax in cozy rooms adorned with traditional decor, offering modern amenities for a comfortable stay. ']
    const [newLink,setNewLink] = useState('www.instagram.com/pahadi_basera');
    const [newHeading,setNewHeading] = useState(headings[0]);


    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * links.length);
        setNewLink(links[index]);
    }, []);

    const shuffle1 = useCallback(() => {
        const index = Math.floor(Math.random() * headings.length);
        setNewHeading(headings[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle1, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle1])


    return(<div className="w-full hero-bg">
        <Image
            src="/hero1.jpg"
            alt="hero image"
            quality={100}
            layout="fill"
            style={{ objectFit:'fill',}}
        />
        {/* <div className='overlay'/>  */}
        <div className='overlay-content text-center'>
            <h1 className='text-white text-2xl pb-4 hero-heading'>PAHADI BASERA HOMESTAY</h1>
            <p className='text-white text-sm pb-4 px-8 '>Escape to a peaceful retreat amidst nature, with stunning mountain views and warm hospitality</p>
            <Button text='Book your stay' onClick={()=>{ window.open('https://wa.me/+919910859765?text=Hello,%20can%20I%20get%20more%20info%20about%20your%20homestay?','_blank')}}/>
        </div>
    </div>)
}
