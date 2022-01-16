import React from "react";
import { useState } from "react";
import PleaceDetail from '../../components/PleaceDetails/PleaceDetails';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from "@material-ui/core";

import useStyles from './styles';
import PleaceDetails from "../PleaceDetails/PleaceDetails";
const List = ({places}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (

        <div className={classes.container}>
            <Typography
                variant="h4">
                Restourants,Hotels&Attractions arround you

            </Typography>
            <FormControl className={classes.formControl}>

                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restautants</MenuItem>
                    <MenuItem value="restaurants">Hotels</MenuItem>
                    <MenuItem value="restaurants">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>

                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>About 4.0</MenuItem>
                    <MenuItem value={4.5}>About 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {
                    places?.map((place, index) => (
                        <Grid item key={index} xs={12}>
                    <PleaceDetails place={place}/>
                        </Grid>

                    ))
                }
            </Grid>

        </div>
    )
}
export default List;