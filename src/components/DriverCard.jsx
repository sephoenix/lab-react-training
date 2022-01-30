import propTypes from 'prop-types';

function DriverCard({ name, rating, img, model, licensePlate }) {
  let number = Math.round(rating);

  if (number === 0) {
    return (
      <div className='licenseCard'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>☆☆☆☆☆</h4>
        <h4>
          {model} - {licensePlate}
        </h4>
      </div>
    );
  } else if (number === 1) {
    return (
      <div className='licenseCard'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>★☆☆☆☆</h4>
        <h4>
          {model} - {licensePlate}
        </h4>
      </div>
    );
  } else if (number === 2) {
    return (
      <div className='licenseCard'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>★★☆☆☆</h4>
        <h4>
          {model} - {licensePlate}
        </h4>
      </div>
    );
  } else if (number === 3) {
    return (
      <div className='licenseCard'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>★★★☆☆</h4>
        <h4>
          {model} - {licensePlate}
        </h4>
      </div>
    );
  } else if (number === 4) {
    return (
      <div className='licenseCard'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>★★★★☆</h4>
        <h4>
          {model} - {licensePlate}
        </h4>
      </div>
    );
  } else if (number === 5) {
    return (
      <div className='licenseCard'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>★★★★★</h4>
        <h4>
          {model} - {licensePlate}
        </h4>
      </div>
    );
  }
  return (
    <div className='licenseCard'>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h4>{number}</h4>
      <h4>
        {model} - {licensePlate}
      </h4>
    </div>
  );
}

DriverCard.propTypes = {
  name: propTypes.string,
  rating: propTypes.number,
  img: propTypes.string,
  car: propTypes.object,
};

export default DriverCard;
