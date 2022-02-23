function Facebook(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <p>Name:{props.firstName}</p>
      <p>Lastname:{props.country}</p>
    </div>
  );
}

export default Facebook;
