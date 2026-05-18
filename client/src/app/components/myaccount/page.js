"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/myaccount/page.module.css";
import { getAuthSession, saveAuthSession } from "../../../lib/auth";
import BackButton from "../back-button";

export default function MyAccount() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formData, setFormData] = useState({ ...userData });

  useEffect(() => {
    const session = getAuthSession();
    if (!session || session.role !== "user") {
      router.push("/components/login");
      return;
    }

    const profile = {
      name: session.name || "",
      email: session.email || "",
      phone: session.phone || "",
    };

    setUserData(profile);
    setFormData(profile);
    setIsReady(true);
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUserData(formData);
    const existingSession = getAuthSession();
    if (existingSession) {
      saveAuthSession({ ...existingSession, ...formData });
    }
    setIsEditing(false);
    alert("Profile updated!");
  };

  if (!isReady) {
    return <div className={styles.statusMessage}>Redirecting...</div>;
  }

  return (
    <div className={styles.container}>
      <BackButton fallbackHref="/components/homepage" top="96px" />
      <h1 className={styles.heading}>My Account</h1>

      <div className={styles.card}>
        {!isEditing ? (
          <>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>

            <button className={styles.button} onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />

            <div className={styles.actions}>
              <button className={styles.button} onClick={handleSave}>
                Save
              </button>
              <button
                className={styles.cancel}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
