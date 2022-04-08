import { useEffect, useState } from "react";


export const Clock = () => {

  const [state, setState] = useState(new Date())

  useEffect(() => {
    setInterval(() => setState(new Date()),
      1000
    );
  }, []);
  
  return (
    <footer><p>{state.toLocaleTimeString()}</p></footer>
  );
};
