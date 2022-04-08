import React from "react";
import { useWeather } from "../hooks/useWeather";

export const ShowCase = React.memo(() => {
  const { data, loadding } = useWeather();
  return (
    <div className="showcase">
      {loadding ? (
          <p>loadding...</p>
      ) : (
          <>
          <h1>{data.name}</h1>
            <h2>{
              Math.round(data.main.temp)
            }°</h2>
          <h3>{data.weather[0].main}</h3>
        </>
      )}
    </div>
  );
});
