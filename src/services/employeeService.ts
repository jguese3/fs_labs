import { employeeRepo } from "../repository/employeeRepo";

export const employeeService = {
    createEmployee(
        firstName: string,
        lastName: string,
        departmentName: string
    ) {
        const errors: string[] = [];

        if (firstName.trim().length < 3) {
            errors.push(
                "First names must have at least three characters."
            );
        }

        const departmentExists =
            employeeRepo
                .getDepartments()
                .some(d => d.name === departmentName);

        if (!departmentExists) {
            errors.push(
                "Employee must be in an existing department."
            );
        }

        if (errors.length > 0) {
            return {
                success: false,
                errors
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
            errors: []
        };
    }
};