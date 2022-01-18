import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

// CSS
import "./components.css";

// MUI
import { TextField, Button, FormControl } from "@mui/material";
import { flexbox, margin } from "@mui/system";

const ContactBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        form.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setSubject("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main>
      <div>
        <form
          onSubmit={sendEmail}
          ref={form}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            marginBottom: 50,
          }}
          id="contact-form"
        >
          <TextField
            label="Name"
            name="from_name"
            variant="outlined"
            className="contact-field"
            size="small"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            form
          />
          <TextField
            label="Email"
            name="user_email"
            variant="outlined"
            className="contact-field"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            margin="normal"
          />
          <TextField
            label="Subject"
            name="subject"
            variant="outlined"
            className="contact-field"
            size="small"
            fullWidth
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            className="contact-field"
            size="small"
            multiline
            rows={6}
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <br />
          <div style={{ width: "40%" }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              color="error"
              type="submit"
              onClick={sendEmail}
              form="email"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactBody;
