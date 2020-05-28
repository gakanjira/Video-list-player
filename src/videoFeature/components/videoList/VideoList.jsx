import React, { useState, useEffect } from 'react';

import Video from '../singleVideo/Video';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('./data/database.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <React.Fragment>
      {videos.map((video, index) => (
        <Video
          key={`video-${index}`}
          title={video.title}
          description={video.description}
          id={video.id}
        />
      ))}
    </React.Fragment>
  );
};

export default VideoList;
