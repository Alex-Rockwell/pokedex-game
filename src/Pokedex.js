import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
  render(){
    const heading1 = this.props.win 
      ? <h2 className="Pokedex-header-1 Pokedex-win">Winning hand</h2>
      : <h2 className="Pokedex-header-1 Pokedex-loose"> Loosing hand</h2>
      
    const hand = this.props.hand
    const dispCards = hand.map((c) => {
      return <Pokecard id={c.id} name={c.name} type={c.type} exp={c.base_experience}/>
    })

    return (
      <div className="Pokedex">
        {heading1}
        <h2 className="Pokedex-header-2">Total expience: {this.props.exp}</h2>
        {dispCards}
      </div>
    )
  }
}

export default Pokedex