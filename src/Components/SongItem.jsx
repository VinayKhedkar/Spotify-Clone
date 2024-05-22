import { useContext } from "react"
import { PlayerContext } from "../Context/ContextPlayer"

function SongItem({id, name, desc, image, duration}){

    const {playWithId} = useContext(PlayerContext)
    return (
        <div onClick={() => playWithId(id)} className='p-2 flex flex-col justify-center w-[12vw] min-w-[170px] rounded-xl hover:bg-[#242424] cursor-pointer'>
            <img className="rounded" src={image} alt="" />
            <p className="text-lg text-white font-bold">{name}</p>
            <p className="text-sm">{desc}</p>
        </div>
    )

}

export default SongItem
