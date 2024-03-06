import React, { useEffect, useState } from 'react'
import { getDigimon } from '../../DataServices/DataServices';
import { Idigimon } from '../../Interfaces/Interfaces';
import DigimonInfoComponent from './DigimonInfoComponent';

const HomePageComponent = () => {
  // another way to solve problem below
  const digiDefault: Idigimon = {
    level: "",
    img: "",
    name: ""
  }
  const [digimon, setDigimon] = useState<Idigimon>(digiDefault);
  // const [digimon, setDigimon] = useState<Idigimon>();

    useEffect(() => {
      const getData = async () => {
        const digiData = await getDigimon();
        console.log(digiData);
        setDigimon(digiData);
      };

      getData();
    }, [])

  return (
    <div>
      <h1>This is Our Home Page</h1>
      {/* upon first render, digimon is undefined */}
      {/* can solve by: 1. make nullable ? 2. && conditional rendering pattern with logical AND operator 3. create empty object to assign*/}
      {/* <h2>Digimon Name: {digimon?.name}</h2>
      <h2>Digimon Level: {digimon && digimon.level}</h2>
      <h2>Digimon Level: {digimon ? digimon.name : "still loading.."}</h2> */}
    
      <DigimonInfoComponent digimonName={digimon.name} digimonImg={digimon.img} digimonLevel={digimon.level}/>
    </div>
  )
}

export default HomePageComponent
