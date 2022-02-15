import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

const cardArray = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const creditCardArray = [
  {
    type: 'Visa',
    number: '0123456789018845',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'BNP',
    owner: 'Maxence Bouret',
    bgColor: '#11aa99',
    color: 'white',
  },
  {
    type: 'Master Card',
    number: '0123456789010995',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'N26',
    owner: 'Maxence Bouret',
    bgColor: '#eeeeee',
    color: '#222222',
  },
  {
    type: 'Visa',
    number: '0123456789016984',
    expirationMonth: 12,
    expirationYear: 2019,
    bank: 'Name of the Bank',
    owner: 'Firstname Lastname',
    bgColor: '#ddbb55',
    color: 'white',
  },
];

const driverCardArray = [
  {
    name: 'Travis Kalanick',
    rating: 4.2,
    img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
    car: {
      model: 'Toyota Corolla Altis',
      licensePlate: 'CO42DE',
    },
  },
  {
    name: 'Dara Khosrowshahi',
    rating: 4.9,
    img: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
    car: {
      model: 'Audi A3',
      licensePlate: 'BE33ER',
    },
  },
];

function App() {
  return (
    <div className="App">
      {cardArray.map((card, i) => {
        return (
          <IdCard
            key={i}
            lastName={card.lastName}
            firstName={card.firstName}
            gender={card.gender}
            height={card.height}
            birth={card.birth}
            picture={card.picture}
          />
        );
      })}

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Paco</Greetings>
      <Greetings lang="en">John</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={128} g={535} b={210} />

      {creditCardArray.map((card, i) => {
        return (
          <CreditCard
            key={i}
            type={card.type}
            number={card.number}
            expirationMonth={card.expirationMonth}
            expirationYear={card.expirationYear}
            bank={card.bank}
            owner={card.owner}
            bgColor={card.bgColor}
            color={card.color}
          />
        );
      })}

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {driverCardArray.map((card, i) => {
        return (
          <DriverCard
            key={i}
            name={card.name}
            rating={card.rating}
            img={card.img}
            model={card.car.model}
            licensePlate={card.car.licensePlate}
          />
        );
      })}
      <LikeButton />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
