import Image from 'next/image'

export default function About(){

    return(<div className="w-full grid pt-10 pb-20 px-10 md:px-20  theme-bg-color-light theme-text-color justify-items-center">
        <h2 className="text-2xl md:text-4xl mb-5 md:mb-10 section-heading partial-border">Our Homestay</h2>
        <p className="text-base text-center theme-text-col-lite font-semibold">Our 80-year-old homestay offers a unique blend of traditional charm and modern comforts, set amidst a picturesque apple and plum orchard</p>
        <div className="grid grid-cols-1  md:grid-cols-2 justify-itemes-center gap-2 mt-10 mb-10">
            <div className='grid justify-items-center align-items-center'>
            <Image
                src="/house_front.webp"
                alt="About image"
                width={500}
                height={600}
            />
            </div>
           
            <div className='flex flex-col  justify-center align-items-center text-center md:text-left text-color-black w-500 ml-0 md:ml-5 mt-10 md:mt-0'>
                <p className='text-lg mb-4 font-semibold'>Experience the Best of Nature and Comfort</p>
                <ul className='ml-2 text-base list-disc pr-0 md:pr-20 font-mulish theme-text-col-lite'>
                    <li className='py-2'>Our thermally efficient mud, wood, and stone structure blends seamlessly into the natural surroundings.</li>
                    <li className='py-2'>Unwind in our peaceful location, nestled amidst nature&apos;s splendor.</li>
                    <li className='py-2'>Wake up to stunning mountain views that will leave you spellbound.</li>
                    <li className='py-2'> Relax and socialize in our traditional common area, complete with recreational activities.</li>
                    <li className='py-2'>Choose from a variety of room options, including private and hostel rooms, to suit your needs.</li>
                </ul>
            </div>          
        </div>
    </div>)

}