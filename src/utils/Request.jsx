import axios from 'axios';
import { KeyToken } from './config';

const Request = async ({city = undefined, lon = undefined, lat = undefined}) => {
    try {
        const ApiKey = KeyToken;
        if (city !== undefined) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`);
            return response.data
        }
        else if (lon !== undefined && lat !== undefined) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`)
            return response.data
        }
    }
    catch {
        return 'Un problème est arrivé lors de la requête'
    }
}

export default Request