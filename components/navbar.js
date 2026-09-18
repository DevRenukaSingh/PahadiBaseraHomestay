"use client";
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className="mynav grid grid-cols-2 items-center">
        <div className='flex justify-start md:justify-start'>
            <Image
            src="/transparent-bg-white-logo.webp"
            alt="logo"
            quality={100}
            width={60}
            height={60}
            />
        </div>
        <div className='flex justify-end md:justify-end'>
            <Link href="./blogs">Blogs</Link>
            
        </div>
    </div>
  )
}
