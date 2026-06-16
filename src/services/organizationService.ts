import * as organizationRepo from "../repository/organizationRepo";

export const organizationService = {

    createAssignment(
        firstName: string,
        lastName: string,
        roleTitle: string
    ) {

        const firstNameErrors: string[] = [];
        const roleErrors: string[] = [];

        // Rule 1
        if (firstName.trim().length < 3) {
            firstNameErrors.push(
                "First name must be at least 3 characters."
            );
        }

        const role =
            organizationRepo
                .getRoles()
                .find(r => r.title === roleTitle);

        // Rule 2
        if (!role) {
            roleErrors.push("Role does not exist.");
        }

        // Rule 3
        else if (role.employee) {
            roleErrors.push("Role is already occupied.");
        }

        if (
            firstNameErrors.length ||
            roleErrors.length
        ) {
            return {
                success: false,
                firstNameErrors,
                roleErrors
            };
        }

        const updated =
            organizationRepo.assignEmployeeToRole(
                roleTitle,
                firstName,
                lastName
            );

        return {
            success: true,
            role: updated,
            firstNameErrors: [],
            roleErrors: []
        };
    }
};