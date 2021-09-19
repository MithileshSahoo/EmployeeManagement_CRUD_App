
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EmployeeListPage from './component/EmployeeListPage';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        
            <HeaderComponent/>
              

               
     
             <div className="container">
                 <Switch> localhost:3000/
                    <Route path = "/" exact component = {EmployeeListPage}></Route>
                    <Route path = "/employeeApp" component = {EmployeeListPage}></Route>
                    <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                    <Route path = "/editEmployeeInfo/:empId" exact component = {UpdateEmployeeComponent}></Route>
                  </Switch>
             </div>      
             



            <FooterComponent/>
        
      </Router>
    </div>
  );
}

export default App;
