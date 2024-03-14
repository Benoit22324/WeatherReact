import InputCity from "./InputCity"
import Submit from "./Submit"
import { useWeatherContext } from "../utils/WeatherContext"

const Form = () => {
    const [state] = useWeatherContext();

    return (
        <>
            {
                state.error !== '' && <p style={{marginLeft: '20px', color: 'red'}}>{state.error}</p>
            }
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                <InputCity />
                <Submit />
            </div>
        </>
    )
}

export default Form