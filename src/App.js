import "./assets/index.scss"
import './App.css';
import StepForm from './Componets/StepForm/StepForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormResult from "./Componets/FormResult/FormResult";
function App() {
  return (
    <Router>
    <div className="App">
           <Switch>
          <Route exact path="/">
          <StepForm/>
          </Route>
          <Route path="/result">
            <FormResult/>
          </Route>
       
        </Switch>

    </div>
    </Router>
  );
}

export default App;
