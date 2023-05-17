import React, { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ name: " ", email: " ", message: " " });
  const validateEmail = (email) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError((prevState) => ({
        ...prevState,
        name: "Please fill your name",
      }));
      return;
    } else {
      setError((prevState) => ({
        ...prevState,
        name: " ",
      }));
    }
    if (!validateEmail(email)) {
      setError((prevState) => ({
        ...prevState,
        email: "Please fill your email correctly",
      }));
      return;
    } else {
      setError((prevState) => ({
        ...prevState,
        email: " ",
      }));
    }
    if (message === "") {
      setError((prevState) => ({
        ...prevState,
        message: "Please write your message",
      }));
      return;
    } else {
      setError((prevState) => ({
        ...prevState,
        message: " ",
      }));
    }

    emailjs
      .sendForm(
        "service_uhcbdx7",
        "template_po762qr",
        ".form",
        "user_5egkmNtMDlotcTh6Zgxeg"
      )
      .then(
        (result) => {
          //console.log(result);
          alert("Message Sent, We will get back to you shortly", result.text);
          setName("");
          setEmail("");
          setMessage("");
          setError("");
        },
        (error) => {
          console.log(error);
          alert("An error occurred, Please try again", error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact-page">
      <h2 className="heading"> Let's Connect☕</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
          //onBlur={(e) => (e.target.placeholder = "Name")}
        />
        {error.name && <p className="err-msg">{error.name}</p>}
        <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="err-msg">{error.email && error.email}</div>
        <textarea
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
          rows="10"
          required
        ></textarea>
        <div className="err-msg">{error.message && error.message}</div>
      </form>
      <button type="submit" className="submit" onClick={handleSubmit}>
        {" "}
        Send Message{" "}
      </button>
    </div>
  );
};
export default Contact;
