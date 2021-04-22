import React, { Suspense } from 'react';
import "./assets/index.scss"
import './App.css';
import StepForm from './Componets/StepForm/StepForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Spinner from './Componets/Spinner/Spinner';
// import FormResult from "./Componets/ResultPage/ResultPage";
const FormResult = React.lazy(() => import('./Componets/ResultPage/ResultPage'));
function App() {
  return (
    <Router>
    <div className="App">
           <Switch>
          <Route exact path="/">
          <StepForm/>
          </Route>
          <Route path="/result">
            <Suspense fallback={<Spinner/>}>
            <FormResult/>
            </Suspense>
          
          </Route>
       
        </Switch>

    </div>
    </Router>
  );
}

export default App;
