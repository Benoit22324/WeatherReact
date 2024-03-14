export const init = {
    input: '',
    city: '',
    temp: '',
    maxtemp: '',
    mintemp: '',
    humidity: '',
    error: '',
    status: '',
    suggestion: [],
    lon: 0,
    lat: 0,
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
            temp: Math.floor((action.payload.temp - 273.15) * 100) / 100 + '°C',
            maxtemp: Math.floor((action.payload.maxtemp - 273.15) * 100) / 100 + '°C',
            mintemp: Math.floor((action.payload.mintemp - 273.15) * 100) / 100 + '°C',
            humidity: action.payload.humidity + '%',
            status: 'set',
            input: '',
            suggestion: [],
            lon: 0,
            lat: 0
        }

        case 'setSuggestion': return {
            ...state,
            suggestion: action.payload
        }

        case 'useSuggestion': return {
            ...state,
            input: action.payload.city,
            lon: action.payload.lon,
            lat: action.payload.lat,
            suggestion: []
        }

        case 'setError': return {
            ...state,
            error: action.payload
        }

        default: return state
    }
}

export default WeatherReducer