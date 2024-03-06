import React from 'react'
import { IdigiProps, Idigimon } from '../../Interfaces/Interfaces'

const DigimonInfoComponent = (props: IdigiProps) => {
  return (
    <div>
      <h2>Digimon Rank: {props.digimonLevel} Digimon Name: {props.digimonName}</h2> 
        <img src={props.digimonImg} alt='agumon'/>
    </div>
  )
}

export default DigimonInfoComponent
