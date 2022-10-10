import Calculator from "./Calculator.jsx";
import "./styles.css";

export default function App() {

  return (<>
      <div className="calculator-title">
        <h1>Calculator</h1>
        <p>Built by Milos Savic</p>
      </div>
      
      <Calculator />

      <div className="social">
        <a href="https://www.linkedin.com/in/milos-savic-86690a211/" target="_blank"><img src="LI-In-Bug.png" width="32px" alt="github-logo"/></a>
        <a href="https://github.com/msavic248/react-calculator" target="_blank"><img src="./GitHub-Mark-Light-32px.png" width="32px" alt="github-logo"/></a>
      </div>
      
    </>
  )
}