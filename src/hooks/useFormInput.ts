import { useState } from "react";
import * as inputService from "../services/formInputService"

export function useFormInput() {
    const  [inputValue, setInputValue] = useState<string>("");

    function tryInput(): {isValid: boolean, errors: string[]} {
        const validation = inputService.validateInput(inputValue);

        return validation;
    };

    return {
        inputValue,
        setInputValue,
        tryInput
    }
}