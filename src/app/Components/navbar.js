
import Image from 'next/image'


export default function Navbar() {
  return (
    <div className="mynav grid grid-cols-1 items-center">
        <div className='flex justify-center md:justify-start'>
            <Image
            src="/transparent-bg-white-logo.png"
            alt="logo"
            quality={100}
            width={60}
            height={60}
            />
        </div>
    </div>
  )
}
