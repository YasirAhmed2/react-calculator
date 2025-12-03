import { useState } from "react";
import "./App.css";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0 as number | null | string);

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    let res = 0;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 === 0 ? 0 : num1 / num2;
        break;
      default:
        res = 0;
    }

    setResult(res);
  };

  return (
    <div style={
      { maxWidth: "400px", margin: "30px auto", textAlign: "center" }
      }>
      <h1>React Calculator</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
          alignItems: "center",
        }}
      >
        <label style={
          { fontSize: "18px", width: "120px" }
          }>Value 1:</label>
        <input
          type="number"
          value={value1}
          onChange={(e) => {
            setValue1(e.target.value)
          }
        }
          placeholder="Enter first value here "
          style={{
            width: "60%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
          alignItems: "center",
        }}
      >
        <label style={
          { fontSize: "18px", width: "120px" }
          }>Value 2:</label>
        <input
          type="number"
          value={value2}
          onChange={(e) =>{
            setValue2(e.target.value)
          }} 
          placeholder="Enter second value here "
          style={{
            width: "60%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
      </div>

      <div style={
        { marginBottom: "20px", textAlign: "left" }
        }><label>Operator:</label>
        <select
          value={operator}
          onChange={(e) =>{
             setOperator(e.target.value)
            }}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <button
        onClick={calculate}
        style={{
          width: "100%",
          padding: "12px",
          background: "#065703ff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Calculate
      </button>


      <h2>Result: {result !== null ? result : ""}</h2>
    </div>
  );
}

export default App;
