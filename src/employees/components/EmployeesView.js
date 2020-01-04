import React, { useEffect } from 'react';

function EmployeesView(props) {
  const { employees } = props;

  function noEmployeesPlacEholder() {
    if (!employees.length) {
      return <p>No results were found</p>;
    }
  }

  return (
    <>
      <div className='section'>
        <div className='container'>
          <h1 className='title'>Results</h1>
          {noEmployeesPlacEholder()}
          {employees.map(employee => (
            <div className='box' key={employee.id}>
              <div className='columns is-multiline'>
                <div className='column is-half'>
                  <span>
                    <strong>Id: </strong>
                    {employee.id}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Name: </strong>
                    {employee.name}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Contract type: </strong>
                    {employee.contractTypeName}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Role Id: </strong>
                    {employee.roleId}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Role Name: </strong>
                    {employee.roleName}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Role Description: </strong>
                    {employee.roleDescription}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Hourly Salary: </strong>
                    {employee.hourlySalary}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Monthly Salary: </strong>
                    {employee.monthlySalary}
                  </span>
                </div>
                <div className='column is-half'>
                  <span>
                    <strong>Annual Salary: </strong>
                    {employee.annualSalary}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EmployeesView;
