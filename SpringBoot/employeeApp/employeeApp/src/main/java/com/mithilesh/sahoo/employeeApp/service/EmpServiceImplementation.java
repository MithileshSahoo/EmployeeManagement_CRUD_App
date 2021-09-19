package com.mithilesh.sahoo.employeeApp.service;


import com.mithilesh.sahoo.employeeApp.entity.EmployeeInfoTable;
import com.mithilesh.sahoo.employeeApp.errorHandler.ErrorHandlerMessage;
import com.mithilesh.sahoo.employeeApp.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmpServiceImplementation implements EmpService {


    @Autowired
    EmpRepository empRepository;


    @Override
    public EmployeeInfoTable addEmpInfo(EmployeeInfoTable employeeInfoTable) {
        return empRepository.save(employeeInfoTable);
    }

    @Override
    public List<EmployeeInfoTable> getAllEmployeeInfo() {
        return empRepository.findAll();
    }

    @Override
    public EmployeeInfoTable getEmployeeInfoById(long empId) throws ErrorHandlerMessage {

        Optional<EmployeeInfoTable> infoTable = Optional.ofNullable(empRepository.findEmployeeInfoByempId(empId));

       if(infoTable.isPresent())
       {
          return empRepository.findEmployeeInfoByempId(empId);
       }else {
           throw new ErrorHandlerMessage("Entered employee Id doesn't exist. Please check in list and search again.");
       }

    }

    @Override
    public EmployeeInfoTable getEmployeeInfoByEmployeeUsername(String username) {
        return empRepository.findEmployeeInfoByUserName(username);
    }

    @Override
    public EmployeeInfoTable getEmployeeInfoByEmployeeEmailId(String email) {
        return empRepository.findEmployeeInfoByEmail(email);
    }


    @Override
    public EmployeeInfoTable updateEmpInfoByEmployeeID(long empId, EmployeeInfoTable updateEmployeeInfoTable) {
       EmployeeInfoTable employeeInfoTable = empRepository.findEmployeeInfoByempId(empId); // To store the profile data in employeeInfoTable object

        if (Objects.nonNull(updateEmployeeInfoTable) && !"".equalsIgnoreCase(updateEmployeeInfoTable.getEmail())){
            employeeInfoTable.setEmail(updateEmployeeInfoTable.getEmail());
        }

        if (Objects.nonNull(updateEmployeeInfoTable) && !"".equalsIgnoreCase(updateEmployeeInfoTable.getFirstName())){
            employeeInfoTable.setFirstName(updateEmployeeInfoTable.getFirstName());
        }

        if (Objects.nonNull(updateEmployeeInfoTable) && !"".equalsIgnoreCase(updateEmployeeInfoTable.getLastName())){
            employeeInfoTable.setLastName(updateEmployeeInfoTable.getLastName());
        }

        if (Objects.nonNull(updateEmployeeInfoTable) && !"".equalsIgnoreCase(updateEmployeeInfoTable.getUserName())){
            employeeInfoTable.setUserName(updateEmployeeInfoTable.getUserName());
        }

        employeeInfoTable.setEmpId(updateEmployeeInfoTable.getEmpId());


        return empRepository.save(employeeInfoTable);
    }

    @Override
    public String deleteEmpInfoByEmployeeID(String username) throws ErrorHandlerMessage {

        Optional<EmployeeInfoTable> employeeInfoTable = Optional.ofNullable(empRepository.findEmployeeInfoByUserName(username));

        if(!employeeInfoTable.isPresent()){
            throw new ErrorHandlerMessage("Entered employee username : " + username + " doesn't exist.");
        }
        empRepository.deleteEmployee(username);
        return "Entered employee username : \" + username + \" information deleted successfully.";
    }

}
