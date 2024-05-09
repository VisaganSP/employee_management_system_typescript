"use strict";
let employees = [];
function addFullTimeEmployee(event) {
    event.preventDefault();
    const name = document.getElementById("fullTimeName")
        .value;
    const id = parseInt(document.getElementById("fullTimeId").value);
    const department = document.getElementById("fullTimeDepartment").value;
    const salary = parseFloat(document.getElementById("fullTimeSalary").value);
    const newEmployee = { name, id, department, salary };
    employees.push(newEmployee);
    updateEmployeeList();
    document.getElementById("fullTimeEmployeeForm").reset();
}
function addPartTimeEmployee(event) {
    event.preventDefault();
    const name = document.getElementById("partTimeName")
        .value;
    const id = parseInt(document.getElementById("partTimeId").value);
    const department = document.getElementById("partTimeDepartment").value;
    const salary = parseFloat(document.getElementById("partTimeSalary").value);
    const hoursWorked = parseFloat(document.getElementById("partTimeHoursWorked").value);
    const newEmployee = {
        name,
        id,
        department,
        salary,
        hoursWorked,
    };
    employees.push(newEmployee);
    updateEmployeeList();
    document.getElementById("partTimeEmployeeForm").reset();
}
function addContractEmployee(event) {
    event.preventDefault();
    const name = document.getElementById("contractName")
        .value;
    const id = parseInt(document.getElementById("contractId").value);
    const department = document.getElementById("contractDepartment").value;
    const salary = parseFloat(document.getElementById("contractSalary").value);
    const endDate = new Date(document.getElementById("contractEndDate").value);
    const newEmployee = {
        name,
        id,
        department,
        salary,
        endDate,
    };
    employees.push(newEmployee);
    updateEmployeeList();
    document.getElementById("contractEmployeeForm").reset();
}
function updateEmployeeList() {
    const employeeListElement = document.getElementById("employeeList");
    employeeListElement.innerHTML = "";
    employees.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.id}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td class="actions">
                <button onclick="editEmployee(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
        employeeListElement.appendChild(row);
    });
}
function editEmployee(index) {
    const employee = employees[index];
    const newName = prompt("Enter new name:", employee.name);
    const newId = parseInt(prompt("Enter new ID:", employee.id.toString()));
    const newDepartment = prompt("Enter new department:", employee.department);
    const newSalary = parseFloat(prompt("Enter new salary:", employee.salary.toString()));
    if (newName && !isNaN(newId) && newDepartment && !isNaN(newSalary)) {
        employees[index] = Object.assign(Object.assign({}, employee), { name: newName, id: newId, department: newDepartment, salary: newSalary });
        updateEmployeeList();
    }
}
function deleteEmployee(index) {
    employees.splice(index, 1);
    updateEmployeeList();
}
document
    .getElementById("fullTimeEmployeeForm")
    .addEventListener("submit", addFullTimeEmployee);
document
    .getElementById("partTimeEmployeeForm")
    .addEventListener("submit", addPartTimeEmployee);
document
    .getElementById("contractEmployeeForm")
    .addEventListener("submit", addContractEmployee);
//# sourceMappingURL=script.js.map