"use client";
import Image from "next/image";
import styles from "../../../../styles/events/movie/page.module.css";
import Navbar from "../../home/navbar";
import BackButton from "../../back-button";
export default function Movie() {
    return (
        <main className={styles.page}>
            <Navbar />
            <BackButton fallbackHref="/components/events" top="96px" />
            <section className={styles.container}>
                <h1 className={styles.heading}>Book Movie Tickets</h1>
                <p className={styles.subheading}>Choose your favorite movie</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <a href="/components/events/movie/m1">
                            <img src="/inceptionlogo.jpg" alt="Inception"/>
                            <h2>Inception</h2>
                            <p>English</p>
                            <p className={styles.price}>₹299 onwards</p>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href="/components/events/movie/m2">
                            <img src="/jurassic.jpg" alt="Jurassic World Rebirth"/>
                            <h2>Jurassic World: Rebirth</h2>
                            <p>English/Hindi/Tamil/Telugu</p>
                            <p className={styles.price}>₹349 onwards</p>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href="/components/events/movie/m3">
                            <img src="/metro.jpg" alt="Metro In Dino"/>
                            <h2>Metro... In Dino</h2>
                            <p>Hindi</p>
                            <p className={styles.price}>₹249 onwards</p>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href="/components/events/movie/m4">
                            <img src="/fantasticfour.jpg" alt="The Fantastic Four"/>
                            <h2>The Fantastic Four</h2>
                            <p>English/Hindi/Tamil/Telugu</p>
                            <p className={styles.price}>₹399 onwards</p>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href="/components/events/movie/m5">
                            <img src="/maalik.jpg" alt="Maalik"/>
                            <h2>Maalik</h2>
                            <p>Hindi</p>
                            <p className={styles.price}>₹279 onwards</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
