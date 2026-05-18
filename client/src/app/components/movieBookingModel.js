"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { buildApiUrl } from "../../lib/api";
import { getAuthSession } from "../../lib/auth";

const styles = {
  triggerButton: {
    marginTop: "18px",
    padding: "0.9rem 1.4rem",
    background: "linear-gradient(135deg, #df334f, #8a2be2)",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
    minWidth: "180px",
    fontWeight: 700,
    letterSpacing: "0.02em",
    boxShadow: "0 14px 26px rgba(138, 43, 226, 0.22)",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background: "rgba(10, 14, 34, 0.68)",
    backdropFilter: "blur(6px)",
  },
  modal: {
    position: "relative",
    width: "min(100%, 640px)",
    padding: "30px",
    borderRadius: "28px",
    background:
      "radial-gradient(circle at top right, rgba(138, 43, 226, 0.14), transparent 34%), linear-gradient(180deg, #ffffff 0%, #f8f6ff 100%)",
    boxShadow: "0 30px 80px rgba(11, 15, 33, 0.28)",
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "40px",
    height: "40px",
    border: "none",
    borderRadius: "50%",
    background: "#eef1ff",
    color: "#29304f",
    fontSize: "1rem",
    cursor: "pointer",
  },
  eyebrow: {
    margin: "0 0 8px",
    fontSize: "0.82rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#8a2be2",
    fontWeight: 700,
  },
  title: {
    margin: 0,
    fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
    color: "#171b37",
  },
  subtitle: {
    margin: "10px 0 0",
    color: "#5a6388",
    lineHeight: 1.6,
  },
  section: {
    marginTop: "24px",
  },
  sectionTitle: {
    margin: "0 0 12px",
    fontSize: "1rem",
    color: "#21274b",
  },
  optionGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  optionButton: {
    border: "1px solid #d8dcf0",
    borderRadius: "16px",
    padding: "0.85rem 1rem",
    background: "#fff",
    color: "#2f355d",
    fontWeight: 600,
    cursor: "pointer",
  },
  optionButtonActive: {
    background: "linear-gradient(135deg, #df334f, #8a2be2)",
    borderColor: "transparent",
    color: "#fff",
    boxShadow: "0 14px 28px rgba(138, 43, 226, 0.2)",
  },
  summaryCard: {
    marginTop: "26px",
    padding: "16px 18px",
    borderRadius: "18px",
    background: "#f2f5ff",
    color: "#2a3153",
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  summaryLabel: {
    fontSize: "0.95rem",
    color: "#66709a",
  },
  confirmButton: {
    width: "100%",
    marginTop: "20px",
    padding: "1rem 1.2rem",
    border: "none",
    borderRadius: "18px",
    background: "#171b37",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 18px 34px rgba(23, 27, 55, 0.2)",
  },
};

export function MovieBookingModal({
  movieTitle = "Untitled Movie",
  dates = [],
  times = [],
}) {
  const router = useRouter();
  const pathname = usePathname();
  const availableDates = useMemo(
    () => (dates.length ? dates : ["Fri 20 Jun 2025"]),
    [dates]
  );
  const availableTimes = useMemo(
    () => (times.length ? times : ["10:30 AM"]),
    [times]
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(availableDates[0]);
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventCategory = useMemo(() => {
    if (pathname.includes("/movie/")) return "Movie";
    if (pathname.includes("/comedy/")) return "Comedy";
    if (pathname.includes("/sports/")) return "Sports";
    if (pathname.includes("/workshop/")) return "Workshop";
    return "Event";
  }, [pathname]);

  const openBooking = () => {
    const session = getAuthSession();

    if (!session || session.role !== "user") {
      alert("Please log in with a user account before booking an event.");
      router.push("/components/login");
      return;
    }

    setShowModal(true);
  };

  const handleConfirm = async () => {
    const session = getAuthSession();

    if (!session || session.role !== "user") {
      alert("Please log in again before completing your booking.");
      setShowModal(false);
      router.push("/components/login");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(buildApiUrl("/api/bookings/events"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.id,
          eventName: movieTitle,
          eventCategory,
          selectedDate,
          selectedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to book this event.");
      }

      alert(
        `Booking confirmed for "${movieTitle}"\nDate: ${selectedDate}\nTime: ${selectedTime}`
      );
      setShowModal(false);
    } catch (error) {
      alert(error.message || "Unable to connect to the backend server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openBooking}
        style={styles.triggerButton}
      >
        Book Tickets
      </button>

      {showModal && (
        <div
          style={styles.overlay}
          onClick={() => setShowModal(false)}
          role="presentation"
        >
          <div
            style={styles.modal}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="movie-booking-title"
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              style={styles.closeButton}
              aria-label="Close booking popup"
            >
              x
            </button>

            <p style={styles.eyebrow}>Select Your Show</p>
            <h2 id="movie-booking-title" style={styles.title}>
              {movieTitle}
            </h2>
            <p style={styles.subtitle}>
              Choose one available date and one time slot before continuing.
            </p>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Available dates</h3>
              <div style={styles.optionGrid}>
                {availableDates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    style={{
                      ...styles.optionButton,
                      ...(selectedDate === date ? styles.optionButtonActive : {}),
                    }}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Available timings</h3>
              <div style={styles.optionGrid}>
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    type="button"
                    style={{
                      ...styles.optionButton,
                      ...(selectedTime === time ? styles.optionButtonActive : {}),
                    }}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.summaryCard}>
              <span style={styles.summaryLabel}>Selected show</span>
              <strong>
                {selectedDate} at {selectedTime}
              </strong>
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              style={styles.confirmButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Confirming..." : "Confirm Selection"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
