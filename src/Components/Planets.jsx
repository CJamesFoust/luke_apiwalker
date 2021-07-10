import React, { useContext } from "react";
import Input from "./Input";
import SearchContext from '../contexts/SearchContext';

const Planets = (props) => {
    const { results } = useContext(SearchContext);


    return (
        <div>
            <Input></Input>
            <div>
                {console.log(results)}
                <h1>{results.name}</h1> <br />
                <b>Climate:</b> {results.climate} <br />
                <b>Terrain:</b> {results.terrain} <br />
                <b>Surface Water:</b> {results.surface_water} <br />
                <b>Population:</b> {results.population}
            </div>
        </div>
    )
}

export default Planets;