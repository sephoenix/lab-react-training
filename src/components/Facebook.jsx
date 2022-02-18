import { useState } from 'react';
import profiles from './../data/berlin.json';

function Facebook() {
/*   const [profile, setProfile] = useState(profiles); */

  const newArr = [...profiles];
  console.log(newArr);

  return <div>{profiles.map((prof) => prof.firstName)}</div>;
}

export default Facebook;
