import React, { useEffect, useState } from 'react'
import { YOUTUBE__VIDEOS__API } from '../utils/Contants';

function VideoContainer() {
    const [videoList, setVideoList] = useState(); 
    
     const  getVideo = async () => {
         const respone = await fetch(YOUTUBE__VIDEOS__API);
         const json = await respone.json();
         console.log("videosDats", json)
         setVideoList(json);
    }
    useEffect(() => {
        getVideo();
    }, [])

  return (
      <div></div>
  )
}

export default VideoContainer