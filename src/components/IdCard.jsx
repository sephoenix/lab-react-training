import propTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card">
      <img src={picture} alt="" />
      <div className="profile">
        <h4>First name:{firstName}</h4>
        <h4>Last name: {lastName}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Height: {height}</h4>
        <h4>Birth: {birth}</h4>
      </div>
    </div>
  );
}

IdCard.propTypes = {
  firstName: propTypes.string,
  lastName: propTypes.string,
  gender: propTypes.oneOf(['male', 'female']),
  height: propTypes.number,
  birth: propTypes.instanceOf(Date),
  picture: propTypes.string,
};
export default IdCard;
