import React, { ReactElement, useState } from "react";
import './calcolator.css'

const drawElements = (elements: string[], handleClick: any): ReactElement =>
  <section className="btns-grid">
    {elements.
      map((element: string) => <button onClick={() => handleClick(element)} 
      className={`${element==='+'||element==='-'?'operations-btn':'numbers'}`}>
        {element}
      </button>)}
  </section>



const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [equalValue, setEqualValue] = useState<string>("");

  const handleClear = () => {
    setInput("");
  };


  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setEqualValue(eval(input).toString());  // Simple calculation using eval
        setInput('')
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <main>
        <section className="cacl-contineer" >
          <input value={input} className="entered-values"/>
          <mark className="equal-value" >{equalValue}</mark>
        </section>
      {drawElements(['1', '2', '3','4', '5', '6','7', '8', '9','0', '+', '-'],handleClick)}
      <button className="equal-operation" onClick={handleCalculate}>=</button>
    </main>
 
  );
};

export default Calculator;
