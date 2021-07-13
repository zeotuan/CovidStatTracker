import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let apiToFetch = url;
    apiToFetch = country && country !== 'global'? `${url}/countries/${country}`: url;
    try {
        const {data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(apiToFetch);
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;
    } catch (error) {
        console.log(error);
    }

}

export const fetchDailyData = async (country) => {
    try {

        const {data} = await axios.get(`${url}/daily`)
        
        const modifiedData = data.map( record =>  ({
            confirmed: record.confirmed.total,
            deaths: record.deaths.total,
            date: record.reportDate
        }))
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountryData = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries/`);
        return countries.map(country => country.name);
    } catch (error) {
        console.log(error);
    }
}
