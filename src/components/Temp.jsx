import { useWeatherContext } from "../utils/WeatherContext";

const Temp = () => {
    const [state] = useWeatherContext();

    return (
        <>
            {state.city !== '' && <h2>Nom de la ville: {state.city}</h2>}
            {state.temp !== '' && <p>Température: {state.temp}</p>}
            {state.maxtemp !== '' && <p>Température Max: {state.maxtemp}°C</p>}
            {state.mintemp !== '' && <p>Température Min: {state.mintemp}°C</p>}
            {state.humidity !== '' && <p>Humidité: {state.humidity}%</p>}
        </>
    )
}

export default Temp