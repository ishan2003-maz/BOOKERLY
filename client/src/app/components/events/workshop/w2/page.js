"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/workshop/w2/page.module.css";
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
      <h1 className={styles.heading}>Boho Texture Art</h1>
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/boho_texture.jpg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Sun 20 Jul 2025- 10 Aug 2025</p>
        <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 10:00 AM</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 30min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> All age groups</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Bengali, English, Hindi</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Blue Tokai Coffee, Jodhpur Park: Kolkata</p>
        <p><span className={styles.price}>₹1299</span></p>
        <MovieBookingModal
          movieTitle="Boho Texture Art"
          dates={["Sun 20 Jul 2025", "Sun 27 Jul 2025", "Sun 10 Aug 2025"]}
          times={["10:00 AM", "1:00 PM", "4:30 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Event</h2>
        <p>
          Dive into the world of earthy tones, layered textures, and creative calm at this hands-on
          <strong> Boho Texture Art Workshop</strong>. Perfect for beginners and art lovers, this workshop is all
          about creating beautiful wall art using texture paste, palette knives, and warm bohemian color palettes.
        </p>
        <p>You’ll learn:</p>
        <ul className={styles.aboutList}>
          <li>Basics of boho art and neutral palettes</li>
          <li>How to use texture paste and create layers</li>
          <li>Creating patterns using stencils and tools</li>
          <li>Finishing techniques for your wall-ready art</li>
        </ul>
        <p>No experience is needed. Just bring your creative vibe, and take your finished piece home with you.</p>
      </section>
      </div>
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
      </main>
    </>
  );
}
