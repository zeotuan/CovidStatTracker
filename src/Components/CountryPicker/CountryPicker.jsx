import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountryData} from '../../Api';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        (async () => {
            const data = await fetchCountryData();
            setCountries(data);
        })()
    },[])

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>    
                    {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </NativeSelect>    
            </FormControl>        
        </div>
    )
}

export default CountryPicker;
