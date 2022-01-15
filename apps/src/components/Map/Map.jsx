import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';
import googleMapReact from "google-map-react";
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')

    const coordinates = {
        lat: 0, lng: 0
    }
    return (
        <div className={classes.mapContainer}>

            <GoogleMapReact bootstrapURLkeys={{ key: 'AIzaSyBOo6omG8vfrzli8t8sF0fw0HU7py3vIWM' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClikc={''}


            >

            </GoogleMapReact>
        </div>

    )
}
export default Map;