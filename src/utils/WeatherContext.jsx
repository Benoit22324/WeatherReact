import { createContext, useContext, useReducer } from "react";
import WeatherReducer from "../reducer/WeatherReducer";
import init from '../reducer/WeatherReducer'

const WeatherContext = createContext();

export const useWeatherContext = () => {
    return useContext(WeatherContext);
}

const WeatherContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(WeatherReducer, init)

    return <WeatherContext.Provider value={[state, dispatch]}>
        {children}
    </WeatherContext.Provider>
}

export default WeatherContextProvider