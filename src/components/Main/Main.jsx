import React, {useContext} from 'react';
import {Card, CardHeader,CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';
import { useSpeechSynthesis } from "react-speech-kit";

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    const { speak } = useSpeechSynthesis();

    return (
    <Card className={classes.root}>
        <CardHeader title='Expense Tracker' subheader='Powered by Maxon' />
        <CardContent>
            <Typography align='center' variant='h5' className='speak-trigger' onClick={(event) => speak({ text: event.target.textContent })}>Total Balance: ${balance}</Typography>
            <Typography style={{lineHeight:'1.5em', marginTop:'20px'}} variant='subtitle1'>
                <InfoCard />
            </Typography>
           
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default Main;
