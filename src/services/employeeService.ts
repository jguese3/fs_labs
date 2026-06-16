import { employeeRepo } from "../repository/employeeRepo";

export const employeeService = {
    createEmployee(
        firstName: string,
        lastName: string,
        departmentName: string
    ) {
        const firstNameErrors: string[] = [];
        const departmentErrors: string[] = [];

        if (firstName.trim().length < 3) {
            firstNameErrors.push(
                "First names must have at least three characters."
            );
        }

        const departmentExists =
            employeeRepo
                .getDepartments()
                .some(d => d.name === departmentName);

        if (!departmentExists) {
            departmentErrors.push(
                "Employee must be in an existing department."
            );
        }

        if (
            firstNameErrors.length > 0 ||
            departmentErrors.length > 0
        ) {
            return {
                success: false,
                firstNameErrors,
                departmentErrors
            };
        }

        const employee = employeeRepo.createEmployee(
            firstName,
            lastName,
            departmentName
        );

        return {
            success: true,
            employee,
            firstNameErrors: [],
            departmentErrors: []
        };
    }
};