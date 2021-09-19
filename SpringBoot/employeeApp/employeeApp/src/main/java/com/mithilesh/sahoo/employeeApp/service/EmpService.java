package com.mithilesh.sahoo.employeeApp.service;

import com.mithilesh.sahoo.employeeApp.entity.EmployeeInfoTable;
import com.mithilesh.sahoo.employeeApp.errorHandler.ErrorHandlerMessage;

import java.util.List;

public interface EmpService {


    EmployeeInfoTable addEmpInfo(EmployeeInfoTable employeeInfoTable);

    List<EmployeeInfoTable> getAllEmployeeInfo();

    EmployeeInfoTable getEmployeeInfoById(long empId) throws ErrorHandlerMessage;

    EmployeeInfoTable getEmployeeInfoByEmployeeUsername(String userName);

    EmployeeInfoTable getEmployeeInfoByEmployeeEmailId(String email);

    EmployeeInfoTable updateEmpInfoByEmployeeID(long empId, EmployeeInfoTable updateEmployeeInfoTable);

    String deleteEmpInfoByEmployeeID(String username) throws ErrorHandlerMessage;
}
