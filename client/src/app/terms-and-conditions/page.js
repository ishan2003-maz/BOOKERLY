import Navbar from "../components/home/navbar";
import Footer from "../components/footer/Footer";
import styles from "../../styles/terms-and-conditions/page.module.css";

const sections = [
  {
    title: "Use of the Platform",
    points: [
      "Bookerly is intended for lawful browsing, booking, and service inquiries related to events and event-support services.",
      "Users must provide accurate personal information while registering, booking tickets, or requesting services.",
      "You are responsible for maintaining the privacy of your account activity on shared devices.",
    ],
  },
  {
    title: "Accounts and Login",
    points: [
      "Some bookings and service requests require you to be logged in with a valid user account.",
      "You must not impersonate another person or use false contact information while using the platform.",
      "We may restrict or suspend access if an account is used in a misleading, abusive, or fraudulent manner.",
    ],
  },
  {
    title: "Event Bookings",
    points: [
      "Event availability is subject to organizer schedules, venue limits, and platform updates.",
      "A confirmed booking reflects the slot, date, and time selected during checkout on the platform.",
      "Specific cancellation, refund, or entry conditions may differ by event and should be read on the event page before booking.",
    ],
  },
  {
    title: "Service Requests",
    points: [
      "Service bookings such as decor, catering, lighting, security, or DJ support are treated as appointment requests unless clearly stated otherwise.",
      "Submitting a request means you agree to be contacted for coordination, confirmation, or follow-up details.",
      "Final pricing, scope, and delivery timelines may depend on discussion, event size, location, and partner availability.",
    ],
  },
  {
    title: "Payments, Pricing, and Availability",
    points: [
      "Displayed pricing, where applicable, may change based on organizer updates, limited inventory, or service scope changes.",
      "Bookerly is not responsible for losses caused by incorrect details entered by the user during booking.",
      "Availability may change quickly for high-demand events or dates.",
    ],
  },
  {
    title: "Conduct and Content",
    points: [
      "Users must not misuse the website, attempt unauthorized access, or disrupt platform functionality.",
      "All branding, layouts, written content, and creative assets on the site remain protected by applicable rights and may not be copied without permission.",
      "We reserve the right to remove harmful, misleading, or abusive submissions and restrict related accounts.",
    ],
  },
  {
    title: "Contact and Updates",
    points: [
      "These terms may be updated as the platform grows, services evolve, or operational requirements change.",
      "Continued use of the platform after updates means you accept the revised terms.",
      "For support, users can reach out through the Contact Us page or the contact details listed in the footer.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Terms & Conditions</p>
          <h1 className={styles.title}>Simple ground rules for using Bookerly responsibly.</h1>
          <p className={styles.description}>
            These terms explain how users should access the platform, create accounts, place bookings,
            and request event-related services. They are written to support a safe, clear, and reliable
            experience for both customers and organizers.
          </p>
        </section>

        <section className={styles.notice}>
          <strong>Quick note:</strong> event-specific rules such as age limits, entry restrictions,
          cancellations, and refund policies may appear separately on individual event pages and should
          be reviewed before confirming a booking.
        </section>

        <section className={styles.sectionList}>
          {sections.map((section, index) => (
            <article key={section.title} className={styles.sectionCard}>
              <div className={styles.indexBadge}>{String(index + 1).padStart(2, "0")}</div>
              <div className={styles.sectionContent}>
                <h2>{section.title}</h2>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
