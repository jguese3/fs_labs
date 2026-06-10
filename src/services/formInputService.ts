export function validateInput(inputValue: string): {
    isValid: boolean;
    errors: string[];
} {
    let isValid = true;
    const errors: string[] = [];

    if(inputValue.trim().length < 3) {
        isValid = false
        errors.push("Name must be more than three characters")
    }

    return {isValid, errors}
}
