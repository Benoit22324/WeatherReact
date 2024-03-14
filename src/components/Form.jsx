import InputCity from "./InputCity"
import Submit from "./Submit"
import { useWeatherContext } from "../utils/WeatherContext"

const Form = () => {
    const [state, dispatch] = useWeatherContext();
    
    return (
        <>
            {
                state.error !== '' && <p style={{marginLeft: '20px', color: 'red'}}>{state.error}</p>
            }
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                <InputCity />
                <Submit />
                <ul>
                    {
                        state.suggestion.length !== 0 ? state.suggestion.map((suggest, i) => 
                            <li onClick={() => dispatch({type: 'useSuggestion', payload: {city: suggest.properties.city, lon: suggest.geometry.coordinates[0], lat: suggest.geometry.coordinates[1]}})} key={i}>{suggest.properties.city}</li>
                        )
                        :
                        <p>Aucune proposition</p>
                    }
                </ul>
            </div>
        </>
    )
}

export default Form