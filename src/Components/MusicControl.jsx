import { memo } from "react"
import { assets } from "../assets/assets"

const MusicControl = memo( function MusicControl({playstat, play, pause, prev, next}) {
    return (
        <div className="flex justify-center gap-5 items-center ">
                <img onClick={prev} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                    {playstat ? <img onClick={pause} className="w-6 cursor-pointer" src={assets.pause_icon} alt="" /> :
                    <img onClick={play} className="w-6 cursor-pointer" src={assets.play_icon} alt="" />}
                <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            </div>
    )
})

export default MusicControl
