import { useWeatherContext } from "../utils/WeatherContext";
import Suggest from "../utils/Suggest";

const InputCity = () => {
    const [state, dispatch] = useWeatherContext();

    const update = async (e) => {
        dispatch({type: 'updateValue', payload: e.target.value})
        if (state.input.trim().length > 2) {
            const response = await Suggest(state.input)
            
            if (typeof(response) !== 'string') dispatch({type: 'setSuggestion', payload: response})
            else dispatch({type: 'setError', payload: response})
        }
    }

    return (
        <>
            <label>Entrez le nom d'une ville: <input type="text" style={{padding: '5px', borderRadius: '5px'}} value={state.input} onChange={update}/></label>
        </>
    )
}

export default InputCity