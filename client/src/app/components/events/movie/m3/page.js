"use client";
import { CiCalendar } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LuDrama } from "react-icons/lu";
import { LiaLanguageSolid } from "react-icons/lia";
import styles from "../../../../../styles/events/movie/m3/page.module.css";
import Navbar from "../../../home/navbar";
import BackButton from "../../../back-button";
import { MovieBookingModal } from "../../../movieBookingModel";

export default function m3() {
  return (
    <main className={styles.container}>
      <Navbar />
      <BackButton fallbackHref="/components/events/movie" top="96px" />
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/metro.jpg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
      <h1 className={styles.heading}>Metro...In Dino</h1>
      <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Fri 4 Jul 2025</p>
      <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 2hr 13min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Age Limit - 13 yrs +</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Hindi, English</p>
        <p className={styles.price}>Ticket Price: ₹249</p>
        <p><strong><LuDrama size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Action, Sci-Fi, Thriller</p>
        <MovieBookingModal
          movieTitle="Metro...In Dino"
          dates={["Fri 4 Jul 2025", "Sat 5 Jul 2025", "Sun 6 Jul 2025"]}
          times={["9:45 AM", "1:30 PM", "6:50 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Movie</h2>
        <p>
        A musical hyperlink movie that weaves a tapestry of four urban stories of love, loyalty, and confusion at different stages of life. Quirky and humorous in tone, yet deeply emotional, the characters` overlapping journeys show that relationships face obstacles, but love endures.
        </p>
      </section>
      </div>
    </main>
  );
}
