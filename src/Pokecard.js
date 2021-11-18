import React, {Component} from 'react'
import './Pokecard.css'

function zeros(num) {
  const arr = num.toString().split('')
  if (arr.length === 1) {
    arr.unshift('00')
  } else if (arr.length === 2) {
    arr.unshift('0')
  }
  const str = arr.join('')
  return str
}

class Pokecard extends Component {
  render(){
    const imgSource=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros(this.props.id)}.png`

    return (
      <div className="Pokecard">
        <div className="Pokecard-img-cont">
          <img className="Pokecard-img" src={imgSource}  alt="pokemon"/>
        </div>
        <h2  className="Pokecard-name">{this.props.name}</h2>
        <p className="Pokecard-text">Tipe: {this.props.type}</p>
        <p className="Pokecard-text">EXP: {this.props.base_experience}</p>
      </div>
    )
  }
}

export default Pokecard