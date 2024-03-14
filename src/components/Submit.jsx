import { useWeatherContext } from "../utils/WeatherContext";
import Request from "../utils/Request";

const Submit = () => {
    const [state, dispatch] = useWeatherContext();

    const search = async () => {
        if (state.input !== '') {
            let response = undefined;
            if (state.input.trim().includes(' ')) {
                response = await Request({lon: state.lon, lat: state.lat});
            }
            else {
                response = await Request({city: state.input});
            }

            typeof(response) !== 'string' ?
                dispatch({type: 'setWeather', payload: {
                    city: response.name,
                    temp: response.main.temp,
                    mintemp: response.main.temp_min,
                    maxtemp: response.main.temp_max,
                    humidity: response.main.humidity,
                }})
            :
                dispatch({type: 'setError', payload: response})
        }
    }

    return (
        <>
            <button onClick={search} style={{backgroundColor: '#24A8FF', marginLeft: '5px', padding: '5px'}}>Rechercher</button>
        </>
    )
}

export default Submit