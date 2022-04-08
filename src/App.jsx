import React from "react";
import { Clock } from "./components/Clock";
import { NavBar } from "./components/NavBar";
import { ShowCase } from "./components/ShowCase";

export const App = () => {
  return (  
      <div className="mainheader">
        <NavBar />
        <ShowCase />
        <Clock />
      </div>
  );
};
