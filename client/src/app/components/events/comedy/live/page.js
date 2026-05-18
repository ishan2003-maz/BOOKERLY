"use client";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import styles from "../../../../../styles/events/comedy/live/page.module.css";
import BackButton from "../../../back-button";
import Navbar from "../../../home/navbar";
import { MovieBookingModal } from "../../../movieBookingModel";

export default function live() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar />
      <BackButton fallbackHref="/components/events/comedy" top="96px" />
      <main className={styles.container}>
      <h1 className={styles.heading}>Rajat Sood Live</h1>
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/rajat_sood.jpeg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 21 Jul – 25 Jul</p>
        <p><strong><IoMdTime size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 7:30 PM</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 45min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 18+</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Hindi</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> The Comedy Theatre,Church Street Bengaluru</p>
        <p><span className={styles.price}>₹499</span></p>
        <MovieBookingModal
          movieTitle="Rajat Sood Live"
          dates={["Mon 21 Jul 2025", "Wed 23 Jul 2025", "Fri 25 Jul 2025"]}
          times={["6:30 PM", "7:30 PM", "9:00 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Event</h2>
        <p>
        Rajat Sood is one of India’s most acclaimed stand-up comedians, known for his sharp wit, relatable humor, and engaging storytelling style. 
        With years of experience performing across the country and internationally, Rajat brings a unique blend of observational comedy and social satire that resonates with audiences of all ages.
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
