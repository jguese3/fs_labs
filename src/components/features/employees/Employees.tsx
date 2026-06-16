import { useState } from "react";
import styles from "../Features.module.css";

import { useFormInput } from "../../../hooks/useFormInput";
import * as employeeRepo from "../../../repository/employeeRepo"
import { employeeService } from "../../../services/employeeService";

export function Employees() {

    const [departmentList, setDepartmentList] =
        useState(employeeRepo.getDepartments());

    const firstName = useFormInput();
    const lastName = useFormInput();
    const department = useFormInput();

    const handleEmployeeSubmit = () => {

        const result = employeeService.createEmployee(
            firstName.inputValue,
            lastName.inputValue,
            department.inputValue
        );

        firstName.setMessages(
            result.firstNameErrors ?? []
        );

        department.setMessages(
            result.departmentErrors ?? []
        );

        if (!result.success) {
            return;
        }

        setDepartmentList([
            ...employeeRepo.getDepartments()
        ]);

        firstName.setInputValue("");
        lastName.setInputValue("");
        department.setInputValue("");
    };

    return (
        <>
            <section>
                <h1>Employees by Department</h1>

                {departmentList.map(d => (
                    <section key={d.id}>
                        <h2>{d.name}</h2>

                        <ul className={styles.employees}>
                            {d.employees.map(e => (
                                <li key={e.id}>
                                    {e.firstName} {e.lastName}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </section>

            <section className={styles.input}>
                <h2>Add New Employee</h2>

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        handleEmployeeSubmit();
                    }}
                >
                    <div>
                        <label>
                            First Name:
                            <input
                                type="text"
                                value={firstName.inputValue}
                                onChange={e =>
                                    firstName.setInputValue(
                                        e.target.value
                                    )
                                }
                            />
                        </label>

                        {firstName.messages.map(m => (
                            <p
                                key={m}
                                className={styles.error}
                            >
                                {m}
                            </p>
                        ))}
                    </div>

                    <div>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                value={lastName.inputValue}
                                onChange={e =>
                                    lastName.setInputValue(
                                        e.target.value
                                    )
                                }
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Department:
                            <select
                                value={department.inputValue}
                                onChange={e =>
                                    department.setInputValue(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    -- Select Department --
                                </option>

                                {departmentList.map(d => (
                                    <option
                                        key={d.id}
                                        value={d.name}
                                    >
                                        {d.name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {department.messages.map(m => (
                            <p
                                key={m}
                                className={styles.error}
                            >
                                {m}
                            </p>
                        ))}
                    </div>

                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </section>
        </>
    );
}