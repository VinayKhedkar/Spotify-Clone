import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../Context/ContextPlayer'
export default function SideBar(){
  const navigate = useNavigate()
  const { track} = useContext(PlayerContext)
    return (
      <div className="w-[25%] h-full p-2 flex-col gap-2  text-[#b3b3b3] hidden lg:flex">
        <div className="bg-[#121212] gap-4 pt-3 pb-3 rounded flex flex-col justify-around">
          <button onClick={()=> navigate('/')} className="flex items-center gap-3 pl-6 cursor-pointer">
            <img className='h-[24px]' src={assets.home_icon} alt="home_icon" />
            <p className='font-bold text-sm'>Home</p>
          </button>
        </div>

        <div className="flex flex-col w-full items-start gap-3 pl-6 pr-4 pb-4 bg-[#121212] rounded ">
          <p className='text-2xl font-bold mt-3'>Now Playing</p>
          <div className="flex items-center justify-evenly gap-3 p-4 bg-[#242424] rounded">
            <img className='h-[10vh] lg:h-[8vh] rounded' src={track.image} alt="" />
            <div>
              <p className='font-bold text-lg text-white'>{track.name}</p>
              <p className='font-bold text-[10px]'>{track.desc}</p>
            </div>
          </div>
        </div>
        

        <div className="bg-[#121212] h-%] flex flex-col overflow-auto items-start gap-4 pt-5 pb-5 pl-3 pr-3 rounded">
          <div className='flex flex-col items-start'>
            <div className="flex items-center gap-3 pl-8 cursor-pointer ">
              <img className='h-[24px]' src={assets.stack_icon} alt="" />
              <p className='font-bold text-sm'>Your Library</p>
            </div>
          </div>

          <div className='bg-[#242424] w-full rounded-lg  flex flex-col p-4 pl-6'>
            <p className='font-bold text-white mb-2'>Create your first playlist.</p>
            <p className='font-bold text-white text-sm mb-3'>It&apos;s easy, we&apos;ll help you.</p>
            <button className='bg-white rounded-[9999px] w-[150px]'>
              <p className='font-nunito font-[750] text-sm text-black p-[6px]'>Create Playlist</p>
            </button>
          </div>

          <div className='bg-[#242424] w-full rounded-lg  flex flex-col p-4 pl-6'>
            <p className='font-bold text-white mb-2'>Let&apos;s find some podcasts to follow</p>
            <p className='font-bold text-white text-sm mb-3'>We&apos;ll keep you updated on new episodes.</p>
            <button className='bg-white rounded-[9999px] w-[150px]'>
              <p className='font-nunito font-[750] text-sm text-black p-[6px]'>Browse Podcasts</p>
            </button>
          </div>
        </div>

      </div>
      
    )
  }