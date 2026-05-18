"use client";
import { CiCalendar } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LuDrama } from "react-icons/lu";
import { LiaLanguageSolid } from "react-icons/lia";

import styles from "../../../../../styles/events/movie/m2/page.module.css";
import Navbar from "../../../home/navbar";
import BackButton from "../../../back-button";
import { MovieBookingModal } from "../../../movieBookingModel";

export default function m2() {
  return (
    <main className={styles.container}>
      <Navbar />
      <BackButton fallbackHref="/components/events/movie" top="96px" />
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/jurassic.jpg" alt="m2" className={styles.img}/>
      </div>
      <section className={styles.details}>
        <h1 className={styles.heading}>Jurassic World:Rebirth</h1>
        <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Fri 20 Jun 2025</p>
        <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 2hr 39min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Age Limit - 13 yrs +</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Hindi</p>
        <p className={styles.price}>Ticket Price: ₹349</p>
        <p><strong><LuDrama size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Comedy, Drama, Sports</p>
        <MovieBookingModal
          movieTitle="Jurassic World: Rebirth"
          dates={["Fri 20 Jun 2025", "Sat 21 Jun 2025", "Sun 22 Jun 2025"]}
          times={["11:00 AM", "3:10 PM", "8:30 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Movie</h2>
        <p>
        Five years after the events of Jurassic World Dominion, the planets ecology has proven largely inhospitable to dinosaurs. Those remaining exist in isolated equatorial environments with climates resembling the one in which they once thrived. The three most colossal creatures within that tropical biosphere hold the key to a drug that will bring miraculous life-saving benefits to humankind.

Academy Award nominee Johansson plays skilled covert operations expert Zora Bennett, contracted to lead a skilled team on a top-secret mission to secure genetic material from the worlds three most massive dinosaurs. When Zoras operation intersects with a civilian family whose boating expedition was capsized by marauding aquatic dinos, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery thats been hidden from the world for decades.
        </p>
      </section>
      </div>
    </main>
  );
}
