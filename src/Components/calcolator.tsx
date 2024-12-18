import React, { ReactElement, useState } from "react";

const drawElements = (elements: string[], handleClick: any): ReactElement[] => elements.
  map((elemant: string) => <button onClick={() => handleClick(elemant)}>
    {elemant}
  </button>)
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
      <div>
        <input
          type="text"
          value={input}
          style={{
            width: "200px",
            height: "30px",
            textAlign: "right",
            fontSize: "20px",
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {drawElements(['1', '2', '3'], handleClick)}
      </div>
      <div style={{ marginTop: "10px" }}>
      {drawElements(['4', '5', '6'], handleClick)}

      </div>
      <div style={{ marginTop: "10px" }}>
      {drawElements(['7', '8', '9'], handleClick)}
      </div>
      <div style={{ marginTop: "10px" }}>
      {drawElements(['0', '+','-'], handleClick)}

    
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
