import Link from 'next/link';
import Button from '../Widgets/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import BookingForm from './bookingform';

export default function Contact(){

    return(<div className="w-full grid pt-10 pb-20  px-20 md:px-80  theme-bg-color-light theme-text-color text-center grid grid-rows justify-items-center">
        <h2 className="text-4xl mb-2 section-heading partial-border">Book Your Stay With Us</h2>
        <p className="text-base text-center theme-text-col-lite font-semibold mb-6">Experience the warmth and hospitality of our heritage homestay</p>
        <BookingForm />
        <div>
            <p className='theme-text-col-dark text-lg mt-4 mb-2'>Address:</p>
            <p>Village Mansari, Manali, Soil, Himachal Pradesh 175131</p>

            <p className='theme-text-col-dark text-lg mt-4 mb-2'>Contact Information:</p>
            <p className='theme-text-col-lite text-md'>Mobile : <Link href= 'https://wa.me/+919871986330?text=Hello,%20can%20I%20get%20more%20info%20about%20your%20homestay?'  target='_blank' >9871986330</Link> , 
            <Link href= 'https://wa.me/+919910859297?text=Hello,%20can%20I%20get%20more%20info%20about%20your%20homestay?'  target='_blank'>9910859297</Link></p>
            <p><Link href= 'mailto:pahadibasera@gmail.com' className='theme-text-col-lite text-md link'  target='_blank'>Email : pahadibasera@gmail.com</Link></p>
            <p className='theme-text-col-dark text-lg mt-4 mb-2'>Social Links:</p>
            <div className='flex items-center justify-center my-2'>
                <Link href= 'https://www.facebook.com/pahadibasera/' aria-label='Facebook link' target='_blank' >
                <FontAwesomeIcon icon={faFacebook} className='w-8 px-2 theme-text-col-lite text-2xl'/>
                </Link>
                <Link href= 'https://www.instagram.com/pahadi_basera' aria-label='Instagram link'  target='_blank' >
                <FontAwesomeIcon icon={faInstagram} className='w-8 px-2 theme-text-col-lite text-2xl'/>
                </Link>
            </div>
       </div>
    </div>)

}