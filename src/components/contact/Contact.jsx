import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <form className="form">
      <label htmlFor="name">Nom</label>
      <input type="text" />
      <label htmlFor="prenom">Prénom</label>
      <input type="text" />
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />

      <input type="submit" name="envoyer" />
    </form>
  );
};

export default Contact;
