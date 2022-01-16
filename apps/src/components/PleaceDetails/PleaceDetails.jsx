import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardActions, Chip, CardContent } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Rating } from "@material-ui/lab";
import usetStyles from './styles';
const PleaceDetails = ({ place }) => {

    const classes = usetStyles();
    console.log(place);
    return (
        <Card elevation={6}>
            <CardMedia style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            >
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price </Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                    <Typography variant="subtitle1">Ranking </Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignContent="center" >
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary" >
                        {award.display_name}
                        </Typography>
                    </Box>
                ))}

            </CardContent>
        </Card>
    )
}
export default PleaceDetails;