"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../../styles/admin/adminlogin/page.module.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { buildApiUrl } from "../../../../lib/api";
import { saveAuthSession } from "../../../../lib/auth";

export default function Adminlogin() {
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

      const response = await fetch(buildApiUrl("/api/auth/admin/login"), {
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

      if (data.role !== "admin") {
        throw new Error("This account is not authorized for the admin dashboard.");
      }

      saveAuthSession(data);
      alert("Admin login successful!");
      router.push("/components/admin/admindashboard");
    } catch (error) {
      alert(error.message || "Unable to connect to the backend server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.h1}>Login</h1>
        <div className={styles.inputWithIcon}>
        <input type="email" placeholder="Admin email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputWithIcon}>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <FaLock className={styles.icon} />

        </div>
        <p></p>
        
        <button className={styles.login} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}
