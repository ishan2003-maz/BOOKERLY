"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/services/page.module.css";
import Navbar from "../home/navbar";
import BackButton from "../back-button";
import { buildApiUrl } from "../../../lib/api";
import { getAuthSession } from "../../../lib/auth";

export default function Services() {
    const router = useRouter();
    const contactNumber = "+91 9999988888";
    const services = [
        {
            name: "DJ Entertainment",
            image: "/dj_img1.jpeg",
            accent: "#7a4aff",
            softAccent: "rgba(122, 74, 255, 0.12)",
            description:
                "Book professional DJs for weddings, college fests, private parties, and stage events. We help create the right mood with curated music, smooth sound flow, and crowd-friendly energy.",
        },
        {
            name: "Catering Service",
            image: "/catering_img4.png",
            accent: "#ff4d6d",
            softAccent: "rgba(255, 77, 109, 0.12)",
            description:
                "Choose catering support for small gatherings or large celebrations with menu planning, food presentation, and dependable service that keeps guests comfortable throughout the event.",
        },
        {
            name: "Event Lighting",
            image: "/lighting_img1.jpg",
            accent: "#00a6c7",
            softAccent: "rgba(0, 166, 199, 0.12)",
            description:
                "Set the right atmosphere with lighting designed for stages, receptions, dance floors, and indoor venues. Good lighting improves the look of the space and the overall guest experience.",
        },
        {
            name: "Event Decor",
            image: "/decor_img3.jpg",
            accent: "#ff9f43",
            softAccent: "rgba(255, 159, 67, 0.14)",
            description:
                "Decor services help shape the full visual theme of your event with backdrops, table styling, floral arrangements, and entrance setups that make the venue look polished and inviting.",
        },
        {
            name: "Event Security",
            image: "/security_img4.jpg",
            accent: "#2a8a61",
            softAccent: "rgba(42, 138, 97, 0.14)",
            description:
                "Keep your event safe and organized with support for guest entry, crowd flow, access control, and general on-ground coordination by trained security staff.",
        },
    ];
    const openingHours = "Mon - Sat, 10:00 AM - 6:00 PM";
    const appointmentDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const appointmentTimes = [
        "10:00 AM",
        "11:30 AM",
        "1:00 PM",
        "3:30 PM",
        "5:00 PM",
    ];
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [selectedService, setSelectedService] = useState("DJ Entertainment");
    const [selectedDay, setSelectedDay] = useState(appointmentDays[0]);
    const [selectedTime, setSelectedTime] = useState(appointmentTimes[0]);
    const [clientNumber, setClientNumber] = useState("");
    const [copyStatus, setCopyStatus] = useState("Copy Number");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openContactPopup = (serviceName) => {
        const session = getAuthSession();

        if (!session || session.role !== "user") {
            alert("Please log in with a user account before booking a service.");
            router.push("/components/login");
            return;
        }

        setSelectedService(serviceName);
        setSelectedDay(appointmentDays[0]);
        setSelectedTime(appointmentTimes[0]);
        setClientNumber(session.phone || "");
        setCopyStatus("Copy Number");
        setShowContactPopup(true);
    };

    const closeContactPopup = () => {
        setShowContactPopup(false);
    };

    const handleCopyNumber = async () => {
        try {
            await navigator.clipboard.writeText(contactNumber);
            setCopyStatus("Copied");
        } catch (error) {
            setCopyStatus("Copy Failed");
        }
    };

    const handleAppointmentBooking = async () => {
        if (!clientNumber.trim()) {
            alert("Please enter your phone number before booking an appointment.");
            return;
        }

        const session = getAuthSession();

        if (!session || session.role !== "user") {
            alert("Please log in again before completing your service booking.");
            setShowContactPopup(false);
            router.push("/components/login");
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch(buildApiUrl("/api/bookings/services"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: session.id,
                    serviceName: selectedService,
                    clientNumber: clientNumber.trim(),
                    selectedDay,
                    selectedTime,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Unable to book this service.");
            }

            alert(
                `Appointment requested for ${selectedService}\nClient number: ${clientNumber}\nDay: ${selectedDay}\nTime: ${selectedTime}\nContact: ${contactNumber}`
            );
            setShowContactPopup(false);
        } catch (error) {
            alert(error.message || "Unable to connect to the backend server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <BackButton fallbackHref="/components/events/comedy" top="96px" />
            <main className={styles.body}>
                <section className={styles.heroSection}>
                    <p className={styles.eyebrow}>Services</p>
                    <h1 className={styles.services}>Event support that feels polished, flexible, and easy to book.</h1>
                    <p className={styles.lead}>
                        Explore easy-to-book services for music, food, decor, lighting, and event safety.
                        Each card explains clearly what the service is for and how it can support your event.
                    </p>
                </section>

                <section className={styles.serviceGrid}>
                    {services.map((service, index) => (
                        <article
                            key={service.name}
                            className={styles.serviceCard}
                            style={{
                                "--service-accent": service.accent,
                                "--service-soft": service.softAccent,
                            }}
                        >
                            <div className={styles.cardBadge}>Signature Service</div>
                            <div className={styles.cardMedia}>
                                <img src={service.image} alt={service.name} className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{service.name}</h2>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <div className={styles.cardMetaRow}>
                                    <span className={styles.metaChip}>Easy booking</span>
                                    <span className={styles.metaChip}>Event-ready support</span>
                                    <span className={styles.metaChip}>Fast coordination</span>
                                </div>
                                <button
                                    type="button"
                                    className={styles.cardButton}
                                    onClick={() => openContactPopup(service.name)}
                                >
                                    Book Consultation
                                </button>
                            </div>
                            <div className={styles.cardGlow} aria-hidden="true" />
                        </article>
                    ))}
                </section>

                {showContactPopup && (
                    <div
                        className={styles.contactPopupOverlay}
                        onClick={closeContactPopup}
                        role="presentation"
                    >
                        <div
                            className={styles.contactPopup}
                            onClick={(event) => event.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="services-contact-title"
                        >
                            <button
                                type="button"
                                className={styles.closePopupButton}
                                onClick={closeContactPopup}
                                aria-label="Close contact popup"
                            >
                                x
                            </button>

                            <p className={styles.contactEyebrow}>Service Assistance</p>
                            <h2 id="services-contact-title" className={styles.contactTitle}>
                                {selectedService}
                            </h2>
                            <p className={styles.contactText}>
                                Book an appointment during our standard opening hours or contact our team directly.
                            </p>

                            <div className={styles.openingHoursCard}>
                                <span>Standard opening hours</span>
                                <strong>{openingHours}</strong>
                            </div>

                            <div className={styles.contactFormGrid}>
                                <label className={styles.fieldLabel}>
                                    Your phone number
                                    <input
                                        type="tel"
                                        className={styles.fieldInput}
                                        placeholder="Enter your number"
                                        value={clientNumber}
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength="15"
                                        onChange={(event) =>
                                            setClientNumber(event.target.value.replace(/\D/g, ""))
                                        }
                                        required
                                    />
                                </label>

                                <label className={styles.fieldLabel}>
                                    Preferred day
                                    <select
                                        className={styles.fieldInput}
                                        value={selectedDay}
                                        onChange={(event) => setSelectedDay(event.target.value)}
                                    >
                                        {appointmentDays.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className={styles.fieldLabel}>
                                    Preferred time
                                    <select
                                        className={styles.fieldInput}
                                        value={selectedTime}
                                        onChange={(event) => setSelectedTime(event.target.value)}
                                    >
                                        {appointmentTimes.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>

                            <button
                                type="button"
                                className={styles.bookAppointmentButton}
                                onClick={handleAppointmentBooking}
                                disabled={!clientNumber.trim() || isSubmitting}
                            >
                                {isSubmitting ? "Booking..." : "Book Appointment"}
                            </button>

                            <div className={styles.directContactCard}>
                                <span className={styles.contactNumberLabel}>Direct contact number</span>
                                <strong className={styles.contactNumber}>{contactNumber}</strong>
                                <div className={styles.contactActionRow}>
                                    <button
                                        type="button"
                                        className={styles.secondaryActionButton}
                                        onClick={handleCopyNumber}
                                    >
                                        {copyStatus}
                                    </button>
                                    <a className={styles.primaryCallButton} href="tel:+919999988888">
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </>
    );
}
