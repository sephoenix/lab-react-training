import { useEffect, useState } from 'react';

import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const diceArray = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  const [dice, setDice] = useState(dice0);

  const updateDice = diceArray[Math.floor(Math.random() * diceArray.length)];

  const handleClick = () => {
    setDice(dice0);
    setTimeout(() => {
      setDice(updateDice);
    }, 1000);
  };

  return (
    <div onClick={handleClick}>
      <img src={dice} alt="" />
    </div>
  );
}

export default Dice;