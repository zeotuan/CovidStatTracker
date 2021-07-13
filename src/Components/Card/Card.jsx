import React from 'react';
import {Card, Typography, CardContent, Grid, StylesProvider} from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data}) => {
    if(!data){
        return <div>loadings...</div>;
    }
    const {confirmed,recovered,deaths,lastUpdate} = data;
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> infected </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={0.8}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{`${new Date(lastUpdate).toDateString()}`}</Typography>
                        <Typography variant="body2">Number of Active Cases</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> deaths </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={0.8}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{`${new Date(lastUpdate).toDateString()}`}</Typography>
                        <Typography variant="body2">Number of Death Cases</Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> recovered </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={0.8}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{`${new Date(lastUpdate).toDateString()}`}</Typography>
                        <Typography variant="body2">Number of Recovered Cases</Typography>
                        
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards;