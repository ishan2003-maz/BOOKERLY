"use client";
import styles from "../../../../styles/admin/users/page.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaList, FaHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { getAuthSession, clearAuthSession } from "../../../../lib/auth";
import { buildApiUrl } from "../../../../lib/api";

export default function Users(){
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = getAuthSession();
    if (!session || session.role !== "admin") {
      router.push("/components/admin/adminlogin");
      return;
    }
    setIsAuthorized(true);

    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(buildApiUrl("/api/admin/users"));
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load users.");
        }

        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [router]);

  const handleLogout = () => {
    clearAuthSession();
    router.push("/components/admin/adminlogin");
  };

  if (!isAuthorized) {
    return <div>Redirecting...</div>;
  }

  const filteredUsers = users.filter((user) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.phone.toLowerCase().includes(query)
    );
  });

   return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>BOOKERLY</div>
        <ul className={styles.navList}>
          <a href="/components/admin/admindashboard"><li><FaList /> Dashboard</li></a>
          <a href="/components/admin/users"><li className={styles.active}><FaUser /> Users</li></a>
          <a href="/components/admin/events"><li><FaList /> Event Bookings</li></a>
          <a href="/components/admin/services"><li><FaList /> Service Bookings</li></a>
          <a href="/components/admin/feedback"><li><FaHeart /> Feedback</li></a>
        </ul>
        <div className={styles.logout} onClick={handleLogout} style={{cursor: 'pointer'}}><CiLogout />Log out</div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Registered Users</h1>
          <input
            type="text"
            placeholder="Search by name, email, or phone"
            className={styles.searchBar}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className={styles.profile}><FaUser /></div>
        </header>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Joined On</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5">Loading users...</td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5">No users found yet.</td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id.slice(-6).toUpperCase()}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone || "Not provided"}</td>
                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "Unknown"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </main>
        </div>
   );
}
