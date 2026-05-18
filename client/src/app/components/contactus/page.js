"use client";
import styles from "../../../styles/contactus/page.module.css";
import Navbar from "../home/navbar";
import Footer from "../footer/Footer";
import BackButton from "../back-button"
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name should contain only letters
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("❌ Please enter a valid name (letters only)");
      return;
    }

    // Phone should be digits only
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("❌ Please enter a valid 10-digit phone number");
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("❌ Please enter a valid email address");
      return;
    }

    alert("✅ Form submitted successfully!");
  };

  return (
    <main className={styles.body}>
      <Navbar />
      <BackButton fallbackHref="/components/events/comedy" top="96px" />
      <div className={styles.contenar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Enter your Ph.no.:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Enter your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Submit" className={styles.btn} />
      </form>
      </div>
    <Footer />
    </main>
  );
}