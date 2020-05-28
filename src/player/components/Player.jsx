import React, { useEffect, useState } from 'react';
import Plyr from 'plyr';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const id = useParams();

  const changeSource = (player) => {
    player.source = {
      type: 'video',
      sources: [
        {
          src: videos.length > 0 ? videos[id.id - 1].video_url : 'a',
          provider: 'youtube',
        },
      ],
    };
  };

  useEffect(() => {
    fetch(`./data/database.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((videos) => setVideos(videos));
  }, []);

  useEffect(() => {
    const player = new Plyr(document.getElementById('plrPlayer'));
    if (videos.length > id.id - 1) {
      changeSource(player);
    }
    return () => player.destroy();
  });

  return videos.length > id.id - 1 ? (
    <video id="plrPlayer"></video>
  ) : (
    <h2>Nie znaleziono filmu</h2>
  );
};

export default VideoPlayer;
