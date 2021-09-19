import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';
import "./CreateEmployeeComponent.css"

export default class UpdateEmployeeComponent extends Component {

    
    constructor(props){
        super(props);

        this.state = {
            empId: this.props.match.params.empId,
            firstName: '',
            lastName: '',
            email: '',
            userName: ''
           
        }
            
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
       
        this.updateEmployee = this.updateEmployee.bind(this);


        }
        
        componentDidMount(){
            EmployeeService.editEmployeeByEmpId(this.state.empId).then((res) => {
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                               lastName: employee.lastName,
                               email: employee.email,
                               userName: employee.userName
                });
            });
        }
    

        updateEmployee = (e) => {
        e.preventDefault();
        let editEmployee = {firstName: this.state.firstName,
                           lastName: this.state.lastName,
                           email: this.state.email,
                           userName: this.state.userName,
                           empId: this.state.empId
                           };

        console.log('editEmployee => ' + JSON.stringify(editEmployee));

        EmployeeService.updateEmployeeInfo(this.state.empId, editEmployee).then(res => { 
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
                            <h3 className="text-center" style={{marginTop: "10px"}}>Update Employee</h3>
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
                                             <button className="btn btn-success" onClick={this.updateEmployee}> Update </button>
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
