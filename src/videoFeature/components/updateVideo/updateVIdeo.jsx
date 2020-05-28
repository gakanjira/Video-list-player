import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormInput from '../../../formInput';

const UpdateVideo = () => {
  const useInput = ({ data = '', type = '', label = '' }) => {
    const [value, setValue] = useState('');
    const input = (
      <FormInput
        value={data}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        label={label}
      />
    );
    return [value, input];
  };

  const params = useParams();

  const [videosInfo, setVideosInfo] = useState('');
  const [title, titleInput] = useInput({
    data: videosInfo.title,
    type: 'text',
    label: 'title',
  });
  const [description, descriptionInput] = useInput({
    data: videosInfo.description,
    type: 'text',
    label: 'description',
  });
  const [videoUrl, videoUrlInput] = useInput({
    data: videosInfo.video_url,
    type: 'text',
    label: 'videoUrl',
  });

  useEffect(() => {
    fetch('../data/database.json')
      .then((response) => response.json())
      .then((data) => {
        setVideosInfo(data[params.id - 1]);
      });
  }, []);

  return (
    <div>
      <form>
        {titleInput}
        {descriptionInput}
        {videoUrlInput}
      </form>
    </div>
  );
};

export default UpdateVideo;
