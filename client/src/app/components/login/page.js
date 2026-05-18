"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../back-button"
import styles from "../../../styles/login/page.module.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { buildApiUrl } from "../../../lib/api";
import { saveAuthSession } from "../../../lib/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(buildApiUrl("/api/auth/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      saveAuthSession(data);
      alert("Login successful!");
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
        <h1 className={styles.h1}>Login</h1>
        <div className={styles.inputWithIcon}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputWithIcon}>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <FaLock className={styles.icon} />

        </div>
        <div className={styles.rem}>
          <label className={styles.ch}>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="/components/forgotpassword">Forgot Password?</a>
        </div>
        <button className={styles.login} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        <div className="reglink">
          <p>Don't have an account<a className={styles.rlink} href="/components/registration"> Register</a></p>
        </div>
      </form>
    </main>
  );
}
