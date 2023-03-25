import React, { useState, useContext } from "react";
import { Provider } from "./provider";

const EnterField = (props) => {
  
    const [value, setValue] = useState(props.text);
  
    const setEvent = (event) => {
      setValue(event.target.value);
      props.onChange(event.target.value);
    };

    const changeColor = useContext(Provider);
  
    return (
      <>
        <input className={changeColor.color === "light" ? "dark" : "light"}
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={setEvent}
        />
        {props.isNotValid && <p className="attention">Enter numbers only!</p>}
      </>
    );
  };

export default EnterField;