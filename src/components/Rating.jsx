import propTypes from 'prop-types';

function Rating({ children }) {
  let number = Math.round(children);

  if (number === 0) {
    return <div>☆☆☆☆☆</div>;
  } else if (number === 1) {
    return <div>★☆☆☆☆</div>;
  } else if (number === 2) {
    return <div>★★☆☆☆</div>;
  } else if (number === 3) {
    return <div>★★★☆☆</div>;
  } else if (number === 4) {
    return <div>★★★★☆</div>;
  } else if (number === 5) {
    return <div>★★★★★</div>;
  }
}

Rating.propTypes = {
  children: propTypes.oneOf([1,2,3,4,5]),
};

export default Rating;
