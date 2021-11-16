import React, {Component} from 'react'
import './Pokecard.css'

class Pokecard extends Component {
  render(){
    const imgSource=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h2>{this.props.name}</h2>
        <img className="Pokecard-img" src={imgSource} />
        <p className="Pokecard-text">Tipe: {this.props.type}</p>
        <p className="Pokecard-text">EXP: {this.props.base_experience}</p>
      </div>
    )
  }
}

export default Pokecard