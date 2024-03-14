import { useWeatherContext } from "../utils/WeatherContext";

const InputCity = () => {
    const [state, dispatch] = useWeatherContext();

    return (
        <>
            <label>Entrez le nom d'une ville: <input type="text" style={{padding: '5px', borderRadius: '5px'}} value={state.input} onChange={(e) => dispatch({type: 'updateValue', payload: e.target.value})}/></label>
        </>
    )
}

export default InputCity