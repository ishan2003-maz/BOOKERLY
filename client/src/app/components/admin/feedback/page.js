"use client";
import Image from "next/image";
import styles from "../../../../styles/admin/feedback/page.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaList, FaClock, FaHeart, FaCog } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { getAuthSession, clearAuthSession } from "../../../../lib/auth";

export default function Feedback(){
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const session = getAuthSession();
    if (!session || session.role !== "admin") {
      router.push("/components/admin/adminlogin");
      return;
    }
    setIsAuthorized(true);
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
          <a href="http://localhost:3000/components/admin/admindashboard"><li><FaList /> Dashboard</li></a>
          <a href="http://localhost:3000/components/admin/users"><li><FaUser /> Users</li></a>
          <a href="http://localhost:3000/components/admin/events"><li ><FaList /> Event List</li></a>
          <a href="http://localhost:3000/components/admin/services"><li><FaList /> Services</li></a>
          <a href="http://localhost:3000/components/admin/feedback"><li className={styles.active}><FaHeart /> Feedback</li></a>
        </ul>
        <div className={styles.logout} onClick={handleLogout} style={{cursor: 'pointer'}}><CiLogout />Log out</div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Dashboard</h1>
          <input type="text" placeholder="Search..." className={styles.searchBar} />
          <div className={styles.profile}><FaUser /></div>
        </header>

        <div className={styles.actions}>
          <button className={styles.addBtn}>Add New</button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>query</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Shruti Shaw</td>
              <td>shruti123@gmail.com</td>
              <td>Very good experience</td>
              <td>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        </main>
        </div>
   );
}
