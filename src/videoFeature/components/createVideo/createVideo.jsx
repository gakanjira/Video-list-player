import React, { useState } from 'react';
import FormInput from '../../../formInput';

const CreateVideo = () => {
  const useInput = ({ type, label }) => {
    const [value, setValue] = useState('');
    const input = (
      <FormInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        label={label}
      />
    );
    return [value, input];
  };

  const [title, titleInput] = useInput({ type: 'text', label: 'title' });
  const [description, descriptionInput] = useInput({
    type: 'text',
    label: 'description',
  });
  const [videoUrl, videoUrlInput] = useInput({
    type: 'text',
    label: 'videoUrl',
  });

  return (
    <div>
      <form>
        {titleInput} {title}
        {descriptionInput} {description}
        {videoUrlInput} {videoUrl}
      </form>
    </div>
  );
};

export default CreateVideo;
