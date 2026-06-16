import { roleData } from "../data/roles";

export const organizationRepo = {

    getRoles() {
        return roleData;
    },

    assignEmployeeToRole(
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
};