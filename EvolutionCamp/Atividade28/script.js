
class Employee {
    constructor(id, name, position, salary, hireDate, status) {

        this.id = id,
            this.name = name,
            this.position = position,
            this.salary = salary,
            this.hireDate = new Date(hireDate),
            this.status = status;

    }
}

class EmployeeManager {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {

        this.employees.push(employee);
        alert("New employee added successfully!");
    }

    searchEmployeeByID(id) {

        let employee = this.employees.find((e) => e.id === id);

        if (employee) {

            alert(`Employee Found: ${employee.name}, Position - ${employee.position}`);

        }

        else {
            alert(`Employee with ID: ${id} not found!`);
        }
    }


    listActiveEmployees() {


        let activeEmployees = this.employees.filter((e) => e.status === 'active');
        alert(`Active employees: ${activeEmployees.map(e => e.name).join(', ')}`);
    }

    calculateTotalPayroll() {

        let totalPayroll = this.employees.reduce((sum, e) => sum + e.salary, 0);
        alert(`Total payroll cost: ${totalPayroll.toFixed(2)}`);

    }

    changeEmployeeStatus(id) {

        let employee = this.employees.find((e) => e.id === id);

        if (employee) {

            employee.status = 'inactive';
            alert(`Employee ${employee.name}'s status changed to inactive.`);
        }

        else {

            alert(`Employee with ID: ${id} not found!`);
        }

    }

    listEmployeesHiredAfter(date) {

        let referenceDate = new Date(date);

        if (isNaN(referenceDate)) {
            alert("Invalid date format.");
        }

        let filteredEmployees = this.employees.filter((e) => e.hireDate > referenceDate);

        if (filteredEmployees.length > 0) {

            alert(`Employees hired after ${referenceDate.toLocaleDateString("pt-BR")}: ${filteredEmployees.map(e => e.name).join(', ')}`);

        }

        else {
            alert("No employees hired after the specified date.");
        }
    }
}

let employeeManager = new EmployeeManager();

employeeManager.addEmployee(new Employee(1, "Victor Martins", "Engenheiro de Software", 5000.00, '2024-09-23', 'active'));
employeeManager.addEmployee(new Employee(2, "Fernando Rafael", "Consultor Técnico", 6500.00, '2024-10-23', 'active'));
employeeManager.addEmployee(new Employee(3, "Andriel Gustavo", "ServiceNow Developer", 2200.00, '2024-12-23', 'active'));
employeeManager.addEmployee(new Employee(4, "Mariana Ferreira", "Gerente de Vendas", 4500.00, '2024-05-23', 'inactive'));
employeeManager.addEmployee(new Employee(5, "Hugo Barbosa", "Desenvolvedor Web", 7000.00, '2024-08-23', 'inactive'));

alert(`Escolha uma opcao de 1 a 6`);
let input = parseInt(prompt("Type a number: "));

if (isNaN(input)) {

    alert("Type a valid number!");
}

else {

    if (input === 1) {

        let person_id = parseInt(prompt("Type a ID: "));
        let person_name = (prompt("Type a name: "));
        let person_position = (prompt("Type a position: "));
        let person_salary = parseInt(prompt("Type a salary, eg: 500.00: "));
        let person_hireDate = new Date((prompt("Type a hireDate (YYYY-MM-DD): ")));
        let person_status = (prompt("Type a status, eg: 'inactive', 'active' : "));

        employeeManager.addEmployee(new Employee(person_id, person_name, person_position, person_salary, person_hireDate, person_status));
    }

    else if (input === 2) {

        let person_id = parseInt(prompt("Type a ID: "));
        employeeManager.searchEmployeeByID(person_id);
    }

    else if (input === 3) {

        employeeManager.listActiveEmployees();
    }

    else if (input === 4) {

        employeeManager.calculateTotalPayroll();
    }

    else if (input === 5) {

        let person_id = parseInt(prompt("Type a ID: "));
        employeeManager.changeEmployeeStatus(person_id);
    }

    else if (input === 6) {

        let person_hireDate = new Date((prompt("Type a hireDate (YYYY-MM-DD): ")));
        employeeManager.listEmployeesHiredAfter(person_hireDate);
    }

    else {
        alert("Invalid option!")
    }
}

