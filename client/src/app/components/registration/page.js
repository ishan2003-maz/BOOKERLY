"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../back-button"
import styles from "../../../styles/registration/page.module.css";
import { buildApiUrl } from "../../../lib/api";
import { saveAuthSession } from "../../../lib/auth";

export default function Registration() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all the fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(buildApiUrl("/api/auth/register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: username.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      saveAuthSession(data);

      alert("Registration successful!");
      router.push("/components/homepage");
    } catch (error) {
      alert(error.message || "Unable to connect to the backend server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.container}>
      <BackButton fallbackHref="/components/events/comedy" top="96px" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.h1}>Sign Up</h1>
        <label>UserName:</label>
        <input type="text"placeholder="Enter your name"value={username}onChange={(e) => setUsername(e.target.value)}required/>
        <label>Email:</label>
        <input type="email"placeholder="Enter your email"value={email}onChange={(e) => setEmail(e.target.value)}required/>
        <label>Phone:</label>
        <input type="tel" placeholder="Enter your number"value={phone}onChange={(e) => setPhone(e.target.value)}required/>
        <label>Password:</label>
        <input type="password"placeholder="Enter your password"value={password}onChange={(e) => setPassword(e.target.value)}required/>
        <label>Confirm Password:</label>
        <input type="password"placeholder="Confirm your password"value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}required/>
        <button className={styles.signup} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>
    </main>
  );
}
