import React, { useEffect, useContext, useState } from 'react';
import styles from './Input.module.css';
import axios from 'axios';
import { navigate } from '@reach/router'
import SearchContext from '../contexts/SearchContext';

const Input = (props) => {
    const { params, setParams, setResults } = useContext(SearchContext)
    const [url, setUrl] = useState("https://swapi.dev/api/people/1");
    
    useEffect(() => {
        axios.get(url)
        .then(response=>{
            setResults(response.data)
        }).catch(() => {
             navigate(`/404`);
        })
    }, [url]);
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        setUrl("https://swapi.dev/api/"+params.first+"/"+params.second);
        params.first === "people" ? navigate(`/people/${params.second}`) : navigate(`/planets/${params.second}`);
    }

    const onChange = (e) => {
        e.target.name === "select" ? setParams({
            first: e.target.value,
            second: params.second
        }) : setParams({
            first: params.first,
            second: e.target.value
        })
    }

    return (
        <div className={ styles.inputContainer }>
            <label>Search for: </label>
            <select name="select" onChange={ onChange } >
                <option value="people">People</option>
                <option value="planets">Planet</option>
            </select>
            <label>ID:</label>
            <input type="text" name="id" onChange={ onChange } value={ params.second }></input>
            <button onClick={ HandleSubmit }>Search</button>
        </div>
    )
}

export default Input;