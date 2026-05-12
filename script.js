import { departments } from "./data/employee_data.js";

const populateEmployeeList = (listNode, departments) => {
    departments.forEach(department => {
        const departmentHeader = document.createElement("h3");
        departmentHeader.textContent = department.name;
        listNode.appendChild(departmentHeader);

        const ul = document.createElement("ul");

        department.employees.forEach(employee => {
            const li = document.createElement("li");
            const fullname = employee.firstName + " " + employee.lastName;
            li.innerHTML = `<a>${fullname}</a>`;
            ul.appendChild(li);
        });
        listNode.appendChild(ul);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const employeeListNode = document.querySelector(".employees__list");

    populateEmployeeList(employeeListNode, departments);
});

const currentYear = new Date().getFullYear();

const footer = document.getElementById("currentYear");

footer.textContent = `Copyright Pixell River Financial ${currentYear}`;