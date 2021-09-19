import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';
import "./CreateEmployeeComponent.css"


export default class CreateEmployeeComponent extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            empId:''
        }
            
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
       
        this.saveEmployee = this.saveEmployee.bind(this);
        }

    

    saveEmployee = (e) => {
        e.preventDefault();
        let addEmployee = {firstName: this.state.firstName,
                           lastName: this.state.lastName,
                           email: this.state.email,
                           userName: this.state.userName,
                           empId: this.state.empId
                           };

        console.log('addEmployee => ' + JSON.stringify(addEmployee));

        EmployeeService.addEmployeeInfoService(addEmployee).then(res => {
             this.props.history.push('/employeeApp');
        });

    }

    cancel(){
        this.props.history.push('/employeeApp');
    }
  

    changeFirstNameHandler = (event) => {
       this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    
    changeUsernameHandler = (event) => {
        this.setState({userName: event.target.value})
    }

    changeEmployeeIdHandler = (event) => {
        this.setState({empId:event.target.value})
    }


    render() {
        return (
            <div >
                <div className = "Container">
                    <div className = "row">
                        <div className = "card">
                            <h3 className="text-center" style={{marginTop: "10px"}}>Add Employee</h3>
                              <div className="card-body">

                                  <form>
                                      <div className="form-group">
                                        <label className="form-label"> First Name : </label>
                                          <input placeholder="First Name" name="firstName" className="form-control"
                                             value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                      </div>
                                      <div className="form-group">
                                             <label className="form-label"> Last Name : </label>
                                          <input placeholder="Last Name" name="lastName" className="form-control"
                                             value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                      </div>
                                      <div className="form-group">
                                             <label className="form-label"> Email : </label>
                                          <input placeholder="Email Id" name="email" className="form-control"
                                             value={this.state.email} onChange={this.changeEmailHandler}/>
                                      </div>
                                      <div className="form-group">
                                             <label className="form-label"> Employee Id : </label>
                                          <input placeholder="Employee Id" name="employeeId" className="form-control"
                                             value={this.state.empId} onChange={this.changeEmployeeIdHandler}/>
                                      </div>
                                      <div className="form-group">
                                             <label className="form-label"> Username : </label>
                                          <input placeholder="Username" name="userName" className="form-control"
                                             value={this.state.userName} onChange={this.changeUsernameHandler}/>
                                             <div className="button">
                                             <button className="btn btn-success" onClick={this.saveEmployee}> save </button>
                                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{margin: "10px"}} > cancel </button>
                                             </div>
                                      </div>
                                  </form>
                              </div>
                        </div>    
                    </div>                  
                </div>
            </div>
        )
    }
}
