import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getemp');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      if (response.status === 200) {
        fetchEmployees();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        });
        setError(null);
      }
    } catch (error) {
      console.error('Error registering employee:', error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Employee Details</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form method='POST' onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required /><br />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required /><br />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} required /><br />
        <button type="submit">Register</button>
      </form>
      <h2>Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>{employee.firstName} {employee.lastName} - {employee.email} - {employee.phoneNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
