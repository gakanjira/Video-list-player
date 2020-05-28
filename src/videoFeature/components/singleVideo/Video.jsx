import React from 'react';
import { Link } from 'react-router-dom';

const Video = ({ title, description, id }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/video/${id}`}>Go to video</Link>
    </div>
  );
};

Video.defaultProps = {
  title: 'Tytuł filmu',
  description: 'Film o...',
  url: 'Adres url filmu',
};

export default Video;
