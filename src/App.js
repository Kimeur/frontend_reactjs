import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeComponent from './components/EmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NTF_Component from './components/NTF_Component';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" component = {EmployeeComponent}></Route>
              <Route path="/ok" component = {EmployeeComponent}></Route>
              <Route path="*" component = {NTF_Component}></Route>
              <EmployeeComponent />
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
