import { useState } from "react";

import "./App.css";
import MyCards from "./components/MyCards";
import DisplayEmployee from "./components/DisplayEmployee";

function App() {
  const [employee, setEmployee] = useState([
    {
      id: Date.now(),
      name: "John Doe",
      age: 28,
      gender: "Male",
      contact: "9876543210",
      email: "john@gmail.com",
      postcode: "IG38ER",
      status: "pending",
    },
    {
      id: Date.now() + 1,
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      contact: "774581210",
      email: "jane@gmail.com",
      postcode: "IG9PW",
      status: "approved",
    },
  ]);

  const addEmpoyee = (newEmployee) => {
    setEmployee([...employee, { ...newEmployee }]);
  };

  const approveEmployee = (approvedEmployeeId) => {
    setEmployee((employee) =>
      employee.map((emp) =>
        emp.id === approvedEmployeeId ? { ...emp, status: "approved" } : emp
      )
    );
  };

  const rejectEmployee = (rejectedEmployeeId) => {
    setEmployee((employee) =>
      employee.map((emp) =>
        emp.id === rejectedEmployeeId ? { ...emp, status: "rejected" } : emp
      )
    );
  };

  const deleteEmployee = (deletedEmployeeId) => {
    setEmployee((employee) =>
      employee.filter((emp) => emp.id !== deletedEmployeeId)
    );
  };

  return (
    <>
      <h1>Passing or Sharing Data between Components..!</h1>
      <p> Form component is sharing data to dsiplay component...</p>

      <div className="card-container">
        <div className="card">
          <MyCards newEmp={addEmpoyee} />
        </div>
        <div className="card">
          {employee.map((emp) => (
            <DisplayEmployee
              key={emp.id}
              data={emp}
              approveEmployee={approveEmployee}
              rejectEmployee={rejectEmployee}
              deleteEmployee={deleteEmployee}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


