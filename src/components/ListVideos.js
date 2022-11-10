import React from 'react'
import {useState, useEffect} from 'react'
import { getVideoLibary } from '../utils'

const ListVideos = () => {

    const [videos, setVideos] = useState([])

    useEffect(() =>{
        loadVideos()
    }, [])

    const loadVideos = async () => {
        let videoLibary = await getVideoLibary()
        console.log(videoLibary)
        setVideos(videoLibary)
    }

    return (
        <div className='container'>
            <div className='usernames'>
                {videos.map(({id, name, video_name}) =>(
                    <div className='video-card'>
                        <h3 key={id}>{video_name}</h3>
                        <video width="320" height="240" controls>
                            <source src={name} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListVideos