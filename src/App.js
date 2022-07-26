import "./App.css";
// npm i primereact primeicons react-transition-group
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { BrowserRouter as Router } from "react-router-dom";
import MultistepContainer from "./containers/multistep-container";

import PrimeReact from "primereact/api";
PrimeReact.ripple = true;

function App() {
  return (
    <div className='App'>
      <Router>
        <MultistepContainer />
      </Router>
    </div>
  );
}

export default App;
