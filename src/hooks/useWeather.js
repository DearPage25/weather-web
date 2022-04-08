
import { useEffect, useState } from 'react'
import { weather } from '../apis/weather.api';

export const useWeather = (location = 'constanza') => {
  const [state, setState] = useState({
    data: {},
    loadding: true
  })
  useEffect(() => {
    weather().then((data) => {
      setState({
        data: data,
        loadding: false
      });
    });
  },[location])  
  
  return state
    
}

/* 
const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGif(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      });
    });
  });
  return state;
*/