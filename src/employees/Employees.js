import React, { useState } from 'react';
import axios from 'axios';
import EmployeesView from './components/EmployeesView';

function Employees() {
  const [employeeId, setEmployeeId] = useState('');
  const [employees, setEmployees] = useState([]);

  const employeesUrl = 'http://localhost:8080/employees';

  function getAllEmployeesRequest() {
    return () =>
      axios.get(employeesUrl).then(res => {
        setEmployees(res.data);
      });
  }

  function getEmployeeByIdRequest() {
    return () =>
      axios.get(`${employeesUrl}/${employeeId}`).then(res => {
        setEmployees([res.data]);
      });
  }

  function getEmployees() {
    var employeeRequest;
    if (employeeId) {
      employeeRequest = getEmployeeByIdRequest();
    } else {
      employeeRequest = getAllEmployeesRequest();
    }

    employeeRequest().catch(error => setEmployees([]));
  }

  return (
    <>
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Employees</h1>
          <div className='field'>
            <div className='control'>
              <input
                className='input is-primary'
                type='text'
                placeholder='Employee id'
                value={employeeId}
                onChange={event => setEmployeeId(event.target.value)}
              ></input>
            </div>
          </div>
          <button className='button' onClick={getEmployees}>
            Search
          </button>
        </div>
      </section>
      <EmployeesView employees={employees}></EmployeesView>
    </>
  );
}

export default Employees;
