import React, { useContext } from "react";
import { ValidInput } from "./validCustomElement";
import { Provider } from "./provider";
import "../index.css";

export const MainSection = () => {
  const changeColor = useContext(Provider);

  return (
    <main className={changeColor.color === "light" ? "light" : "dark"} id="main">
      <div id="indicator" >
        <div className={changeColor.color === "light" ? "status" : "status--primary"}>
            <p>{changeColor.color === "light" ? "day" : "night"}</p>
        </div>
      </div>
      <ValidInput />
    </main>
  );
};
