import { useState } from 'react';
import { Employees } from './components/features/employees/Employees';
import { Footer } from './components/layout/footer/Footer';
import { Header } from './components/layout/header/Header';
import { Form } from './components/features/form/Form';
import departmentData from './data/departments';
import type { Department } from './types/department';
import { Nav } from './components/layout/nav/Nav';
import { OrganizationList } from './components/features/organizations/Organizations';
import { organizationData } from './data/organization';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/employees"
          element={
            <>
              <Employees departments={departments} />
              <Form
                departments={departments}
                updateDepartments={setDepartments}
              />
            </>
          }
        />
        <Route
          path="/organization"
          element={<OrganizationList organization={organizationData}/>}
          />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
