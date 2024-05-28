import { useContext } from "react"
import { assets } from "../assets/assets"
import { PlayerContext } from "../Context/ContextPlayer"
export default function Player(){

    const {seekbar, seekbg, time, track, playstat, play, pause, prev, next, seekSong, audioMute, isMuted} = useContext(PlayerContext)

    return (
      <div className="bg-black h-[10%] flex xs:justify-center md:justify-between items-center text-white px-4">
        <div className="hidden md:flex items-center gap-4 w-[35%] pr-3">
            <img className = 'h-12 rounded' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p className="text-xs">{track.desc}</p>
            </div>
        </div>

        <div className="flex flex-col md:w-[65%]">
            <div className="flex justify-center gap-5 items-center ">
                <img onClick={prev} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                    {playstat ? <img onClick={pause} className="w-6 cursor-pointer" src={assets.pause_icon} alt="" /> :
                    <img onClick={play} className="w-6 cursor-pointer" src={assets.play_icon} alt="" />}
                <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            </div>
            <div className="flex justify-center gap-3 items-center">
                <p className="text-xs">{((time.currentTime.minutes)>=10 ? time.currentTime.minutes : `0${time.currentTime.minutes}`)}:{((time.currentTime.seconds)>=10 ? time.currentTime.seconds : `0${time.currentTime.seconds}`)}</p>
                <div ref={seekbg} onClick={seekSong} className="w-[45vw] bg-[#242424] rounded-full cursor-pointer hover:bg-[#afadad]">
                    <hr ref={seekbar} className='h-[6px] border-none bg-[#1ed760] rounded-full'/>
                </div>
                <p className="text-xs"> {((time.totalTime.minutes)>=10 ? time.totalTime.minutes : `0${time.totalTime.minutes}`)}:{((time.totalTime.seconds)>=10 ? time.totalTime.seconds : `0${time.totalTime.seconds}`)} </p>
            </div>
        </div>

        <div className="hidden lg:flex items-center justify-end gap-4 w-[35%] pl-3">
            <div className="flex justify-center gap-2 items-center px-8">
                {isMuted ? <img onClick={()=>audioMute()} className="w-7 cursor-pointer" src={assets.volume_mute_icon} alt="" /> : <img onClick={()=>audioMute()} className="w-7 cursor-pointer" src={assets.volume_icon} alt="" />}
                {/* <div className="flex">
                    <img className="w-8 cursor-pointer" src={assets.plus} alt="plus" />
                    <img className="w-8 cursor-pointer" src={assets.minus} alt="plus" />
                </div> */}
                
            </div>
        </div>    
      </div>  
    )
  }