"use client";
import { useState, useRef, useEffect } from "react";
import styles from "../../../styles/forgotpassword/page.module.css";

export default function ForgotPassword() {
  const [method, setMethod] = useState("email");
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const linkRef = useRef(null);
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!value) {
      alert(`Please enter your ${method}.`);
      return;
    }
    alert(`OTP sent to your ${method}.`);
    setShowOtpSection(true); 
  };
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp) {
      alert(" Please enter the OTP.");
      return;
    }
    alert("OTP verified!");
    setOtpVerified(true);
  };
  useEffect(() => {
    if (otpVerified && linkRef.current) {
      linkRef.current.click();
    }
  }, [otpVerified]);

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.h1}>Forgot Password</h1>
        <label>Reset via:</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="email">Email</option>
          <option value="mobile">Mobile</option>
        </select>
        {method === "email" ? (
          <input type="email"placeholder="Enter your email"value={value}onChange={(e) => setValue(e.target.value)} required/>
        ) : (
          <input type="tel"placeholder="Enter your mobile number" value={value}onChange={(e) => setValue(e.target.value)}required/>
        )}
        <button onClick={handleSendOtp}>Send OTP</button>
        {showOtpSection && (<>
            <input type="text"placeholder="Enter OTP"value={otp}onChange={(e) => setOtp(e.target.value)}required style={{ marginTop: "15px" }}/>    
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
        {otpVerified && (
          <a href="/components/reset"ref={linkRef}style={{ display: "none" }}></a>          
        )}
      </form>
    </main>
  );
}