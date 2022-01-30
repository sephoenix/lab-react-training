import propTypes from 'prop-types';

function Random({ min, max }) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="card">
      <p>
        Random value between {min} and {max} = {number}
      </p>
    </div>
  );
}

Random.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
};

export default Random;
