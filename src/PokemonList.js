import React from "react"
import Pokemon from "./Pokemon"
import { useState } from "react"
import data from './data'
import './PokemonList.css'

function PokemonList(){
    const [query, setQuery] = useState('')
    const pokemon = data.filter((obj) => obj.name.includes(query)).map((obj) => {
        return(
            <Pokemon
            key={obj.id}
            name={obj.name}
            sprite={obj.sprites.front_default}
            id={obj.id}
            />
        )
    })

    return(
        <div className="App">
            <form className="search">
                <input type="text" value={query} placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
            </form>

            <div className="pokemons">
                {pokemon}
                </div>
        </div>
    )
}

export default PokemonList
