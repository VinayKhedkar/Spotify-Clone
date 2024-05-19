import './index.css'
import SideBar from './Components/SideBar'
import Content from './Components/Content'
import Player from './Components/Player'
import { useContext } from 'react'
import { PlayerContext } from './Context/ContextPlayer'

function App() {
  
  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className='h-screen w-screen bg-black font-nunito'>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Content/>
      </div>
      <Player/>
      <audio className='hidden' ref={audioRef} src={track.file} preload='auto' controls></audio>
    </div>
  )
}

export default App
