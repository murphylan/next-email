"use client";

import React, { useState } from "react";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
    });
  };
  return (
    <>

      <h2>Subscribe to our Newsletter</h2>


      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Subscribe
      </button>
    </>
  );
};

export default ContactForm;