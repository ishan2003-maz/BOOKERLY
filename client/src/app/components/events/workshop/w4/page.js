"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/workshop/w4/page.module.css";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
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
      <h1 className={styles.heading}>Coil Pottery Workshop</h1>
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/coffeemugpainting.avif" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Sat 2 Aug 2025 - Sun 31 Aug 2025</p>
        <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 12:30 PM</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> All age groups</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 30min</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Blue Tokai Coffee, Jodhpur Park:Kolkata</p>
        <p><span className={styles.price}>₹1299 onwards</span></p>
        <MovieBookingModal
          movieTitle="Coffee Mug Painting Workshop"
          dates={["Sat 2 Aug 2025", "Sun 17 Aug 2025", "Sun 31 Aug 2025"]}
          times={["10:30 AM", "12:30 PM", "4:00 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Event</h2>
        <p>
          Unleash your creativity and sip into art with our <strong>Coffee Mug Painting Workshop</strong>.
          Whether you're an artist at heart or just looking for a fun weekend activity, this event is perfect for
          all skill levels. Learn the basics of ceramic painting and create your own personalized coffee mug to take home.
        </p>
        <p>What’s included:</p>
        <ul className={styles.aboutList}>
          <li>1 ceramic coffee mug</li>
          <li>High-quality paints and brushes</li>
          <li>Aprons for mess-free painting</li>
          <li>Step-by-step guidance from a professional artist</li>
          <li>Tea or coffee with a light snack</li>
        </ul>
        <p>What you’ll learn:</p>
        <ul className={styles.aboutList}>
          <li>Basics of ceramic surface painting</li>
          <li>Color mixing and brush techniques</li>
          <li>Designing patterns, mandalas, doodles, or custom messages</li>
          <li>Fixing mistakes and sealing your artwork</li>
        </ul>
        <p>Your takeaway is a beautifully hand-painted coffee mug to cherish or gift someone special.</p>
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
