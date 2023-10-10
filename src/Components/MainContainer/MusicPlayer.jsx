import React, {useState, useEffect, useRef} from 'react'
import "../../styles/MusicPlayer.css"

import {
    FaRegHeart,
    FaHeart,
    FaForward,
    FaStepForward,
    FaStepBackward,
    FaBackward,
    FaPlay,
    FaPause,
    FaShareAlt,
} from "react-icons/fa"

import {BsDownload} from "react-icons/bs"

function MusicPlayer({file, imgSrc, auto}) {
    const [isLove, setLove] = useState(false)
    const [isPlaying, setPlay] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioPLayer = useRef()
    const progressBar = useRef()
    const animationRef = useState()

    useEffect(() => {
        if (file) {
            audioPLayer.current.src = file;
            audioPLayer.current.perload = "metadata";
        }
    }, [file])

    useEffect(() => {
        const seconds = Math.floor(audioPLayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds
    }, [audioPLayer?.current?.loadedmetadata, audioPLayer?.current?.readyState])

    const changePlayPause = () => {
        const preValue = isPlaying
        setPlay(!preValue)

        if (!preValue) {
            audioPLayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPLayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPLayer.current.currentTime;
        changeCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const calculateTime = (sec) => {
        const minutes = Math.floor(sec/60)
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(sec % 60)
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnMin}:${returnSec}`
    }

    const changeProgress = () => {
        audioPLayer.current.currentTime = progressBar.current.value
        changeCurrentTime()
    }

    const changeCurrentTime = () => {
        progressBar.current.style.setProperty(
            "--played-width",
            `${(progressBar.current.value / duration) * 100}`
        )
        setCurrentTime(progressBar.current.value)
    }

    const changeSongLove = () => {
        setLove(!isLove)
    }

    return(
        <div className="musicPlayer">
            <div className="songImage">
                <img src={imgSrc} alt="local image"/>
            </div>

            <div className='songAttributes'>
                <audio ref={audioPLayer}/>

                <div className="top">
                    <div className="left">
                        <div className="loved" onClick={changeSongLove}>
                            {isLove ? (
                                <i>
                                    <FaRegHeart/>
                                </i>
                            )
                            :
                            (
                                <i>
                                    <FaHeart/>
                                </i>
                            )}
                        </div>
                        <i className="download">
                            <BsDownload/>
                        </i>
                    </div>

                    <div className="middle">
                        <div className="back">
                            <i>
                                <FaStepBackward/>
                            </i>
                            <i>
                                <FaBackward/>
                            </i>
                        </div>
                        <div className='playPuase' onClick={changePlayPause}>
                            {isPlaying ? (
                                <i>
                                    <FaPause/>
                                </i>
                            )
                            :
                            (
                                <i>
                                    <FaPlay/>
                                </i>
                            )}
                        </div>
                        <div className="forward">
                            <i>
                                <FaForward/>
                            </i>
                            <i>
                                <FaStepForward/>
                            </i>
                        </div>
                    </div>

                    <div className="right">
                        <i>
                            <FaShareAlt/>
                        </i>
                    </div>
                </div>

                <div className="bottom">
                    <div className="currentTime">{calculateTime(currentTime)}</div>
                    <input
                        type="range"
                        className="progressBar"
                        ref={progressBar}
                        defaultVlaue="0"
                        onChange={changeProgress}
                        autoPLay={auto}
                    />
                    <div className="duration">
                        {duration && !isNaN(duration) && calculateTime(duration)
                        ? duration && !isNaN(duration) && calculateTime(duration)
                        : "00:00"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;