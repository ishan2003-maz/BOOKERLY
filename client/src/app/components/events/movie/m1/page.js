"use client";
import { CiCalendar } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LuDrama } from "react-icons/lu";
import { LiaLanguageSolid } from "react-icons/lia";
import styles from "../../../../../styles/events/movie/m1/page.module.css";
import Navbar from "../../../home/navbar";
import BackButton from "../../../back-button";
import { MovieBookingModal } from "../../../movieBookingModel";
export default function m1() {
  return (
    <main className={styles.container}>
      <Navbar />
      <BackButton fallbackHref="/components/events/movie" top="96px" />
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/inceptionlogo.jpg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <h1 className={styles.heading}>Inception</h1>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Fri 20 Jun 2025</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 2hr 39min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Age Limit - 13 yrs +</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Hindi</p>
        <p className={styles.price}>Ticket Price: ₹299</p>
        <p><strong><LuDrama size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Comedy, Drama, Sports</p>
        <MovieBookingModal
          movieTitle="Inception"
          dates={["Fri 20 Jun 2025", "Sat 21 Jun 2025", "Sun 22 Jun 2025"]}
          times={["10:30 AM", "2:15 PM", "7:45 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Movie</h2>
        <p>
        A mind-bending sci-fi thriller from director Christopher Nolan, Inception explores the world of dreams within dreams.
        With stunning visuals, a gripping plot, and an unforgettable score, Inception will keep you questioning reality long after the credits roll.
        </p>
      </section>
      </div>
    </main>
  );
}
