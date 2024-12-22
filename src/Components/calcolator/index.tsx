import React, { ReactElement, useState } from "react";
import './calcolator.css'

const drawElements = (elements: string[], handleClick: any): ReactElement =>
  <section className="btns-grid">
    {elements.
      map((element: string) => <button onClick={() => handleClick(element)}
        className={`${element === '+' || element === '-' ? 'operations-btn' : 'numbers'}`}>
        {element}
      </button>)}
  </section>



const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [equalValue, setEqualValue] = useState<string>("0");
  const [haveErrorFormat, setHaveErrorFormat] = useState<boolean>(false);





  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setEqualValue(eval(input).toString());  // Simple calculation using eval
      setInput('')
    } catch (error) {
      setInput('')
      setHaveErrorFormat(true)
      setEqualValue('0')


    }
  };

  return (
    <main>
      <section className="cacl-contineer" >
        <input autoFocus value={input} className="entered-values" placeholder={`${haveErrorFormat ? ' Try Agian! ' : 'Start Calcolating!'}`} />
        <mark className="equal-value" >{equalValue}</mark>
      </section>
      {drawElements(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-'], handleClick)}
      <button className="equal-operation" onClick={handleCalculate}>=</button>
    </main>

  );
};

export default Calculator;
