import React from 'react';

function VideoCard({ info }) {
  // Check if info is null or undefined
  if (!info) {
    return <div>No video information available.</div>;
  }

  // Destructure snippet from info
  const { snippet , statistics } = info;

  // Check if snippet is null or undefined
  if (!snippet) {
    return <div>No video snippet available.</div>;
  }

  // Destructure properties from snippet
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  const formatNumber = (number) =>
  {
    const billion = 1e9;
    const million = 1e6;
    const thousand = 1e3;
  
    if (number >= billion) {
      return `${(number / billion).toFixed(1)}B`;
    } else if (number >= million) {
      return `${(number / million).toFixed(1)}M`;
    } else if (number >= thousand) {
      return `${(number / thousand).toFixed(1)}K`;
    } else {
      return `${number}`;
    }
  }

    const viewCount = formatNumber(statistics?.viewCount);

  return (
    <div className='p-2 m-2 w-[31%]' >
      <img className='rounded-lg' src={thumbnails?.medium?.url} alt="" />
      <h1 className='font-bold'>{title}</h1>
      <p className=''>{channelTitle}</p>
      <p className=''>{viewCount} views</p>
    </div>
  );
}

export default VideoCard;
