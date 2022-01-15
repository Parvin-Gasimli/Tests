import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'
const options = {

    params: {
        latitude: '12.91285',
        longitude: '100.87808',

        lang: 'en_US'
    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '588a962514mshcca96f48093be07p10cf8ejsn7b5b999c1d4e'
    }
};




const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;
    }
    catch (error) {

        console.log(error);
    }
}

export default getPlacesData;