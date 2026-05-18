"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/sports/marathon/page.module.css";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import BackButton from "../../../back-button";
import { LiaLanguageSolid } from "react-icons/lia";
import Navbar from "../../../home/navbar";
import { MovieBookingModal } from "../../../movieBookingModel";
export default function Marathon() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar />
      <BackButton fallbackHref="/components/events/sports" top="96px" />
      <main className={styles.container}>
      <div className={styles.flexRow}>
        <div className={styles.imageWrapper}>
        <h1 className={styles.heading}>Run for Fitness Marathon</h1>
          <img src="/kol_marathon.jpg" alt="Marathon Event" className={styles.img} />
        </div>

        <section className={styles.details}>
        
          <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 10 Aug 2025</p>
          <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 5:30 AM</p>
          <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 4hrs</p>
          <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Red Road, Kolkata</p>
          <p><span className={styles.price}>₹150</span></p>
          <MovieBookingModal
            movieTitle="Run for Fitness Marathon"
            dates={["Sun 10 Aug 2025", "Sun 17 Aug 2025"]}
            times={["5:30 AM", "6:15 AM"]}
          />
        </section>

        <section className={styles.about}>
          <h2>About the Event</h2>
          <p>
            Join thousands of runners from across the country in the Kolkata City Marathon 2025! 
            Whether you're a seasoned runner or a first-timer, this event offers something for everyone. 
            Run through the heart of Kolkata and celebrate health, community, and endurance.
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
