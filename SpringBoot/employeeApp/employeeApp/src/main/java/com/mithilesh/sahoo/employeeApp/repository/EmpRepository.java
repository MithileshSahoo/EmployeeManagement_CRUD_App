package com.mithilesh.sahoo.employeeApp.repository;

import com.mithilesh.sahoo.employeeApp.entity.EmployeeInfoTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface EmpRepository extends JpaRepository<EmployeeInfoTable, Long> {

    EmployeeInfoTable findEmployeeInfoByempId(long empId);
    EmployeeInfoTable findEmployeeInfoByUserName(String username);
    EmployeeInfoTable findEmployeeInfoByEmail(String email);


    @Modifying
    @Transactional
    @Query("delete from EmployeeInfoTable e where e.userName =:userName")
    void deleteEmployee(@Param("userName")String username);

    /*
    Note : Add @Transactional always in case of update/delete custom queries to avoid TransactioRequiredException

    @Transaction :
     */
}
