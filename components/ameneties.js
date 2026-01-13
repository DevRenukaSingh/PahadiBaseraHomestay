import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMountain, faPaintBrush, faParking, faTree, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function Ameneties(){
    return(<div className="w-full grid pt-10 pb-20 px-10 md:px-20  theme-bg-color-light theme-text-color justify-items-center">
                <h2 className="text-4xl mb-20 md:mb-20 section-heading partial-border">Our Ameneties</h2>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    <div className='flex flex-col justify-start items-center'>
                       <p className='flex flex-row'> 
                        <span><FontAwesomeIcon icon={faMountain} className='w-8 px-2 text-xl theme-text-col-lite'/>
                       </span>
                       <span><FontAwesomeIcon icon={faTree} className='w-8 px-2 text-xl theme-text-col-lite'/>
                       </span>
                        </p>
                        <p className="text-lg font-semibold">  Stunning Mountain Views
                        And apple orchids</p>
                    </div>  
                    <div className='flex flex-col justify-start items-center '>
                        <FontAwesomeIcon icon={faWifi} className='w-8 px-2 text-xl theme-text-col-lite'/>
                        <p className="text-lg font-semibold mt-3">High Speed Wi-Fi</p>
                    </div>
                    <div className='flex flex-col justify-start items-center mt-2 md:mt-0'>
                        <FontAwesomeIcon icon={faParking} className='w-8 px-2 text-xl theme-text-col-lite'/>
                        <p className="text-lg font-semibold mt-3">Free parking</p>
                    </div>
                    <div className='flex flex-col justify-start items-center mt-2 md:mt-0'>
                        <p className='flex flex-row'> 
                            <span><FontAwesomeIcon icon={faPaintBrush} className='w-8 px-2 text-xl theme-text-col-lite'/></span>
                            <span><FontAwesomeIcon icon={faBook} className='w-8 px-2 text-xl theme-text-col-lite'/></span>
                        </p>
                        <p className="text-lg font-semibold">Common Area  with recreational activities</p>
                    </div>

                </div>


        </div>
    )
}