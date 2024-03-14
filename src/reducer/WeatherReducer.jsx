export const init = {
    input: '',
    city: '',
    temp: '',
    maxtemp: '',
    mintemp: '',
    humidity: '',
    error: '',
}

const WeatherReducer = (state, action) => {
    switch(action.type) {
        case 'updateValue': return {
            ...state,
            input: action.payload,
            error: ''
        }

        case 'setWeather': return {
            ...state,
            city: action.payload.city,
            temp: Math.floor((action.payload.temp - 273.15) * 100) / 100,
            maxtemp: Math.floor((action.payload.maxtemp - 273.15) * 100) / 100,
            mintemp: Math.floor((action.payload.mintemp - 273.15) * 100) / 100,
            humidity: action.payload.humidity,
        }

        case 'setError': return {
            ...state,
            error: action.payload
        }

        default: return state
    }
}

export default WeatherReducer