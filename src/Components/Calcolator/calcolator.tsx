import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");


  const handleClear = () => {
    setInput("");
  };
  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());  // Simple calculation using eval
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "200px",
            height: "30px",
            textAlign: "right",
            fontSize: "20px",
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
