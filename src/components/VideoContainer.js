import React, { useEffect, useState } from 'react'
import { YOUTUBE__VIDEOS__API } from '../utils/Contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
    const [videoList, setVideoList] = useState([]);

    const getVideo = async () => {
        const respone = await fetch(YOUTUBE__VIDEOS__API);
        const json = await respone.json();
        setVideoList(json.items);
        console.log("videosDats", json.items)
    }
    console.log("videoslist", videoList)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(YOUTUBE__VIDEOS__API);
                const json = await response.json();
                setVideoList(json.items);
                console.log("videosData", json.items);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }
        };

        fetchData(); // Call the async function inside useEffect
    }, []);



    return (
        <div className='flex flex-wrap'> 
        {
                videoList.map((info) => {
                    
                    return (
                    <Link className='flex flex-wrap' to={"/watch?v=" + info?.id}> 
                        <VideoCard key={info?.id} info={info} />
                    </Link> 
                            
                    
                )
            })
        }
        </div>
    )
}

export default VideoContainer