import { useState } from "react";
import styles from "../Features.module.css";

import { useFormInput } from "../../../hooks/useFormInput";
import * as organizationRepo from "../../../repository/organizationRepo";
import { organizationService } from "../../../services/organizationService";

export function Organization() {

    const [roles, setRoles] =
        useState(organizationRepo.getRoles());

    const firstName = useFormInput();
    const lastName = useFormInput();
    const role = useFormInput();

    const handleSubmit = () => {

        const result =
            organizationService.createAssignment(
                firstName.inputValue,
                lastName.inputValue,
                role.inputValue
            );

        firstName.setMessages(result.firstNameErrors ?? []);

        if (!result.success) return;

        setRoles([...organizationRepo.getRoles()]);

        firstName.setInputValue("");
        lastName.setInputValue("");
        role.setInputValue("");
    };

    return (
        <>
            <section>
                <h1>Leadership and Management</h1>

                <table className={styles.table}>
                    <tbody>
                        {roles.map(r => (
                            <tr key={r.id}>
                                <td>{r.title}</td>
                                <td>
                                    {r.employee
                                        ? `${r.employee.firstName} ${r.employee.lastName}`
                                        : "VACANT"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.input}>
                <h2>Assign Role</h2>

                <form onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div>
                        <input
                            placeholder="First Name"
                            value={firstName.inputValue}
                            onChange={e =>
                                firstName.setInputValue(e.target.value)
                            }
                        />
                        {firstName.messages.map(m => (
                            <p className={styles.error} key={m}>
                                {m}
                            </p>
                        ))}
                    </div>

                    <div>
                        <input
                            placeholder="Last Name"
                            value={lastName.inputValue}
                            onChange={e =>
                                lastName.setInputValue(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <input
                            placeholder="Role Title"
                            value={role.inputValue}
                            onChange={e =>
                                role.setInputValue(e.target.value)
                            }
                        />
                        {role.messages.map(m => (
                            <p className={styles.error} key={m}>
                                {m}
                            </p>
                        ))}
                    </div>

                    <button type="submit">
                        Assign Role
                    </button>
                </form>
            </section>
        </>
    );
}