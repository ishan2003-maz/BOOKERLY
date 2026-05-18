import Navbar from "../components/home/navbar";
import Footer from "../components/footer/Footer";
import styles from "../../styles/about/page.module.css";

const highlights = [
  {
    title: "Thoughtful Planning",
    description:
      "We map every moment with care so guests enjoy a smooth, memorable experience from entry to closing applause.",
  },
  {
    title: "Trusted Partners",
    description:
      "From venues and catering to decor and entertainment, we work with dependable partners who value quality as much as we do.",
  },
  {
    title: "Flexible Experiences",
    description:
      "Whether you want tickets, workshops, private celebrations, or full-scale event services, Bookerly adapts to your needs.",
  },
];

const values = [
  "Clarity in communication and pricing",
  "Reliable coordination across bookings and services",
  "Creative experiences that still feel practical and organized",
  "Warm customer support before, during, and after an event",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>About Bookerly</p>
            <h1 className={styles.title}>We turn plans into polished, joyful experiences.</h1>
            <p className={styles.description}>
              Bookerly is built for people who want event discovery, booking, and service coordination
              to feel exciting without becoming stressful. From movie nights and comedy shows to
              workshops, sports events, decor, catering, and DJ services, we bring everything together
              in one place with a modern, dependable flow.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <img src="/aboutimage.jpg" alt="Bookerly event planning" className={styles.heroImage} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>What We Do</p>
            <h2>Built for bookings, designed for memories.</h2>
          </div>
          <div className={styles.cardGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyCard}>
            <p className={styles.sectionLabel}>Our Story</p>
            <h2>Why we created Bookerly</h2>
            <p>
              Great events deserve great coordination. We created Bookerly to make discovering and
              managing experiences feel less fragmented. Instead of jumping between scattered contacts,
              messages, and booking steps, users can explore categories, reserve their spot, and keep
              track of their history in one consistent experience.
            </p>
            <p>
              Our goal is simple: give users the confidence to book quickly, and give organizers a
              cleaner way to manage people, services, and event demand behind the scenes.
            </p>
          </div>

          <div className={styles.valuesCard}>
            <p className={styles.sectionLabel}>Our Values</p>
            <h2>What guides the platform</h2>
            <ul className={styles.valuesList}>
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.closingBanner}>
          <p className={styles.sectionLabel}>Bookerly Promise</p>
          <h2>Discover more, plan easier, celebrate better.</h2>
          <p>
            We’re here to make every booking feel clear, every service feel supported, and every event
            feel worth remembering.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
