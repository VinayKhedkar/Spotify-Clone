import { useNavigate } from "react-router-dom"

function AlbumItem({id, name, desc, image, bgColor}){

    const navigate = useNavigate()
    return (
        <div onClick={(()=>navigate(`/album/${id}`))} className={`bg-[${bgColor}] p-2 flex flex-col justify-center w-[12vw] min-w-[100px] rounded hover:bg-[#242424] hover:cursor-pointer`}>
            <img className="rounded" src={image} alt="" />
            <p className="text-lg text-white font-bold">{name}</p>
            <p className="text-sm">{desc}</p>
        </div>
    )

}

export default AlbumItem
