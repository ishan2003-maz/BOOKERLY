"use client";
import { useState, useEffect, useRef } from "react";
import BackButton from "../back-button"
import styles from "../../../styles/resetpassword/page.module.css";
export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const linkRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Password reset successful!");
    setRedirectToLogin(true);
  };
  useEffect(() => {
    if (redirectToLogin && linkRef.current) {
      linkRef.current.click();
    }
  }, [redirectToLogin]);
  return (
    <main className={styles.container}>
      <BackButton fallbackHref="/components/events/comedy" top="96px" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.h1}>Reset Password</h1>
        <input type="password"placeholder="Enter new password"value={newPassword}onChange={(e) => setNewPassword(e.target.value)}required/>
        <input type="password"placeholder="Confirm new password"value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}required/>          
        <button type="submit">Reset Password</button>
        {redirectToLogin && (
          <a href="/components/login"ref={linkRef}style={{ display: "none" }}></a>
        )}
      </form>
    </main>
  );
}