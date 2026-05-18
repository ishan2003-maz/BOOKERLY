"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/history/page.module.css";
import BackButton from "../back-button";
import { getAuthSession } from "../../../lib/auth";
import { buildApiUrl } from "../../../lib/api";

export default function History() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentSession = getAuthSession();

    if (!currentSession || currentSession.role !== "user") {
      router.push("/components/login");
      return;
    }

    setSession(currentSession);

    const loadHistory = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          buildApiUrl(`/api/bookings/history/${currentSession.id}`)
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load booking history.");
        }

        setBookingHistory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHistory();
  }, [router]);

  if (!session) {
    return <div className={styles.statusMessage}>Redirecting...</div>;
  }

  return (
    <div className={styles.container}>
      <BackButton fallbackHref="/components/homepage" top="96px" />
      <h1 className={styles.heading}>My Purchase History</h1>
      <p className={styles.subheading}>
        {session.name}, here are your latest event and service bookings.
      </p>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Booking History</h2>
        {isLoading ? (
          <p className={styles.statusMessage}>Loading your bookings...</p>
        ) : bookingHistory.length > 0 ? (
          <div className={styles.historyList}>
            {bookingHistory.map((booking) => (
              <div key={booking.id} className={styles.historyItem}>
                <div className={styles.historyHeader}>
                  <span className={styles.bookingType}>
                    {booking.bookingType === "event" ? "Event Booking" : "Service Booking"}
                  </span>
                  <span className={styles.bookingStatus}>{booking.status}</span>
                </div>
                <h3 className={styles.eventName}>{booking.title}</h3>
                <p><strong>Category:</strong> {booking.category}</p>
                <p><strong>Scheduled For:</strong> {booking.scheduleLabel}</p>
                <p><strong>Contact Number:</strong> {booking.contactNumber || "Not provided"}</p>
                <p>
                  <strong>Booked On:</strong>{" "}
                  {booking.createdAt
                    ? new Date(booking.createdAt).toLocaleString()
                    : "Unknown"}
                </p>
                <p><strong>Booking Ref:</strong> {booking.id.slice(-6).toUpperCase()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.statusMessage}>
            No bookings found yet. Book an event or service after logging in and it will appear here.
          </p>
        )}
      </div>
    </div>
  );
}
