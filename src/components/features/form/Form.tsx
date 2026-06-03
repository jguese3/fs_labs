import { useState } from 'react';
import type { Department } from '../../../types/department';

export function Form({
  departments,
  updateDepartments
}: 
{
  departments: Department[],
  updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>
}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departmentName, setDepartmentName] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    updateDepartments(prev =>
      prev.map(dept =>
        dept.name === departmentName
          ? {
              ...dept,
              employees: [...dept.employees, { firstName, lastName }]
            }
          : dept
      )
    );

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <br />

      <label>
        Last name:
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <br />

      <label>
        Department:
        <select
          value={departmentName}
          onChange={e => setDepartmentName(e.target.value)}
          required
        >
          <option value="">Select a department</option>
          {departments.map(dept => (
            <option key={dept.name} value={dept.name}>{dept.name}</option>
          ))}
        </select>
      </label>
      <br />

      <button type="submit">Add Employee</button>
    </form>
  );
}
