import { number } from 'prop-types';

function BoxColor({ r, g, b }) {
  const divStyle = {
    background: `rgb(${r},${g},${b})`,
  };
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
    return (
      <div>
        <div className='rgb' style={divStyle}>
          rgb({r},{g},{b})
        </div>
      </div>
    );
  } else {
    return <div className="rgb">'Select a valid RGB color'</div>;
  }
}

BoxColor.propTypes = {
  r: number,
  g: number,
  b: number,
};

/* function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
} */

export default BoxColor;
