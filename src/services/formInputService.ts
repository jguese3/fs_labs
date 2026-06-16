export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export function validateFirstName(
    value: string
): ValidationResult {
    const errors: string[] = [];

    if (value.trim().length < 3) {
        errors.push(
            "First names must have at least three characters."
        );
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

export function validateDepartment(
    value: string,
    departmentNames: string[]
): ValidationResult {
    const errors: string[] = [];

    if (!departmentNames.includes(value)) {
        errors.push(
            "Employee must be in an existing department."
        );
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}