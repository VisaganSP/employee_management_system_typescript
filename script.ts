// Common interface for all employees
interface Employee {
  name: string;
  id: number;
  department: string;
  salary: number;
}

// Specific interfaces for different types of employees
interface FullTimeEmployee extends Employee {
  // No additional properties for full-time employees
}

interface PartTimeEmployee extends Employee {
  hoursWorked: number;
}

interface ContractEmployee extends Employee {
  endDate: Date;
}

// Array to store employees
let employees: Employee[] = [];

// Function to add a full-time employee
function addFullTimeEmployee(event: Event) {
  event.preventDefault();
  const name = (document.getElementById("fullTimeName") as HTMLInputElement)
    .value;
  const id = parseInt(
    (document.getElementById("fullTimeId") as HTMLInputElement).value
  );
  const department = (
    document.getElementById("fullTimeDepartment") as HTMLInputElement
  ).value;
  const salary = parseFloat(
    (document.getElementById("fullTimeSalary") as HTMLInputElement).value
  );

  const newEmployee: FullTimeEmployee = { name, id, department, salary };
  employees.push(newEmployee);

  updateEmployeeList();

  // Reset the form fields
  (document.getElementById("fullTimeEmployeeForm") as HTMLFormElement).reset();
}

// Function to add a part-time employee
function addPartTimeEmployee(event: Event) {
  event.preventDefault();
  const name = (document.getElementById("partTimeName") as HTMLInputElement)
    .value;
  const id = parseInt(
    (document.getElementById("partTimeId") as HTMLInputElement).value
  );
  const department = (
    document.getElementById("partTimeDepartment") as HTMLInputElement
  ).value;
  const salary = parseFloat(
    (document.getElementById("partTimeSalary") as HTMLInputElement).value
  );
  const hoursWorked = parseFloat(
    (document.getElementById("partTimeHoursWorked") as HTMLInputElement).value
  );

  const newEmployee: PartTimeEmployee = {
    name,
    id,
    department,
    salary,
    hoursWorked,
  };
  employees.push(newEmployee);

  updateEmployeeList();

  // Reset the form fields
  (document.getElementById("partTimeEmployeeForm") as HTMLFormElement).reset();
}

// Function to add a contract employee
function addContractEmployee(event: Event) {
  event.preventDefault();
  const name = (document.getElementById("contractName") as HTMLInputElement)
    .value;
  const id = parseInt(
    (document.getElementById("contractId") as HTMLInputElement).value
  );
  const department = (
    document.getElementById("contractDepartment") as HTMLInputElement
  ).value;
  const salary = parseFloat(
    (document.getElementById("contractSalary") as HTMLInputElement).value
  );
  const endDate = new Date(
    (document.getElementById("contractEndDate") as HTMLInputElement).value
  );

  const newEmployee: ContractEmployee = {
    name,
    id,
    department,
    salary,
    endDate,
  };
  employees.push(newEmployee);

  updateEmployeeList();

  // Reset the form fields
  (document.getElementById("contractEmployeeForm") as HTMLFormElement).reset();
}

// Function to update the employee list displayed on the page
function updateEmployeeList() {
  const employeeListElement = document.getElementById("employeeList")!;
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

// Function to edit employee details
function editEmployee(index: number) {
  const employee = employees[index];
  const newName = prompt("Enter new name:", employee.name);
  const newId = parseInt(prompt("Enter new ID:", employee.id.toString())!);
  const newDepartment = prompt("Enter new department:", employee.department);
  const newSalary = parseFloat(
    prompt("Enter new salary:", employee.salary.toString())!
  );

  if (newName && !isNaN(newId) && newDepartment && !isNaN(newSalary)) {
    employees[index] = {
      ...employee,
      name: newName,
      id: newId,
      department: newDepartment,
      salary: newSalary,
    };
    updateEmployeeList();
  }
}

// Function to delete an employee
function deleteEmployee(index: number) {
  employees.splice(index, 1);
  updateEmployeeList();
}

// Add event listeners to the forms
document
  .getElementById("fullTimeEmployeeForm")!
  .addEventListener("submit", addFullTimeEmployee);
document
  .getElementById("partTimeEmployeeForm")!
  .addEventListener("submit", addPartTimeEmployee);
document
  .getElementById("contractEmployeeForm")!
  .addEventListener("submit", addContractEmployee);
