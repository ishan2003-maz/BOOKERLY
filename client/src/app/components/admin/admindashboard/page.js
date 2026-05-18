"use client";
import styles from "../../../../styles/admin/admindashboard/page.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaList, FaHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { getAuthSession, clearAuthSession } from "../../../../lib/auth";
import { buildApiUrl } from "../../../../lib/api";

export default function Admindashboardpage(){
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalEventBookings: 0,
    totalServiceBookings: 0,
    totalAdmins: 0,
  });

  useEffect(() => {
    const session = getAuthSession();
    if (!session || session.role !== "admin") {
      router.push("/components/admin/adminlogin");
      return;
    }
    setAdminName(session.name || "Admin");
    setIsAuthorized(true);

    const loadSummary = async () => {
      try {
        const response = await fetch(buildApiUrl("/api/admin/summary"));
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load dashboard summary.");
        }

        setSummary(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadSummary();
  }, [router]);

  const handleLogout = () => {
    clearAuthSession();
    router.push("/components/admin/adminlogin");
  };

  if (!isAuthorized) {
    return <div>Redirecting...</div>;
  }
   return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>BOOKERLY</div>
        <ul className={styles.navList}>
          <a href="/components/admin/admindashboard"><li className={styles.active}><FaList /> Dashboard</li></a>
          <a href="/components/admin/users"><li><FaUser /> Users</li></a>
          <a href="/components/admin/events"><li ><FaList /> Event Bookings</li></a>
          <a href="/components/admin/services"><li><FaList /> Service Bookings</li></a>
          <a href="/components/admin/feedback"><li><FaHeart /> Feedback</li></a>
        </ul>
        <div className={styles.logout} onClick={handleLogout} style={{cursor: 'pointer'}}><CiLogout />Log out</div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>{adminName}'s Dashboard</h1>
          <input type="text" placeholder="Live data connected" className={styles.searchBar} readOnly />
          <div className={styles.profile}><FaUser /></div>
        </header>
        <section className={styles.cards}>
          <div className={styles.card}>
            <h2>Total Users</h2>
            <p>{summary.totalUsers}</p>
          </div>
          <div className={styles.card}>
            <h2>Event Bookings</h2>
            <p>{summary.totalEventBookings}</p>
          </div>
          <div className={styles.card}>
            <h2>Service Bookings</h2>
            <p>{summary.totalServiceBookings}</p>
          </div>
          <div className={styles.card}>
            <h2>Total Admins</h2>
            <p>{summary.totalAdmins}</p>
          </div>
        </section>
      </main>
    </div>
  ); 
}
