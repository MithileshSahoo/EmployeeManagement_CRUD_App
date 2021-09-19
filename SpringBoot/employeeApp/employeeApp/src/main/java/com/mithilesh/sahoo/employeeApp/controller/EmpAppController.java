package com.mithilesh.sahoo.employeeApp.controller;


import com.mithilesh.sahoo.employeeApp.entity.EmployeeInfoTable;
import com.mithilesh.sahoo.employeeApp.errorHandler.ErrorHandlerMessage;
import com.mithilesh.sahoo.employeeApp.service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class EmpAppController {

    @Autowired
    private EmpService empService;


    @PostMapping("/employeeApp/addEmpInfo")
    public EmployeeInfoTable addEmpInfo(@RequestBody EmployeeInfoTable employeeInfoTable){
        return empService.addEmpInfo(employeeInfoTable);
    }

    @GetMapping("/employeeApp/getAllEmployeeInfo")
    public List<EmployeeInfoTable> getAllEmployeeInfo(){
        return empService.getAllEmployeeInfo();
    }

    @GetMapping("/employeeApp/getEmployeeInfoByEmployeeId/{empId}")
    public EmployeeInfoTable getAllEmployeeInfoById(@PathVariable("empId") long empId) throws ErrorHandlerMessage {
        return empService.getEmployeeInfoById(empId);
    }

    @GetMapping("/employeeApp/getEmployeeInfoByEmployeeUsername/{userName}")
    public EmployeeInfoTable getAllEmployeeInfoByEmployeeUsername(@PathVariable("userName") String userName){
        return empService.getEmployeeInfoByEmployeeUsername(userName);
    }

    @GetMapping("/employeeApp/getEmployeeInfoByEmployeeEmailId/{email}")
    public EmployeeInfoTable getAllEmployeeInfoByEmployeeEmailId(@PathVariable("email") String email){
        return empService.getEmployeeInfoByEmployeeEmailId(email);
    }

    @PutMapping("/employeeApp/updateEmpInfoByEmployeeID/{empId}")
    public EmployeeInfoTable updateEmpInfoByEmployeeID(@PathVariable("empId") long empId, @RequestBody EmployeeInfoTable updateEmployeeInfoTable){
        return empService.updateEmpInfoByEmployeeID(empId, updateEmployeeInfoTable);
    }

    @DeleteMapping("/employeeApp/deleteEmpInfoByEmployeeID/{username}")
    public String deleteEmpInfoByEmployeeID(@PathVariable("username") String username) throws ErrorHandlerMessage {
        empService.deleteEmpInfoByEmployeeID(username);

        //message
        return "User with Employee Id : " + username + ", deleted successfully.";
    }



}
