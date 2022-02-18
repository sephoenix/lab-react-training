import { useState } from 'react';

import img from '../assets/images/maxence.png';
import imgClicked from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [image, setImage] = useState(img);

  const handleClick = () => {
    if (image === img) {
      return setImage(imgClicked);
    } else if (image === imgClicked) {
      return setImage(img);
    }
  };

  return (
    <div onClick={handleClick}>
      <img src={image} alt="" />
    </div>
  );
}

export default ClickablePicture;
