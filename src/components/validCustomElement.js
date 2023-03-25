import "../App.css";
import React, { useState } from "react";
import EnterField from "./customElement";


export function ValidInput() {
  const [isNumber, setNumber] = useState('');

  const onlyNumber = (value) => {
    value = value.replace(/[^\d]/g,'') ? setNumber(true) : setNumber(false);
  }

  const [isNumberTwo, setNumberTwo] = useState('');

  const onlyNumberTwo = (value) => {
    value = value.replace(/[^\d]/g,'') ? setNumberTwo(true) : setNumberTwo(false);
  }

  return (
    <>
          <div className="inputs">
          <EnterField
            text=""
            placeholder={"Enter the number"}
            onChange={onlyNumber}
            isNotValid={!isNumber}
          />
          <EnterField
            text=""
            placeholder={"Enter the number"}
            onChange={onlyNumberTwo}
            isNotValid={!isNumberTwo}
          />
          </div>
    </>
  );
}
