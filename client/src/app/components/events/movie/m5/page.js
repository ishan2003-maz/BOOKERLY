"use client";
import { CiCalendar } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LuDrama } from "react-icons/lu";
import { LiaLanguageSolid } from "react-icons/lia";
import styles from "../../../../../styles/events/movie/m5/page.module.css";
import Navbar from "../../../home/navbar";
import BackButton from "../../../back-button";
import { MovieBookingModal } from "../../../movieBookingModel";
export default function m5() {
  return (
    <main className={styles.container}>
      <Navbar />
      <BackButton fallbackHref="/components/events/movie" top="96px" />
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/maalik.jpg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
      <h1 className={styles.heading}>Maalik</h1>
        <p><strong>Duration:</strong> 2hr 29min</p>
        <p><strong>Genre:</strong>Action, Crime, Drama, Thriller</p>
        <p><strong>Age Limit:</strong> UA16+</p>
        <p><strong>Language:</strong> Hindi</p>
        <p className={styles.price}>Ticket Price: ₹279</p>
        <p><strong>Released on:</strong> 11 Jul, 2025</p>
        <MovieBookingModal
          movieTitle="Maalik"
          dates={["Fri 11 Jul 2025", "Sat 12 Jul 2025", "Sun 13 Jul 2025"]}
          times={["11:20 AM", "4:00 PM", "9:10 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Movie</h2>
        <p>
        Maalik is a gritty Hindi-language action crime thriller, directed by Pulkit and helmed by lead actor 
        Rajkummar Rao (playing Deepak/Maalik), alongside Prosenjit Chatterjee, Manushi Chhillar, Huma Qureshi, 
        and Saurabh Shukla. </p>
        <p>
        Set in 1980s Allahabad, the film follows Deepak, a farmer’s son who becomes vengeance‑driven after 
        his father is attacked. His rise from a simple villager to the feared underworld figure “Maalik” 
        sets off a violent clash with corrupt politicians and law enforcement, 
        especially with Prabhu Das (Prosenjit Chatterjee), a suspended police officer aiming to bring him down.
        </p>
      </section>
      </div>
    </main>
  );
}
