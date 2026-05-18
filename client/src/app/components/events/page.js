"use client";
import styles from "../../../styles/events/page.module.css";
import Navbar from "../home/navbar";
import BackButton from "../back-button";
export default function Event() {
    const eventCategories = [
        {
            href: "/components/events/movie",
            image: "/movie_img.png",
            alt: "Movie ticket booking",
            icon: "🎬",
            title: "Movie Tickets",
            description: "Reserve seats for trending releases, fan-favorite screenings, and weekend cinema plans in just a few taps.",
            tag: "Cinemas & Premieres",
        },
        {
            href: "/components/events/comedy",
            image: "/standupcomedy_img.jpg",
            alt: "Stand-up comedy show",
            icon: "🎤",
            title: "Stand-Up Comedy",
            description: "Find lively comedy nights featuring open mics, touring comics, and crowd-pleasing performances.",
            tag: "Live Entertainment",
        },
        {
            href: "/components/events/sports",
            image: "/sports_img.jpg",
            alt: "Sports event",
            icon: "🏏",
            title: "Sports Events",
            description: "Book thrilling match-day experiences for cricket, football, motorsport, and stadium energy with friends.",
            tag: "Match Day Access",
        },
        {
            href: "/components/events/workshop",
            image: "/workshop_img.jpg",
            alt: "Workshop event",
            icon: "🛠",
            title: "Workshops",
            description: "Join hands-on sessions designed for learning, creating, and discovering new hobbies in a guided setting.",
            tag: "Skill Building",
        },
    ];

    return(
        <main className={styles.page}> 
            <Navbar />
            <BackButton fallbackHref="/components/events/comedy" top="96px" />
            <section className={styles.content}>
                <div className={styles.heroCopy}>
                    <p className={styles.eyebrow}>Explore Events</p>
                    <h1 className={styles.h1}>Discover event categories that feel exciting, easy to browse, and ready to book.</h1>
                    <p className={styles.lead}>
                        From movie nights to live comedy, sports fixtures, and creative workshops,
                        choose the experience that fits your mood and start planning your next outing.
                    </p>
                </div>
                <div className={styles.grid}>
                    {eventCategories.map((category) => (
                        <a key={category.href} href={category.href} className={styles.card}>
                            <div className={styles.cardMedia}>
                                <img src={category.image} alt={category.alt}/>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>{category.tag}</span>
                                <h2>{category.icon} {category.title}</h2>
                                <p>{category.description}</p>
                                <span className={styles.cta}>Explore Category</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
