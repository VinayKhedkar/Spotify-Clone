import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
function NavBar() {

    const navigate = useNavigate()
    return (
        <>
            <div className="w-full flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <img onClick={()=>navigate(-1)} className="w-8 bg-[#242424] p-2 rounded-full hover:cursor-pointer " src={assets.arrow_left} alt="" />
                    <img onClick={()=>navigate(1)} className="w-8 bg-[#242424] p-2 rounded-full hover:cursor-pointer" src={assets.arrow_right} alt="" />
                </div>
                
                <div className="flex md:gap-2 xs:gap-1 items-center">
                    <a href="https://open.spotify.com/premium"><p className='bg-[#fff] rounded-full p-1 md:px-4 xs:px-2 md:text-sm text-black font-bold font-nunito cursor-pointer xs:text-10px'>Explore Premium</p></a>
                    <a href="https://open.spotify.com/download"><p className='bg-[#242424] rounded-full p-1 px-4 text-sm text-[#d0d0d0] font-bold font-nunito cursor-pointer xs:hidden md:block'> Install App</p></a>
                    <img className="w-16" src={assets.spotify_logo} alt="" />
                </div>
            </div>
        </>
    )
}

export default NavBar
