import { useRef } from 'react';
import { Avatar } from '@mui/material';
import withCanvas from './withCanvas';

function AvatarPicker({ src, disabled, onChange, canvas }) {
  const inputRef = useRef(null);
  const onClick = () => {
    if (!disabled) {
      inputRef.current.click();
    }
  };

  const onPick = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onloadend = async () => {
        console.log(reader.result)
        let data = await canvas.resize(reader.result, 320);
        onChange(data);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <>
      <Avatar
        style={{ cursor: disabled ? 'default' : 'pointer' }}
        src={src}
        sx={{
          height: 100,
          width: 100
        }}
        onClick={onClick}
      />
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/jpeg"
        onChange={onPick}
      />
    </>
  );
}

export default withCanvas(AvatarPicker);
