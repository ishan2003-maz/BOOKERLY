"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/workshop/w3/page.module.css";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LiaLanguageSolid } from "react-icons/lia";
import BackButton from "../../../back-button";
import Navbar from "../../../home/navbar";
import { MovieBookingModal } from "../../../movieBookingModel";
export default function live() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar />
      <BackButton fallbackHref="/components/events/workshop" top="96px" />
      <main className={styles.container}>
      <h1 className={styles.heading}>Canvas Painting</h1>
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/canvas_art.jpeg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Mon 21 Jul 2025 – Sat 16 Aug 2025</p>
        <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 11:30 AM</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 30min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> All age groups</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> English, Hindi</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 7grams Cafe: Kolkata</p>
        <p><span className={styles.price}>₹499 onwards</span></p>
        <MovieBookingModal
          movieTitle="Canvas Painting"
          dates={["Mon 21 Jul 2025", "Sat 2 Aug 2025", "Sat 16 Aug 2025"]}
          times={["11:30 AM", "2:00 PM", "5:00 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Event</h2>
        <p>
          Let your creativity shine in our <strong>Canvas Painting Workshop</strong>, designed for all skill levels.
          Whether you’re a beginner or someone who just wants to relax and paint, this workshop is the perfect way to
          unwind and create.
        </p>
        <p>You’ll explore:</p>
        <ul className={styles.aboutList}>
          <li>Color mixing and brushwork basics</li>
          <li>Step-by-step painting guided by a professional artist</li>
          <li>Composition and layering techniques</li>
          <li>Personalizing your artwork with your own flair</li>
        </ul>
        <p>Take home your painted canvas as a memory of your creative journey.</p>
      </section>
      <button className={styles.termsBtn} onClick={() => setShowPopup(true)}>Terms & Conditions</button>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Terms & Conditions</h2>
            <ul>
              <li>Workshop registrations are non-cancellable and non-refundable.</li>
              <li>Please carry a valid ID proof for entry.</li>
              <li>Participants are required to arrive at least 15 minutes before the workshop starts.</li>
              <li>Seats will be allotted on a first-come, first-serve basis.</li>
              <li>All workshop materials provided are for personal use only and cannot be shared or reproduced.</li>
              <li>Recording of the workshop (audio/video) is strictly prohibited.</li>
              <li>The organizer reserves the right to deny entry or remove participants for misconduct.</li>
              <li>The organizer is not responsible for personal belongings lost or damaged during the workshop.</li>
            </ul>
            <button onClick={() => setShowPopup(false)} className={styles.closeBtn}>Close</button>
          </div>
        </div>
      )}
      </div>
      </main>
    </>
  );
}
