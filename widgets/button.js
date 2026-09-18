
export default function Button({text='ok',onClick={} ,type='default'}){

 return(
    <div>
    <button onClick={onClick} className="theme-btn font-medium rounded-full text-md text-center me-2 mb-2">{text}
    </button>
    </div>
    )

}
