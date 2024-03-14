import { useWeatherContext } from "../utils/WeatherContext";
import Request from "../utils/Request";

const Submit = () => {
    const [state, dispatch] = useWeatherContext();

    const search = async () => {
        if (state.input !== '') {
            const response = await Request(state.input);
            if (typeof(response) !== 'string') {
                dispatch({type: 'setWeather', payload: {
                    city: response.name,
                    temp: response.main.temp,
                    mintemp: response.main.temp_min,
                    maxtemp: response.main.temp_max,
                    humidity: response.main.humidity,
                }})
            }
            else {
                dispatch({type: 'setError', payload: response})
            }
        }
    }

    return (
        <>
            <button onClick={search}>Rechercher</button>
        </>
    )
}

export default Submit