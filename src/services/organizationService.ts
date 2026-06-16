import * as organizationRepo from "../repository/organizationRepo";

export const organizationService = {

    createAssignment(
        firstName: string,
        lastName: string,
        roleTitle: string
    ) {

        const firstNameErrors: string[] = [];

        if (firstName.trim().length < 3) {
            firstNameErrors.push(
                "First name must be at least 3 characters."
            );
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
        };
    }
};