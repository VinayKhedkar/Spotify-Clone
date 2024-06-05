import { useContext } from "react"
import { PlayerContext } from "../Context/ContextPlayer"
import VolumeControl from "./VolumeControl"
import TrackDetails from "./TrackDetails"
import MusicControl from "./MusicControl"



 function Player(){

    const {seekbar, seekbg, time, track, playstat, play, pause, prev, next, seekSong, audioMute, isMuted} = useContext(PlayerContext)

    return (
      <div className="bg-black h-[10%] flex xs:justify-center md:justify-between items-center text-white px-4">
        <TrackDetails track={track}/>

        <div className="flex flex-col md:w-[65%]">
            <MusicControl playstat={playstat} play={play} pause={pause} prev={prev} next={next}/>
            <div className="flex justify-center gap-3 items-center">
                <p className="text-xs">{((time.currentTime.minutes)>=10 ? time.currentTime.minutes : `0${time.currentTime.minutes}`)}:{((time.currentTime.seconds)>=10 ? time.currentTime.seconds : `0${time.currentTime.seconds}`)}</p>
                <div ref={seekbg} onClick={seekSong} className="w-[45vw] bg-[#242424] rounded-full cursor-pointer hover:bg-[#afadad]">
                    <hr ref={seekbar} className='h-[6px] border-none bg-[#1ed760] rounded-full'/>
                </div>
                <p className="text-xs"> {((time.totalTime.minutes)>=10 ? time.totalTime.minutes : `0${time.totalTime.minutes}`)}:{((time.totalTime.seconds)>=10 ? time.totalTime.seconds : `0${time.totalTime.seconds}`)} </p>
            </div>
        </div>

           <VolumeControl isMuted={isMuted} audioMute={audioMute}/>
      </div>  
    )
  }

  export default Player