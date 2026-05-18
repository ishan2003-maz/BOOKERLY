"use client";
import styles from "../../../../styles/admin/events/page.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaList, FaHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { getAuthSession, clearAuthSession } from "../../../../lib/auth";
import { buildApiUrl } from "../../../../lib/api";

export default function Events(){
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = getAuthSession();
    if (!session || session.role !== "admin") {
      router.push("/components/admin/adminlogin");
      return;
    }
    setIsAuthorized(true);

    const loadBookings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(buildApiUrl("/api/admin/event-bookings"));
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load event bookings.");
        }

        setBookings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBookings();
  }, [router]);

  const handleLogout = () => {
    clearAuthSession();
    router.push("/components/admin/adminlogin");
  };

  if (!isAuthorized) {
    return <div>Redirecting...</div>;
  }

  const filteredBookings = bookings.filter((booking) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    return (
      booking.eventName.toLowerCase().includes(query) ||
      booking.eventCategory.toLowerCase().includes(query) ||
      booking.userName.toLowerCase().includes(query) ||
      booking.userEmail.toLowerCase().includes(query)
    );
  });

   return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>BOOKERLY</div>
        <ul className={styles.navList}>
          <a href="/components/admin/admindashboard"><li><FaList /> Dashboard</li></a>
          <a href="/components/admin/users"><li><FaUser /> Users</li></a>
          <a href="/components/admin/events"><li className={styles.active}><FaList /> Event Bookings</li></a>
          <a href="/components/admin/services"><li><FaList /> Service Bookings</li></a>
          <a href="/components/admin/feedback"><li><FaHeart /> Feedback</li></a>
        </ul>
        <div className={styles.logout} onClick={handleLogout} style={{cursor: 'pointer'}}><CiLogout />Log out</div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Event Bookings</h1>
          <input
            type="text"
            placeholder="Search by event, category, or user"
            className={styles.searchBar}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className={styles.profile}><FaUser /></div>
        </header>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User</th>
              <th>Event Name</th>
              <th>Category</th>
              <th>Slot</th>
              <th>Booked On</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6">Loading event bookings...</td>
              </tr>
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan="6">No event bookings yet.</td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id.slice(-6).toUpperCase()}</td>
                  <td>
                    {booking.userName}
                    <br />
                    {booking.userEmail}
                  </td>
                  <td>{booking.eventName}</td>
                  <td>{booking.eventCategory}</td>
                  <td>{booking.selectedDate} at {booking.selectedTime}</td>
                  <td>
                    {booking.createdAt
                      ? new Date(booking.createdAt).toLocaleString()
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
