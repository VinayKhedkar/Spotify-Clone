import {Routes, Route} from 'react-router-dom'
import ContentHome from './ContentHome'
import AlbumData from './AlbumData'


export default function Content(){ 
    return (
        <div className="w-[100%] bg-[#121212]  m-2 px-6 pt-4 rounded text-[#b3b3b3] overflow-auto">
            <Routes>
                <Route path='/' element={<ContentHome/>}/>
                <Route path='/album/:id' element={<AlbumData/>}/>
            </Routes>
        </div>
    )
  }