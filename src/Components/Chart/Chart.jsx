import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../../Api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({country,data}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        (country === 'global' || country === undefined) && (async () => {
            const data = await fetchDailyData();
            setDailyData(data);
        })();
    },[])
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

        const barChart = (
            country && data?
            <Bar
                data={{
                    labels:["Infected","Recovered","Deaths"],
                    datasets:[
                        {
                            data: [data?.confirmed.value, data?.recovered.value, data?.deaths.value],
                            label: 'People',
                            backgroundColor:[
                                'rgba(0,0,255,0.5)',
                                'rgba(0,255,0,0.5)',
                                'rgba(255,0,0,0.5)',
                            ]
                        }
                    ],
                }}
                
                options={{
                    legend:{
                        display:false
                    },
                    title:{
                        display:true,
                        text:`Current State in ${country}`
                    }
                }}
            
            />
            : null
        )
    return (
        <div className={styles.container}>
            {country && country!== 'global' ? barChart:LineChart}
        </div>
    )
}

export default Chart;
