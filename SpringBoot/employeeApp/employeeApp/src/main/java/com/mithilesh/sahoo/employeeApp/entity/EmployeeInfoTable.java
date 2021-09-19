package com.mithilesh.sahoo.employeeApp.entity;


import javax.persistence.*;

@Entity
public class EmployeeInfoTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true, length = 40)
    private String email;

    @Column(nullable = false, length = 20)
    private String firstName;

    @Column(nullable = false, length = 20)
    private String lastName;

    @Column(nullable = false, unique = true)
    private long empId;

    @Column(nullable = false, unique = true)
    private String userName;


    // Getters and Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public long getEmpId() {
        return empId;
    }

    public void setEmpId(long empId) {
        this.empId = empId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }



    // Parameterised Constructor
    public EmployeeInfoTable(long id, String email, String firstName, String lastName, long empId, String userName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.empId = empId;
        this.userName = userName;
    }

    //Default constructor
    public EmployeeInfoTable() {
    }


    //To string representation

    @Override
    public String toString() {
        return "employeeInfoTable{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", empId='" + empId + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
}
