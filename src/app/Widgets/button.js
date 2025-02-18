


export default function Button({text='ok',onClick={},size=1,type='default'}){

 return(
    <div>
    <button 
    onClick={onClick}
    class="theme-btn font-medium rounded-full 
    text-sm px-5 py-2.5 text-center me-2 mb-2 ">{text}
    </button>
    </div>
    )

}
