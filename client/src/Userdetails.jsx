// Userdetails.jsx

import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../src/Userdetails.css"

function Userdetails() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const res = await axios.get("http://localhost:3006/getusers");
                setUsers(res.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        getUserDetails();
    }, []);

    return (
        <div className="usertable">
            <h1>User Table</h1>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.mail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Userdetails;
