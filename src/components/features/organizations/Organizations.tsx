import type { Organization } from "../../../types/organization";
import styles from "./Organization.module.css";

type OrganizationProps = {
  organization: Organization[];
};

export function OrganizationList({ organization }: OrganizationProps) {
  return (
    <main>
      <section>
        <h1>Organization</h1>

        <ul className={styles.organization}>
          {organization.map((person, index) => (
            <li key={index} className={styles.member}>
              <h2>{person.role}</h2>
              <p>{person.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}