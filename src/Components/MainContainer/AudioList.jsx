import React, {useEffect, useState} from 'react'
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from 'react-icons/fa'
import MusicPlayer from './MusicPlayer'
import { list } from './songList'
import '../../styles/LeftMenu.css'
import localImg from '../../Images/song-img.jpg'

function AudioList() {

    const [songs, setSongs ] = useState(list)
    const [song, setSong] = useState(null)
    const [img, setImage] = useState(null)
    const [auto, setAuto] = useState(false)

    useEffect(() => {
        const allSongs = document.querySelectorAll(".songs")

        function changeActive() {
            allSongs.forEach((n) => n.classList.remove("active"))
            this.classList.add("active")
        }

        allSongs.forEach((n) => n.addEventListener("click", changeActive))
    }, [])

    const changeFavorite = (id) => {
        songs.forEach((song) => {
            if (song.id === id) {
                song.favorite = !song.favorite
            }
        })

        setSongs([...songs])
    }

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc)
        setImage(imgSrc)
        setAuto(true)
    }

    return(
        <div className='AudioList'>
            <h2 className="title">
                The list <span>{songs.length} Songs</span>
            </h2>

            <div className="songsContainer">
                {songs && songs.map((song, index) => {
                    <div
                        className="songs"
                        key={song?.id}
                        onClick={() => setMainSong(song?.song, song?.imgSrc)}
                    >
                        <div className="count">
                            <p>{`#${index + 1}`}</p>
                        </div>
                        <div className="song">
                            <div className="imgBox">
                                <img src={localImg} alt="local img"/>
                            </div>

                            <div className='section'>
                                <p className='songName'>
                                    {song?.songName}{" "}
                                    <span className="songSpan">{song?.artist}</span>
                                </p>

                                <div className="hits">
                                    <p className="hit">
                                        <i>
                                            <FaHeadphones/>
                                        </i>
                                        1 0000
                                    </p>

                                    <p className='duration'>
                                        <i>
                                            <FaRegClock/>
                                        </i>
                                        02:45
                                    </p>
                                    <div className='favorite'
                                        onClick={() => changeFavorite(song?.id)}
                                    >
                                        {song?.favorite ? (
                                            <i>
                                                <FaHeart/>
                                            </i>
                                        ):
                                        [
                                            <i>
                                                <FaRegHeart/>
                                            </i>
                                        ]}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
            <MusicPlayer file={song} imgSrc={img} autoplay={auto}/>
        </div>
    )
}

export {AudioList}