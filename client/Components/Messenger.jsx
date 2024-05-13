import React, { useState } from "react";
import axios from "axios"; // Import Axios

import "./Messenger.css";

function Messenger() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [qualification, setQualification] = useState("");
    const [msg, setMsg] = useState("");

    const send = async (e) => {
        e.preventDefault();
        try {
            if (msg.trim() !== "") { // Validate message
                await axios.post("http://localhost:6006/send", { name, age, qualification, msg });
                alert("Message sent!");
                setMsg(""); // Clear the input after sending
            } else {
                alert("Please type a message!");
            }
        } catch (error) {
            console.log(error);
            alert("Failed to send message!");
        }
    };

    return (
        <div className="forminput">
            <h1>General Form 😊</h1><br />
            <form id="myForm" onSubmit={send}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /><br />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" /> <br />

                <label htmlFor="qualification">Qualification:</label>
                <select id="qualification" name="qualification" value={qualification} onChange={(e) => setQualification(e.target.value)}>
                    <option value="Xth">Xth</option>
                    <option value="PU">PU</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD and higher">PhD and higher</option>
                    <option value="Others">Others</option>
                </select><br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Enter your message"></textarea><br />

                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}

export default Messenger;
