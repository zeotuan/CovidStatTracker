import React, {useEffect, useState} from 'react';
import {Cards,CountryPicker,Chart} from './Components';
import styles from './App.module.css';
import {fetchData} from './Api';
//import coronaImage from './image/';

function App() {
  const [data, setData] = useState();
  const [country, setCountry] = useState();

  const handleCountryChange = async (countryName) => {
    setData();
    //await fetchCountry(countryName);
    setCountry(countryName);
  }

  const fetchCountry = async () => {
    const rawData = await fetchData(country);
    setData(rawData);
  }

  useEffect(()=> {
      fetchCountry(country)
  },[country])
  return (
    <div className={styles.container}>
      <img className={styles.image} src={undefined} alt={"Covid-19"}></img>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Cards data={data}/>
      <Chart country={country} data={data} />
    </div>
  );
}

export default App;
