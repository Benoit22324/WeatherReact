import { useWeatherContext } from "../utils/WeatherContext";
import axios from "axios";

const InputCity = () => {
    const [state, dispatch] = useWeatherContext();

    const propos = async (word) => {
        try {
            const response = await axios.get('https://api-adresse.data.gouv.fr/search/?q=' + word + '&autocomplete=1')
            const data = response.data.features
            console.log(data[0].properties.city)
        }
        catch {
            console.log('erreur de propos')
        }
    }

    const update = (e) => {
        dispatch({type: 'updateValue', payload: e.target.value})
        if (state.input.length > 2 && state.input !== '') propos(state.input)
    }

    return (
        <>
            <label>Entrez le nom d'une ville: <input type="text" style={{padding: '5px', borderRadius: '5px'}} value={state.input} onChange={update}/></label>
        </>
    )
}

export default InputCity