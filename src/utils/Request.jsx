import axios from 'axios';

const Request = async (city) => {
    try {
        const ApiKey = '3fd58321a4c187a7b56e5d953747d3d7';
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + ApiKey);
        return response.data
    }
    catch {
        return 'Un problème est arrivé lors de la requête'
    }
}

export default Request