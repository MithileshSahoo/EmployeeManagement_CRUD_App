import React, { Component } from 'react'
import "./header.css"

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div class="container-fluid">
                         <a class="navbar-brand" href="http://localhost:3000/employeeApp">Employee Management App</a>
                           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                           </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://localhost:3000/employeeApp/Home">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000/employeeApp/Link">Link</a>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Manage
                            </a>
                                   <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <li><a class="dropdown-item" href="http://localhost:3000/employeeApp/AddEmployee">Add Employee Details</a></li>
                                     <li><a class="dropdown-item" href="">Another action</a></li>
                                     <li><hr class="dropdown-divider"></hr></li>
                                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                                   
                                   </ul>                  
                           </li>
                             <li class="nav-item">
                               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                             </li>
                         </ul>
                           <form class="d-flex">
                              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                              <button class="btn btn-outline-success" type="submit">Search</button>
                           </form>  
                       </div>
                      </div>
                    </nav>
                </header>
                
            </div>
        )
    }
}
