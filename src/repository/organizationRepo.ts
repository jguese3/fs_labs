import type { Role } from "../types/role";
import { roleData } from "../data/roles";

export function getRoles(): Role[] {
    return roleData;
}

export async function assignEmployeeToRole(
        roleTitle: string,
        firstName: string,
        lastName: string
    ) {
        const role = roleData.find(
            r => r.title === roleTitle
        );

        if (!role) {
            return null;
        }

        role.employee = {
            id: crypto.randomUUID(),
            firstName,
            lastName
        };

        return role;
}