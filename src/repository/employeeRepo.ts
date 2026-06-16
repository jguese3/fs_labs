import type { Department } from "../types/department";
import { departmentData } from "../data/departments";
import { Guid } from "guid-typescript";

export function getDepartments(): Department[] {
    return departmentData;
}

export async function createEmployee(
        firstName: string,
        lastName: string,
        departmentName: string
    ) {
        const department = departmentData.find(
            d => d.name === departmentName
        );

        if (!department) {
            return null;
        }

        const employee = {
            id: Guid.create().toString(),
            firstName,
            lastName
        };

        department.employees.push(employee);

        return employee;
}