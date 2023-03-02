import React from "react";
import { Link } from "react-router-dom";
import './Pokemon.css'

function Pokemon(props){
    const {name, sprite, id} = props
    

    return(
        <div className="main">
            <Link to={`/details/${id}`}>
                <img src={sprite} alt="..."/>
                <h2>{name}</h2>
            </Link>
        </div>
        
    )
}

export default Pokemon