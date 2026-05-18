"use client";
import { useState } from "react";
import styles from "../../../../../styles/events/workshop/w1/page.module.css";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
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
      <img src="/coil_pottery.jpg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Mon 21 Jul – Sun 10 Aug 2025</p>
        <p><strong><IoTimeOutline size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 12:30 PM</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 45min</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 7grams Cafe: Kolkata</p>
        <p><span className={styles.price}>₹599 onwards</span></p>
        <MovieBookingModal
          movieTitle="Coil Pottery Workshop"
          dates={["Mon 21 Jul 2025", "Sun 27 Jul 2025", "Sun 10 Aug 2025"]}
          times={["11:00 AM", "12:30 PM", "3:00 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Event</h2>
        <p>
          Discover the art of hand-building pottery with the ancient coil technique in this beginner-friendly workshop.
          Whether you're a curious first-timer or an art lover, this session invites you to shape, smooth, and
          decorate your very own ceramic masterpiece with your hands and a little clay magic.
        </p>
        <p>Led by experienced pottery instructors, this workshop will cover:</p>
        <ul className={styles.aboutList}>
          <li>Introduction to clay and tools</li>
          <li>Step-by-step coil building technique</li>
          <li>Shaping bowls, mugs, or planters</li>
          <li>Surface finishing and texturing tips</li>
        </ul>
        <p>All materials will be provided. Come solo or with friends, no prior experience is required.</p>
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
