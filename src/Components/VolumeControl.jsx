import { memo } from "react"
import { assets } from "../assets/assets"

const VolumeControl = memo( function VolumeControl({isMuted, audioMute}) {
    return (
        <div className="hidden lg:flex items-center justify-end gap-4 w-[35%] pl-3">
            <div className="flex justify-center gap-2 items-center px-8">
                {isMuted ? <img onClick={()=>audioMute()} className="w-7 cursor-pointer" src={assets.volume_mute_icon} alt="" /> : <img onClick={()=>audioMute()} className="w-7 cursor-pointer" src={assets.volume_icon} alt="" />}
                {/* <div className="flex">
                    <img className="w-8 cursor-pointer" src={assets.plus} alt="plus" />
                    <img className="w-8 cursor-pointer" src={assets.minus} alt="plus" />
                </div> */}
                
            </div>
        </div> 
    )
})

export default VolumeControl
