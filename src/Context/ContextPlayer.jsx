import { createContext, useEffect, useCallback, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
    const audioRef = useRef()
    const seekbg = useRef()
    const seekbar = useRef()
    const [isMuted, setisMuted] = useState(false)


    const [track, setTrack] = useState(songsData[0])
    const [playstat, setPlaystat] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            seconds:0,
            minutes:0
        },
        totalTime: {
            seconds:0,
            minutes:0
        }
    })
    
    const play = () => {
        audioRef.current.play()
        setPlaystat(true)
    }

    const pause = () => {
        audioRef.current.pause()
        setPlaystat(false)
    }
    const playWithId = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play()
        setPlaystat(true)
    }
    const prev = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play()
            setPlaystat(true)
        }
    }
    const next = async () => {
        if (track.id < (songsData.length - 1)) {
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play()
            setPlaystat(true)
        }
    }
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*(audioRef.current.duration))
    }
    const titleUpdate = (playstat) => {
        if (playstat) {
            document.title = track.name
        }
        else {
            document.title = "Spotify Clone"
        }
    }

    const audioMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted
            setisMuted(!isMuted)
            
        }        
    }
        
    const autoPlay = useCallback(async () => {
        if (audioRef.current.currentTime === audioRef.current.duration) {
            if (track.id < (songsData.length - 1)) {
               setTrack(songsData[track.id + 1]);
    
            // Wait for the new track to load before playing
            const playPromise = new Promise((resolve, reject) => {
                const handleLoadedData = () => {
                    audioRef.current.play().then(resolve).catch(reject);
                };
                audioRef.current.addEventListener('loadeddata', handleLoadedData, { once: true });
            });
    
            try {
                await playPromise;
                setPlaystat(true);
            } catch (error) {
                console.error("Error playing the next track:", error);
            } 
            }
            
        }
    },[track.id]);
    


    useEffect(()=>{
        setTimeout(()=>{
            titleUpdate(playstat)
            audioRef.current.ontimeupdate = () => {
                
                seekbar.current.style.width = ((((audioRef.current.currentTime/audioRef.current.duration)*100))+'%')
                setTime({
                    currentTime: {
                    seconds: Math.floor((audioRef.current.currentTime)%60),
                    minutes: Math.floor((audioRef.current.currentTime)/60)
                        },
                    totalTime: {
                    seconds: Math.floor((audioRef.current.duration)%60),
                    minutes: Math.floor((audioRef.current.duration)/60)
                        }})
            }
        }, 500)
    }, [audioRef, titleUpdate, playstat])

    useEffect(() => {
        const handleEnded = async () => {
            await autoPlay();
        };
    
        const audioElement = audioRef.current;
        audioElement.addEventListener('ended', handleEnded);
    
        return () => {
            audioElement.removeEventListener('ended', handleEnded);
        };
    }, [autoPlay]);
    


    const ContextValue = {
        audioRef,
        seekbar, seekbg,
        time, setTime,
        track, setTrack,
        playstat, setPlaystat,
        play, pause,
        playWithId,
        prev, next,
        seekSong,autoPlay,
        isMuted, audioMute
    }

    

    return (
        <PlayerContext.Provider value={ContextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider