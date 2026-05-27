import { useState } from 'react';
import { Employees } from './components/features/employees/Employees';
import { Form } from './components/features/form/Form';
import departmentData from './data/departments';
import type { Department } from './types/department';

function App() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  return (
    <>
      <Employees/>
      <Form 
        departments={departments} 
        updateDepartments={setDepartments} 
      />
    </>
  );
}

export default App;
