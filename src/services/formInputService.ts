export function validateInput(inputValue: string): {
    isValid: boolean;
    errors: string[];
} {
    let isValid = true;
    const errors: string[] = [];

    if(inputValue.trim().length < 1) {
        isValid = false
        errors.push("Name must be more than one character")
    }

    return {isValid, errors}
}
