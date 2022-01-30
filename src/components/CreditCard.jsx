import propTypes from 'prop-types';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const divStyle = {
    background: `${bgColor}`,
    color: `${color}`,
  };

    let newNumber = number.split("");
    for (let i=0; i<newNumber.length; i++){
      if(i <= newNumber.length-5) {
        newNumber[i]= "*";
      }
  }

  return (
    <div className="card">
      <div style={divStyle}>
        <h4>{type}</h4>
        <h4>{newNumber}</h4>
        <h4>
          Expires {expirationMonth}/{expirationYear} {bank}
        </h4>
        <h4>{owner}</h4>
      </div>
    </div>
  );
}

CreditCard.propTypes = {
  type: propTypes.oneOf(['Visa', 'Master Card']),
  number: propTypes.string,
  expirationMonth: propTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  expirationYear: propTypes.number,
  bank: propTypes.string,
  owner: propTypes.string,
  bgColor: propTypes.string,
  color: propTypes.string,
};

export default CreditCard;
