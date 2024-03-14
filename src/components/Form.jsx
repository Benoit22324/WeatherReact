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
                {
                    state.suggestion !== '' && <p onClick={() => dispatch({type: 'useSuggestion'})} style={{cursor: 'pointer', marginLeft: '15px'}}>{state.suggestion}</p>
                }
            </div>
        </>
    )
}

export default Form