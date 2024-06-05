import { memo } from "react"

const TrackDetails = memo( function TrackDetails({track}) {
    return (
        <div className="hidden md:flex items-center gap-4 w-[35%] pr-3">
            <img className = 'h-12 rounded' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p className="text-xs">{track.desc}</p>
            </div>
        </div>
    )
})

export default TrackDetails
