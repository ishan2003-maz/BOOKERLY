"use client";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import styles from "../../../../../styles/events/comedy/openmic/page.module.css";
import BackButton from "../../../back-button";
import Navbar from "../../../home/navbar";
import { MovieBookingModal } from "../../../movieBookingModel";

export default function OpenMic() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar />
      <BackButton fallbackHref="/components/events/comedy" top="96px" />
      <main className={styles.container}>
      <h1 className={styles.heading}>Stand-Up Comedy Open Mic</h1>
      <img src="/open_mic_comedy.jpg" alt="Openmic" className={styles.img}/>
      <section className={styles.details}>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> 18 Jul – 27 Jul</p>
        <p><strong><IoMdTime size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 7:30 PM</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 20min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Age Limit - 18+</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Hindi</p>
        <p><strong><CiLocationOn size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Madbee Comedy Club, Kolkata</p>
        <p><span className={styles.price}>₹299</span></p>
        <MovieBookingModal
          movieTitle="Stand-Up Comedy Open Mic"
          dates={["Fri 18 Jul 2025", "Sun 20 Jul 2025", "Sun 27 Jul 2025"]}
          times={["6:00 PM", "7:30 PM", "8:45 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Event</h2>
        <p>
          Join us for an evening of laughter at the Stand-Up Comedy Open Mic! 
          Experience new talents and seasoned comedians sharing their funniest takes on life, love, and everything in between. 
          Perfect for comedy lovers who enjoy discovering raw humor and real punchlines!
        </p>
      </section>
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
  )
}
