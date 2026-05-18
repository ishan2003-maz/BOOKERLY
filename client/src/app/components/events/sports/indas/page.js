"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/sports/indas/page.module.css";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import BackButton from "../../../back-button";
import { LiaLanguageSolid } from "react-icons/lia";
import Navbar from "../../../home/navbar";
import { MovieBookingModal } from "../../../movieBookingModel";
export default function CricketMatch() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar />
      <BackButton fallbackHref="/components/events/sports" top="96px" />
      <main className={styles.container}>
      <div className={styles.flexRow}>
        <div className={styles.imageWrapper}>
        <h1 className={styles.heading}>India vs Australia - T20 Match</h1>
          <img src="/india-vs-aus.avif" alt="Cricket Match" className={styles.img} />
        </div>

        <section className={styles.details}>
        
          <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 28 Jul – 30 Jul</p>
          <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 6:00 PM</p>
          <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 3hrs</p>
          <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> English, Hindi</p>
          <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Eden Gardens, Kolkata</p>
          <p><span className={styles.price}>₹1299</span></p>
          <MovieBookingModal
            movieTitle="India vs Australia - T20 Match"
            dates={["Mon 28 Jul 2025", "Tue 29 Jul 2025", "Wed 30 Jul 2025"]}
            times={["3:00 PM", "6:00 PM", "8:30 PM"]}
          />
        </section>

        <section className={styles.about}>
          <h2>About the Match</h2>
          <p>
            Witness an electrifying T20 showdown between India and Australia at the iconic Eden Gardens!
            Join the roar of the crowd, cheer for your team, and experience cricket like never before.
            Book your seats now for this high-voltage match!
          </p>
        </section>
      </div>
      <button className={styles.termsBtn} onClick={() => setShowPopup(true)}>Terms & Conditions</button>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Terms & Conditions</h2>
            <ul>
              <li>Tickets once booked cannot be cancelled or refunded.</li>
              <li>Please carry a valid ID proof for entry.</li>
              <li>Outside food & beverages are not allowed inside the venue.</li>
              <li>Management reserves the right to refuse entry.</li>
              <li>Seats will be allocated on a first-come-first-serve basis.</li>
              <li>Late entry may not be permitted after the show starts.</li>
              <li>Photography or video recording is strictly prohibited.</li>
            </ul>
            <button onClick={() => setShowPopup(false)} className={styles.closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}
      </main>
    </>
  );
}
