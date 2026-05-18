"use client";
import { CiCalendar } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LuDrama } from "react-icons/lu";
import { LiaLanguageSolid } from "react-icons/lia";

import styles from "../../../../../styles/events/movie/m4/page.module.css";
import Navbar from "../../../home/navbar";
import BackButton from "../../../back-button";
import { MovieBookingModal } from "../../../movieBookingModel";

export default function m4() {
  return (
    <main className={styles.container}>
      <Navbar />
      <BackButton fallbackHref="/components/events/movie" top="96px" />
      <div className={styles.flexRow}>
      <div className={styles.imageWrapper}>
      <img src="/fantasticfour.jpg" alt="live" className={styles.img}/>
      </div>
      <section className={styles.details}>
      <h1 className={styles.heading}>The Fantastic Four</h1>
      <p><strong><CiCalendar size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Fri 20 Jun 2025</p>
      <p><strong><GiDuration size={25}style={{ verticalAlign: "middle", marginRight: "6px" }} /></strong> 2hr 39min</p>
        <p><strong><GoPeople size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong> Age Limit - 13 yrs +</p>
        <p><strong><LiaLanguageSolid size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Hindi</p>
        <p><strong><LuDrama size={25}style={{ verticalAlign: "middle", marginRight: "6px" }}/></strong>Comedy, Drama, Sports</p>
        <MovieBookingModal
          movieTitle="The Fantastic Four"
          dates={["Fri 20 Jun 2025", "Sat 21 Jun 2025", "Sun 22 Jun 2025"]}
          times={["10:00 AM", "1:40 PM", "7:20 PM"]}
        />
      </section>
      <section className={styles.about}>
        <h2>About the Movie</h2>
        <p>
        Fantastic Four is a superhero movie franchise based on the iconic Marvel Comics team created by Stan Lee and Jack Kirby. 
        The story follows four scientists and explorers—Reed Richards, Sue Storm, Johnny Storm, 
        and Ben Grimm—who gain extraordinary powers after a scientific experiment goes wrong in space.</p>

        <p>Together, they become the Fantastic Four, using their powers to protect Earth from cosmic threats,
             powerful villains like Doctor Doom, and forces beyond human understanding.</p>

        <p>With themes of science, family, teamwork, and transformation, the Fantastic Four is often referred to as 
            "Marvel’s First Family", and continues to inspire fans across generations.</p>
      </section>
      </div>
    </main>
  );
}
