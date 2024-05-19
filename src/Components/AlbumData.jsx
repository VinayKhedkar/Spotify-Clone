import { useParams } from "react-router-dom"
import NavBar from "./NavBar"
import { albumsData, assets, songsData } from "../assets/assets"
import { useContext } from "react"
import { PlayerContext } from "../Context/ContextPlayer"

function AlbumData() {

    const {id} = useParams()
    const data = albumsData[id]

    return (
        <>
            <NavBar/>
            <div className='flex flex-col' >
                <div className={`flex text-center items-center xs:gap-4 md:gap-8 bg-[${data.bgColor}]`}>
                    <img className="xs:w-[80px] md:w-[12vw]" src={data.image} alt="" />
                    <div className="flex flex-col items-start gap-2">
                        <p className="xs:hidden md:block md:text-xl text-white">Playlist</p>
                        <p className="text-nunito xs:text-xl md:text-6xl font-extrabold text-white">{data.name}</p>
                        <p className="xs:text-base md:text-lg text-white text-start">{data.desc}</p>
                        <div className="flex gap-1 items-center  xs:hidden 3xs:flex">
                            <img className="w-8" src={assets.spotify_logo} alt="" />
                            <p className="text-sm text-white">{`Spotify ⚪ ${data.songs} Songs in this Playlist`}</p>
                        </div>
                    </div>
                </div>
                <div className="grid xs:grid-cols-1 3xs:grid-cols-2 md:grid-cols-3 mx-4 mt-4 text-center text-white font-bold">
                    <p className="xs:hidden 3xs:block">Title</p>
                    <p className="xs:block 3xs:hidden text-start pl-3">Songs</p>
                    <p className="xs:hidden 3xs:block">Description</p>
                    <p className="xs:hidden md:block">Duration</p>
                </div>

                <div className="flex flex-col gap-3 text-center m-4">
                    {songsData.map((e)=><Song name = {e.name} desc={e.desc} duration={e.duration} image={e.image} id={e.id} key={e.id}/>)}
                </div>
                
            </div>
        </>
    )
}

function Song({name, desc, duration, image, id}){

    const {playWithId} = useContext(PlayerContext)


    return(
        <div onClick={() => playWithId(id)} className="grid xs:grid-cols-1 3xs:grid-cols-2 md:grid-cols-3  items-center rounded hover:bg-[#242424] cursor-pointer">
            <div className="flex gap-2 items-center ml-3 my-2">
                <img className="w-10 min-w-10 rounded" src={image} alt="" />
                <p>{name}</p>
            </div>
            <p className="xs:hidden 3xs:block">{desc}</p>
            <p className="xs:hidden md:block">{duration}</p>
        </div>
    )
}
export default AlbumData
