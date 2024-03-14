import { useWeatherContext } from "../utils/WeatherContext";

const Temp = () => {
    const [state] = useWeatherContext();

    return (
        <>
            {
                state.status === 'set' && (
                    <div style={{border: '2px solid white', borderRadius: '5px', display: 'flex', flexDirection: 'column', width: '50%', margin: '20px'}}>
                        <h2 style={{textAlign: 'center', margin: '5px'}}>{state.city}</h2>
                        <div style={{borderTop: '1px solid white', width: '100%'}}>
                            <p style={{paddingLeft: '20px'}}>Température: {state.temp}</p>
                            <p style={{paddingLeft: '20px', color: '#FF501B'}}>Température Max: {state.maxtemp}</p>
                            <p style={{paddingLeft: '20px', color: '#6BC9FF'}}>Température Min: {state.mintemp}</p>
                            <p style={{paddingLeft: '20px', color: '#0088D7'}}>Humidité: {state.humidity}</p>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}

export default Temp