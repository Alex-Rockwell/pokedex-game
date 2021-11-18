import React, { Component } from "react";
import Pokedex from "./Pokedex";

function totalExp(hand) {
  let exp = 0
  hand.forEach(el => {
    exp += el.base_experience
  })
  return exp
}

class Pokegame extends Component {
  render() {
    const cards = [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]

    const hand1 = []
    for (let i=0; i<4; i++) {
      let random = Math.floor(Math.random()*cards.length)
      let removed = cards.splice(random, 1)
      hand1.push(removed[0])
    }
    const hand2 = cards

    const hand1exp = totalExp(hand1)
    const hand2exp = totalExp(hand2)

    return (
      <div>
        <Pokedex
          num='1'
          hand={hand1} 
          exp={hand1exp}  
          win={hand1exp > hand2exp ? true : false}
        />
        <Pokedex 
          num='2'
          hand={hand2} 
          exp={hand2exp}
          win={hand1exp < hand2exp ? true : false}
        />
      </div>
    )
  }
}

export default Pokegame