import React from "react";
import Nav from "./Nav";
import "../Style/EmployeePage.css"; // Import the CSS file for styling

function EmployeePage() {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      role: "Manager",
      img: "https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png",
    },
    {
      id: 2,
      name: "Jad Smith",
      role: "Customer Service Representative",
      img: "https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=",
    },
    {
      id: 3,
      name: "Jane Johnson",
      role: "Rental Agent",
      img: "https://t3.ftcdn.net/jpg/01/39/78/34/360_F_139783413_rfP0NRrWI2TuM38VP5CbVHEa5OVVwTEe.jpg",
    },
    {
      id: 4,
      name: "Steve Davis",
      role: "Fleet Coordinator",
      img: "https://www.pngitem.com/pimgs/m/42-422909_clip-art-business-man-man-clipart-hd-png.png",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Maintenance Technician",
      img: "https://media.istockphoto.com/id/951146982/vector/business-man-in-casual-clothes.jpg?s=612x612&w=0&k=20&c=0Trsa3A1Nam-gbnSEKp4kKINWasWsd_1W6WquU7u4t4=",
    },
    {
      id: 6,
      name: "Sarah Brown",
      role: "Accountant",
      img: "https://img.freepik.com/premium-vector/cute-young-women-beautiful-style-character-business-girl-office-lady-attractive-young-women-casual-style-fashion-woman-face-sexy-woman-illustration-white-background_189145-182.jpg?w=2000",
    },
  ];

  return (
    <>
      <Nav />
      <h1>Welcome to the Employee Page</h1>
      <h2>Employee Information</h2>
      <div className='container'>
        {employees.map((employee) => (
          <div key={employee.id} className='employee-container'>
            <img
              src={employee.img}
              alt={employee.name}
              className='profile-image'
            />
            <div className='employee-details'>
              <label htmlFor={`employeeName${employee.id}`}>Name:</label>
              <input
                type='text'
                id={`employeeName${employee.id}`}
                defaultValue={employee.name}
                disabled
              />
              <label htmlFor={`employeeRole${employee.id}`}>Role:</label>
              <input
                type='text'
                id={`employeeRole${employee.id}`}
                defaultValue={employee.role}
                disabled
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EmployeePage;
