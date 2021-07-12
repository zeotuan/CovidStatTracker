import React, {useEffect, useState} from 'react';
import {Cards,CountryPicker,Chart} from './Components';
import styles from './App.module.css';
import {fetchData} from './Api';

function App() {
  const [data, setData] = useState({});
  useEffect(()=> {
    (async () => {
      const rawData = await fetchData();
      setData(rawData);
    })();
    console.log(data);
  },[])
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
