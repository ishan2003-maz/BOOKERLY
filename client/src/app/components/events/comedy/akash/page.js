"use client";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import styles from "../../../../../styles/events/comedy/akash/page.module.css";
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
      <h1 className={styles.heading}>Aakash Gupta - Daily Ka Kaam Hai</h1>
      <div className={styles.flexRow}>
        <div className={styles.imageWrapper}>
          <img src="/aakash_gupta.jpg" alt="live" className={styles.img} />
        </div>
        <section className={styles.details}>
          <p><strong><CiCalendar size={25} style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 21 Jul – 25 Jul</p>
          <p><strong><IoMdTime size={25} style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 7:30 PM</p>
          <p><strong><GiDuration size={25} style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 1hr 45min</p>
          <p><strong><GoPeople size={25} style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 18+</p>
          <p><strong><LiaLanguageSolid size={25} style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> Hindi</p>
          <p><strong><CiLocationOn size={25} style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> The Comedy Theatre,Church Street Bengaluru</p>
          <p><strong></strong> <span className={styles.price}>₹399</span></p>
          <MovieBookingModal
            movieTitle="Aakash Gupta - Daily Ka Kaam Hai"
            dates={["Mon 21 Jul 2025", "Tue 22 Jul 2025", "Fri 25 Jul 2025"]}
            times={["5:00 PM", "7:30 PM", "9:15 PM"]}
          />
        </section>
        <section className={styles.about}>
          <h2>About the Event</h2>
          <p>
            “Daily Ka Kaam Hai” is Aakash Gupta’s deeply personal and hilariously relatable stand-up special.
            He walks the audience through everyday embarrassments—from childhood quirks to his first MNC job—showcasing
            stuck in awkward, tragicomic situations is literally his daily grind.
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
      

      {/* Modal (Pop-up) */}
      {/* <div id="bookingModal" className="modal">
        <div className="modal-content">
          <span className="close" id="closeModal">&times;</span>
          <h2>Book Your Ticket</h2>
          <form id="bookingForm">

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Enter your mobile number" pattern="[0-9]{10}" maxLength="10" required />

            <label htmlFor="movie">Selected event : </label>
            <select id="movie" required>
              <option>Aakash Gupta - Daily Ka Kaam Hai</option>
            </select>

            <label htmlFor="date">Select Date</label>
            <select id="date" required>
              <option>21 Jul</option>
              <option>22 Jul</option>
              <option>23 Jul</option>
              <option>24 Jul</option>
              <option>25 Jul</option>
            </select>

            <label htmlFor="tickets">No. of Tickets</label>
            <input type="number" id="tickets" min="1" max="10" required />

            <button type="submit" className="submit-btn">Confirm Booking</button>
          </form>
        </div>
      </div> */}

      </main>
    </>
  );
}

