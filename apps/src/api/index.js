import axios from 'axios';

let URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


const getPlacesData = async (sw,ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng
        
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '588a962514mshcca96f48093be07p10cf8ejsn7b5b999c1d4e'
            }
        });
        return data;
    }
    catch (error) {

        console.log(error);
    }
}

export default getPlacesData;