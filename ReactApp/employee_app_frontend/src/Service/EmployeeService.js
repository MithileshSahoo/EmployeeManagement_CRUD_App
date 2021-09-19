import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:9090/employeeApp/getAllEmployeeInfo'
const EMPLOYEE_API_POST_URL = 'http://localhost:9090/employeeApp/addEmpInfo'
const EMPLOYEE_API_GET_EMPINFO_BY_EMPID = 'http://localhost:9090/employeeApp/getEmployeeInfoByEmployeeId' 
const EMPLOYEE_API_UPDATE_URL = 'http://localhost:9090/employeeApp/updateEmpInfoByEmployeeID'
const EMPLOYEE_API_DELETE_URL = 'http://localhost:9090/employeeApp/deleteEmpInfoByEmployeeID'


class EmployeeService { 

    getAllEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


    addEmployeeInfoService(addEmployee){
        return axios.post(EMPLOYEE_API_POST_URL, addEmployee);
    }

    editEmployeeByEmpId(empId){
        return axios.get(EMPLOYEE_API_GET_EMPINFO_BY_EMPID + '/' + empId);
    }

    updateEmployeeInfo(empId, editEmployee){
        return axios.put(EMPLOYEE_API_UPDATE_URL + '/' + empId, editEmployee);
    }

    deleteEmployeeInfo(userName){
        return axios.delete(EMPLOYEE_API_DELETE_URL + '/' + userName);
    }
}

export default new EmployeeService();