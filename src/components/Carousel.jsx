import { useState } from 'react';

function Carousel({ images }) {
  const [image, setImage] = useState(0);

  const handleClickLeft = () => {
    setImage((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return images.length - 1;
      }
    });
  };

  const handleClickRight = () => {
    setImage((prev) => {
      if (prev < images.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <img src={images[image]} alt="" />
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
}

export default Carousel;
