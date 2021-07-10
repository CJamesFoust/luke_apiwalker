import React, { useContext } from "react";
import Input from "./Input";
import SearchContext from '../contexts/SearchContext';

const People = (props) => {
    const { results } = useContext(SearchContext);

    return (
        <div>
            <Input></Input>
            <div>
                <h1>{results.name}</h1> <br />
                <b>Height:</b> {results.height} <br />
                <b>Mass:</b> {results.mass} <br />
                <b>Hair Color:</b> {results.hair_color} <br />
                <b>Skin Color:</b> {results.skin_color}

            </div>
        </div>
    )
}

export default People;