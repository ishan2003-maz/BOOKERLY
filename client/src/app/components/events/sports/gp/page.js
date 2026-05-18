"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/sports/gp/page.module.css";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { LiaLanguageSolid } from "react-icons/lia";
import BackButton from "../../../back-button";
import Navbar from "../../../home/navbar";
import { MovieBookingModal } from "../../../movieBookingModel";

export default function gp() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar />
      <BackButton fallbackHref="/components/events/sports" top="96px" />
      <main className={styles.container}>
      <div className={styles.flexRow}>
        <div className={styles.imageWrapper}>
        <h1 className={styles.heading}>Screening of Formula 1 - Belgian GP</h1>
          <img src="/f1_screening.png" alt="Football Match" className={styles.img} />
        </div>

        <section className={styles.details}>
        
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 12 Aug, 2025</p>
        <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 6:00 PM</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 2hrs</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> English</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Buffalo Wild Wings (Indiranagar), Bengaluru</p>
        <MovieBookingModal
          movieTitle="Screening of Formula 1 - Belgian GP"
          dates={["Tue 12 Aug 2025", "Wed 13 Aug 2025"]}
          times={["4:00 PM", "6:00 PM", "8:15 PM"]}
        />
        </section>

        <section className={styles.about}>
          <h2>About the Match</h2>
          <p>
            Get ready for an adrenaline-pumping ISL face-off between ATK Mohun Bagan and Kerala Blasters!
            Be part of the crowd at Salt Lake Stadium, feel the passion, and cheer your team to glory.
            Limited seats available — book now!
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

