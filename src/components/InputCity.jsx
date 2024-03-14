import { useWeatherContext } from "../utils/WeatherContext";

const InputCity = () => {
    const [state, dispatch] = useWeatherContext();

    return (
        <>
            {
                state.error !== '' && <p>{state.error}</p>
            }
            <label>Entrez le nom d'une ville: <input type="text" value={state.input} onChange={(e) => dispatch({type: 'updateValue', payload: e.target.value})}/></label>
        </>
    )
}

export default InputCity