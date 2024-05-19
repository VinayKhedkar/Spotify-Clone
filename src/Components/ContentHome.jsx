import NavBar from "./NavBar"
import AlbumItem from "./AlbumItem"
import { albumsData, songsData } from "../assets/assets"
import SongItem from "./SongItem"

function ContentHome() {
    return (
        <div className="flex flex-col gap-2">
            <NavBar />
            <div className="p-2">
                <p className="xs:text-lg md:text-xl text-white font-bold ">Featured Charts</p>
                <div className="flex overflow-auto items-start">
                    {albumsData.map(item => <AlbumItem name={item.name} image={item.image} desc={item.desc} id={item.id} key={item.id}/>)}
                </div>
            </div>
            <div className="p-2">
                <p className="text-xl text-white font-bold">Today&apos;s Biggest Hits</p>
                <div className="flex overflow-auto items-start">
                    {songsData.map(item => <SongItem name={item.name} image={item.image} desc={item.desc} id={item.id} key={item.id} duration ={item.duration}/>)}
                </div>
            </div>
            
        </div>
    )
}

export default ContentHome
