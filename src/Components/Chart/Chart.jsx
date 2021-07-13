import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../../Api';
import {Line,Bar} from 'react-chartjs-2';
import { StylesProvider } from '@material-ui/core';
import styles from './Chart.module.css';
const Chart = () => {

    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await fetchDailyData();
            setDailyData(data);
        })();
    },[])
    console.log(dailyData)
    const LineChart = (
            dailyData?.length?
            <Line
                data={{
                    labels:dailyData.map(({date}) => new Date(date).toLocaleDateString()),
                    datasets:[
                        {
                            data: dailyData.map(({confirmed}) => confirmed),
                            label: 'Infected',
                            borderColor:'#3333ff'
                        },
                        {
                            data: dailyData.map(({deaths}) => deaths),
                            label: 'Deaths',
                            borderColor:'red',
                            backgroundColor:'rgba(255,0,0,0.5)',
                            fill:true,
                        }
                    ],
                }}
            />
            : null
        )

    
    return (
        <div className={styles.container}>
            {LineChart}
        </div>
    )
}

export default Chart;
