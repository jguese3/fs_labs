import type { Department } from "../../../types/department";
import styles from "./Employees.module.css";

type EmployeesProps = {
  departments: Department[];
};

export function Employees({ departments }: EmployeesProps) {
  return (
    <main>
      <section>
        <h1>Employees by Department</h1>

        {departments.map(dept => (
          <section key={dept.name}>
            <h2>{dept.name}</h2>
            <ul className={styles.employees}>
              {dept.employees.map((e, i) => (
                <li key={i}>
                  {e.firstName} {e.lastName}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </main>
  );
}
