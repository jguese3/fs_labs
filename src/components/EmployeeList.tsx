import { departments } from "./employee_data";

export function EmployeeList() {
    const departmentName = departments.map(department =>
        <p key={department.name}>
            <h2>{department.name}</h2>

            <p>
                {department.employees.map((employee, i) => (
                    <p key={i}>
                        {employee.firstName} {employee.lastName}
                    </p>
                ))}
            </p>
        </p>
    );
    return <p>{departmentName}</p>;
}