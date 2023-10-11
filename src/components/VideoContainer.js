import React, { useEffect, useState } from 'react'
import { YOUTUBE__VIDEOS__API } from '../utils/Contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
    const [videoList, setVideoList] = useState([]);

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

        fetchData(); 
    }, []);



    return (
        <div className='flex flex-wrap'>
            {
                videoList.map((info) => {

                    return (
                        <Link className='flex w-[31%]' to={"/watch?v=" + info?.id} key={info?.id}>
                            <VideoCard  info={info} />
                        </Link>


                    )
                })
            }
        </div>
    )
}

export default VideoContainer