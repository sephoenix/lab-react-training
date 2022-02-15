import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colors, setColors] = useState('purple');
  const colorsArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setLikes((prev) => prev + 1);
    setColors(colorsArr[Math.floor(Math.random() * colorsArr.length)]);
  };

  const style = {
    backgroundColor: colors,
  };

  return (
    <div>
      <button type="button" style={style} onClick={handleClick}>
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
