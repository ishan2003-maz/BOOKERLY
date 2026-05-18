"use client";
import Image from "next/image";
import styles from "../../../styles/footer/page.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Tagline */}
        <div className={styles.section}>
          <img src="/logo1.png" alt="This is an logo" className={styles.logo} />
          <p>BOOKERLY is your trusted partner in creating experiences that captivate hearts, spark joy, and become lifelong memories for you and your guests.From intimate gatherings to grand-scale productions, EventX ensures every moment of your event is a seamless blend of creativity, precision, and excellence.</p>
          <div className={styles.follow}>FOLLOW US</div>
          <FaFacebookF className={styles.sociallinks1} />
          <FiInstagram className={styles.sociallinks} />
          <FaLinkedin className={styles.sociallinks} />
          <FaXTwitter className={styles.sociallinks} />
        </div>
        {/* Navigation Links */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/components/homepage">Home</a></li>
            <li><a href="/components/events">Events</a></li>
            <li><a href="/components/services">Services</a></li>
            <li><a href="/components/contactus">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        {/* Contact Details */}
        <div className={styles.section}>
          <h4>Get in Touch</h4>
          <div className={styles.contributorsGrid}>
            {[
              { name: "Aritra Ghosh", email: "2003aritraghosh@gmail.com", linkedin: "https://www.linkedin.com/in/aritra-ghosh-543770300/", photo: "/aritra.jpeg" },
              { name: "Ishan Mukherjee", email: "ishanmukherjee003@gmail.com", linkedin: "https://www.linkedin.com/in/ishan-mukherjee-02a117361/", photo: "/ishan.png" },
              { name: "Poulame Chatterjee", email: "poulamechatterjee@gmail.com", linkedin: "https://www.linkedin.com/in/poulame-chatterjee-3748782b4/", photo: "/poulame.png" },
              { name: "Sruti Shaw", email: "shruti46033@gmail.com", linkedin: "https://www.linkedin.com/in/shruti-shaw-54776b212/", photo: "/sruti.png" },
            ].map((contributor, index) => (
              <div key={index} className={styles.contributorCard}>
                {contributor.photo ? (
                  <Image
                    src={contributor.photo}
                    alt={contributor.name}
                    width={80}
                    height={80}
                    className={styles.profileImage}
                  />
                ) : (
                  <div className={styles.profileCircle}></div>
                )}
                <p className={styles.contributorName}>{contributor.name}</p>
                <div className={styles.iconContainer}>
                  <a href={`mailto:${contributor.email}`} title="Email">
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                  <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin className={styles.icon} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} BOOKERLY. All rights reserved.</p>
      </div>
    </footer>
  );
}
