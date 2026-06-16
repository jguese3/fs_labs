import { useState } from "react";

export function useFormInput() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    function validate(
        validator: (value: string) => {
            isValid: boolean;
            errors: string[];
        }
    ): boolean {

        const result = validator(inputValue);

        setMessages(result.errors);

        return result.isValid;
    }

    return {
        inputValue,
        setInputValue,
        messages,
        validate
    };
}