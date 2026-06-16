export function handleEmployeeSubmit = () => {
    let isValid = true;
    setFormMessages([]);

    if(firstNameValue.trim().length < 3) {
        isValid = false;
        setFormMessages(s => {
            return [...s, "First names must have at least three characters."]
        });
    }

    if(!departmentData.find(d => d.name === departmentInput)) {
        isValid = false;

        setFormMessages(s => {
            return [...s, "Employee must be in an existing department."]
        })
    }

    if(isValid) {
        setFirstNameValue("");
        setLastNameValue("");

        setDepartmentList(oldState => oldState.map(d => {
            if(d.name !== departmentInput) {
                return d;
            } else {
                // must create a deep clone of the department object being updated
                return {
                    id: d.id,
                    name: d.name,
                    employees: [...d.employees,
                        {
                            id: Guid.create().toString(),
                            firstName: firstNameValue,
                            lastName: lastNameValue
                        }

                    ]
                };
            }
        }));
    }
}