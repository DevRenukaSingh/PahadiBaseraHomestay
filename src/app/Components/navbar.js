
import Image from 'next/image'


export default function Navbar() {
  return (
    <div className="mynav grid grid-cols-2 gap-4 justify-between items-center">
        <div className='grid grid-cols-2 items-start'>
            <Image
            className='pr-5'
            src="/transparent-bg-white-logo.png"
            alt="logo"
            quality={100}
            width={80}
            height={80}
            />
        </div>
    </div>
  )
}
