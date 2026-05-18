"use client";
import Link from "next/link";
import styles from "../../../../styles/events/workshop/page.module.css";
import Navbar from "../../home/navbar";
import BackButton from "../../back-button";

export default function Standup() {
    return (
        <>
            <Navbar />
            <BackButton fallbackHref="/components/events/comedy" top="96px" />
            <main className={styles.container}>
                <h1 className={styles.heading}>Workshops Tickets</h1>
                <p className={styles.subheading}>Choose your workshop event below</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Link href="/components/events/workshop/w1" className={styles.cardLink}>
                            <img src="/coil_pottery.jpg" alt="coil_pottery"/>
                            <h2>Coil Pottery Workshop</h2>
                            <p>Bunosilo Artisanal:Saltlake, Kolkata</p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/components/events/workshop/w2" className={styles.cardLink}>
                            <img src="/boho_texture.jpg" alt="boho_texture"/>
                            <h2>Boho Texture Art</h2>
                            <p>Bengali, English, Hindi</p>
                            <p>Cafe Buddy`s Espresso, Kolkata</p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/components/events/workshop/w3" className={styles.cardLink}>
                            <img src="/canvas_art.jpeg" alt="canvas_art"/>
                            <h2>Canvas Painting</h2>
                            <p>English,Hindi</p>
                            <p>Bunosilo Artisanal:Saltlake, Kolkata</p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/components/events/workshop/w4" className={styles.cardLink}>
                            <img src="/coffeemugpainting.avif" alt="coffeemugpainting"/>
                            <h2>Coffee Mug Painting</h2>
                            <p>English,Hindi,Bengali</p>
                            <p>Blue tokai coffee, Jodhpur park, Kolkata</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
