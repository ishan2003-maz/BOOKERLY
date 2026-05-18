"use client";
import Link from "next/link";
import styles from "../../../../styles/events/comedy/page.module.css";
import Navbar from "../../home/navbar";
import BackButton from "../../back-button";

export default function Standup() {
    return (
        <>
            <Navbar />
            <BackButton fallbackHref="/components/events/comedy" top="96px" />
            <main className={styles.container}>
            <h1 className={styles.heading}>Book Stand-Up Comedy Tickets</h1>
            <p className={styles.subheading}>Choose your favorite comedy show below</p>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <Link href="/components/events/comedy/openmic" className={styles.cardLink}>
                        <img src="/open_mic_comedy.jpg" alt="open_mic_comedy"/>
                        <h2>Stand-Up Comedy Open Mic</h2>
                        <p>Hindi</p>
                        <p>Madbee Comedy Club, Kolkata</p>
                        <p className={styles.price}>₹299 onwards</p>
                    </Link>
                   
                </div>
                <div className={styles.card}>
                    <Link href="/components/events/comedy/live" className={styles.cardLink}>
                        <img src="/rajat_sood.jpeg" alt="rajat_sood"/>
                        <h2>Rajat Sood Live</h2>
                        <p>Hindi</p>
                        <p>The Satire Club, Kolkata</p>
                        <p className={styles.price}>₹499 onwards</p>
                    </Link>
                   
                </div>
                <div className={styles.card}>
                    <Link href="/components/events/comedy/ravi" className={styles.cardLink}>
                        <img src="/ravi_gupta.webp" alt="ravi_gupta"/>
                        <h2>Ravi Gupta</h2>
                        <p>Hindi</p>
                        <p>Dhono Dhanyo Auditorium, Kolkata</p>
                        <p className={styles.price}>₹499 onwards</p>
                    </Link>
                    
                </div>
                <div className={styles.card}>
                    <Link href="/components/events/comedy/akash" className={styles.cardLink}>
                        <img src="/aakash_gupta.jpg" alt="aakash_gupta"/>
                        <h2>Aakash Gupta</h2>
                        <p>Hindi, English</p>
                        <p>Kala Mandir Auditorium, Kolkata</p>
                        <p className={styles.price}>₹399 onwards</p>
                    </Link>
                    
                </div>
            </div>
            </main>
        </>
    );
}
