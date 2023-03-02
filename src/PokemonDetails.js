import React from "react";
import data from './data.json'
import { useParams } from 'react-router'
import './PokemonDetails.css'


function PokemonDetails(props){
    const params = useParams()
    const {id} = params
    const pokemon = data[id]
    const moves = pokemon.moves.map((obj) => {
        return(
            <li key={obj.move.name}>{obj.move.name}</li>
        )
    })
    const abilities = pokemon.abilities.map((obj) => {
        return(
            <li key={obj.ability.name}>{obj.ability.name}</li>
        )
    })
    return(
        <div className="pokemon">
            <div className="grid">
                <img className="image" src={pokemon.sprites.front_default} alt="..."/>
                <h1>{pokemon.name}</h1>
                
                <h3 className="abilities-label">Abilities</h3>
                <ul className="abilities">
                    {abilities}
                </ul>

                <h3 className="moves-label">Moves</h3>
                <ul className="moves">
                    {moves}
                </ul>
            </div>
            

        </div>
    )
}

export default PokemonDetails