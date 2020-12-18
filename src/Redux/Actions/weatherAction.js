import api from '../../default-axios-instance'

export const getWeather = (latitude, longitude) => {
  return async dispatch => {
    try {
      const res = await api.get(
          `daily?days=5&lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_WEATHER_API}`
        // `daily?days=5&city=${city}&key=${process.env.REACT_APP_WEATHER_API}`
      );

      const resData = await res.data.data;

      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };