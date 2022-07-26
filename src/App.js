import "./App.css";
// npm i primereact primeicons react-transition-group
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import PrimeReact from "primereact/api";

import { Button } from "primereact/button";
import Stepper from "./containers/stepper";

PrimeReact.ripple = true;

function App() {
  return (
    <div className='App'>
      <h1>Primereact Steps</h1>
      <Button>Click for Ripple</Button>
      <Stepper />
    </div>
  );
}

export default App;
