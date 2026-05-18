"use client";
import Link from "next/link";
import styles from "../../../../styles/events/sports/page.module.css";
import Navbar from "../../home/navbar";
import BackButton from "../../back-button";

export default function Standup() {
    return (
        <>
            <Navbar />
            <BackButton fallbackHref="/components/events/comedy" top="96px" />
            <main className={styles.container}>
                <h1 className={styles.heading}>Book Sports Tickets</h1>
                <p className={styles.subheading}>Choose your sports event below</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Link href="/components/events/sports/indas" className={styles.cardLink}>
                            <img src="/india-vs-aus.avif" alt="india-vs-aus"/>
                            <h2>IND VS AUS</h2>
                            <p>English, Hindi</p>
                            <p>Eden Gardens, Kolkata</p>
                            <p className={styles.price}>₹1299 onwards</p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/components/events/sports/football" className={styles.cardLink}>
                            <img src="/football.jpg" alt="atkmb_vs_kb"/>
                            <h2>ISL: ATK Mohun Bagan vs Kerala Blasters</h2>
                            <p>English, Hindi</p>
                            <p>Salt Lake Stadium, Kolkata</p>
                            <p className={styles.price}>₹599 onwards</p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/components/events/sports/marathon" className={styles.cardLink}>
                            <img src="/kol_marathon.jpg" alt="kolkata_city_marathon"/>
                            <h2>Kolkata City Marathon</h2>
                            <p>All Languages</p>
                            <p>Red Row, Kolkata</p>
                            <p className={styles.price}>₹150 onwards</p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/components/events/sports/gp" className={styles.cardLink}>
                            <img src="/f1_screening.png" alt="f1_screening"/>
                            <h2>Screening of Formula 1 - Belgian GP</h2>
                            <p>English</p>
                            <p>Buffalo Wild Wings (Indiranagar), Bengaluru</p>
                            <p className={styles.price}>₹249 onwards</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
