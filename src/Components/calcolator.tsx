import React, { ReactElement, useState } from "react";


const drawElements = (elements: string[], handleClick: any): ReactElement =>
  <section className="btns-graid"  style={{ marginTop: "10px" }}>
    {elements.
      map((elemant: string) => <button onClick={() => handleClick(elemant)}>
        {elemant}
      </button>)}
  </section>




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
    <main>
      <div >
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
      {drawElements(['1', '2', '3','4', '5', '6','7', '8', '9','0', '+', '-'],handleClick   )}



       
      <button  onClick={handleCalculate}>=</button>
    </main>
  );
};

export default Calculator;
