import React from "react";
import useForm from "../utils/useForm";
import useContact from "../utils/useContact";

const Contact = () => {
  const { values, updateValues } = useForm({
    name: "",
    email: "",
    message: "",
    contactNumber: "",
    mapleSyrup: "",
  });
  const { sent, error, submitContact } = useContact();

  if (error) {
    return (
      <p>
        Something went wrong dispatching your message 📨 ... Please refresh the
        form & try again or get in touch directly via email or Instagram 📱.
      </p>
    );
  }

  if (sent) {
    return (
      <p>
        Your message 📨 is now hurtling towards me across the internet 🌏. I'll
        be in touch soon 📱.
      </p>
    );
  }

  return (
    <form name="Contact Form" method="POST" action="/thankyou">
      <div className="form-item">
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          id="name"
          className="contact-input"
          name="name"
          value={"..."}
          value={values.name}
          onChange={updateValues}
          required
        />
      </div>
      <div className="form-item">
        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="Your email"
          id="email"
          className="contact-input"
          name="email"
          value={"..."}
          value={values.email}
          onChange={updateValues}
          required
        />
      </div>
      <div className="form-item">
        <label className="contact-label" htmlFor="email">
          Contact Number
        </label>
        <input
          type="text"
          placeholder="Your contact number"
          id="contactNumber"
          className="contact-input"
          name="contactNumber"
          value={"..."}
          value={values.contactNumber}
          onChange={updateValues}
          required
        />
      </div>
      <div className="form-item-honeypot">
        <label className="contact-label" htmlFor="mapleSyrup"></label>
        <input
          type="text"
          id="mapleSyrup"
          className="contact-input"
          name="mapleSyrup"
          value={"..."}
          value={values.mapleSyrup}
          onChange={updateValues}
        />
      </div>
      <div className="form-item">
        <label className="contact-label" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Your message"
          rows="4"
          id="message"
          className="contact-textarea contact-input"
          name="message"
          value={"..."}
          value={values.message}
          onChange={updateValues}
          required
        ></textarea>
      </div>
      <div className="form-item">
        <button type="submit" value="Send" className="form-btn">
          {!sent ? "Send 📩" : "Sent 📨"}
        </button>
      </div>
    </form>
  );
};

export default Contact;
