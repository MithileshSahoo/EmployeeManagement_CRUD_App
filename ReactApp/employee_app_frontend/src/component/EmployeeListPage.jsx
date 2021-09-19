import React, { Component } from 'react'
import './EmployeeList.css';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import EmployeeService from '../Service/EmployeeService';

export default class EmployeeListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getAllEmployees().then((response) => {
                     this.setState({employees: response.data});
                     console.log(response);
        });
    }  
     

    
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    editEmployee(empId){
        this.props.history.push(`/editEmployeeInfo/${empId}`);
    }

    deleteEmployee(userName){
        
        var con = window.confirm("Are you sure to delete ?");

        if (con) {
            EmployeeService.deleteEmployeeInfo(userName).then(response => {
                this.setState({employees: this.state.employees.filter(employee => employee.userName !== userName)});
            });
 
                console.log("entered delete employee method");
        } else {
            this.props.history.push('/employeeApp');
        }
        
       
        
    }

    // deleteEmployee(){
    //     this.props.history.push('/')
    // }

    refreshList(){
    window.location.reload();
    } 
      
    

    render() {
        return (
            <div>
                <h2 className="EmployeeList" style={{marginTop: "10px"}}>Employee List <PeopleAltSharpIcon style={{width: "35px", height: "30px", marginTop: "-1px"}}/> </h2>
                
                <button type="button" class="btn btn-primary" onClick={this.addEmployee}><i class="bi bi-person-plus-fill"></i>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                     </svg>
                </button>
                <button type="button" class="btn btn-warning" onClick={this.refreshList} style={{margin: "10px"}}>

                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                         <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                     </svg>
                </button>
            
                    
                <div className="row">
                    <table className="table table-hover table-striped table-condensed">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Actions</th>
                            </tr>
                    
                        </thead>

                        <tbody>
                           {
                               this.state.employees.map(
                                   employee => 
                                       <tr key={employee.Id}>
                                           <td>{employee.empId}</td>
                                           <td>{employee.userName}</td>
                                           <td>{employee.email}</td>
                                           <td>{employee.firstName}</td>
                                           <td>{employee.lastName}</td>
                                           <td>
                                           <div className= "Button-list">
                                           <ul class="list-inline m-0">
                                                <li class="list-inline-item">
                                                <div className= "Button-list-shape">
                                                    <button style={{border: "None", color: "#cc00ff", size}} type="button" data-toggle="tooltip" data-placement="top" title="Edit"
                                                     
                                                    
                                                    onClick = { () => 
                                                         this.editEmployee(employee.empId)
                                                    }
                                                    
                                                    >
                                                    <i class="bi bi-pencil-square"></i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                           <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                               <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                            </svg>
                                                    </button>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-danger btn-sm rounded-10" type="button" data-toggle="tooltip" data-placement="top" title="Delete"
                                                   
                                                    
                                                    onClick = { () =>
                                                    
                                                    this.deleteEmployee(employee.userName)
                                                    }
                                                    >
                                                    
                                                    <i class="bi bi-x-octagon-fill"></i>
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                                                          <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                                                       </svg>
                                                    </button>
                                                </li>                              
                                            </ul>   
                                            </div>
                                               </td> 
                                        </tr>                                          
                                )                          
                            }                       
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
