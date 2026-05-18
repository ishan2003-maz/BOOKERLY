"use client";
import Image from "next/image";
import styles from "../../../styles/landing/page.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "../home/navbar";




export default function Landing() {
  

  return (
    <>
      <Navbar />

      <main>




      {/*Hero Section*/}
      <section className={styles.hero}>
        <img src="./heroBg.jpg" alt="There is a hero picture" className={styles.bg} />
        <div className={styles.overlay}></div>
        <div className={styles.textContent}>
          <p className={styles.topText}>BOOKERLY </p>
          <h1 className={styles.heading}>LET’S MAKE YOUR MEMORIES SPECIAL</h1>
          <p className={styles.subtext}>
            From ticket bookings to dazzling DJ nights — we do it all. Celebrate your story, your way, with expert planning.
          </p>
        </div>
      </section>


      {/*body*/}

      {/*Stats  Section*/}
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <h3>50,000+</h3>
          <p>Successful Events</p>
        </div>
        <div className={styles.statItem}>
          <h3>200+</h3>
          <p>Vendor Partners</p>
        </div>
        <div className={styles.statItem}>
          <h3>90%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className={styles.statItem}>
          <h3>17K+</h3>
          <p>Great Participants</p>
        </div>
      </section>

      {/*icons*/}
      <section className={styles.categories}>
        <h2 className={styles.bodyheading}>Explore Categories</h2>
        <div className={styles.categoryGrid}>
        {[
          { name: "Movies", icon: "/icons/movie.svg" },
          { name: "StandUp", icon: "/icons/comedy.svg" },
          { name: "Sports", icon: "/icons/sports.svg" },
          { name: "Workshops", icon: "/icons/workshop.svg"},
          { name: "DJ", icon: "/icons/dj.svg" },
          { name: "Catering", icon: "/icons/catering.svg" },
          { name: "Decoration", icon: "/icons/decoration.svg" },
          { name: "Security", icon: "/icons/security.svg" },
        ].map((item, index) => (
        <div
          key={index}
          className={`${styles.categoryItem} ${item.active ? styles.active : ""}`}
        >
        <div className={styles.iconCircle}>
          <img src={item.icon} alt={item.name} />
        </div>
          <p>{item.name}</p>
        </div>
          ))}
        </div>
      </section>



      {/* Events Section */}
      <div className={styles.body}>

          {/*Services Section*/}
          <section className={styles.section} id="services">
            <div className={styles.headerRow}>
              <h2 className={styles.bodyheading}>Our Events</h2>
              <div className={styles.viewall}>View All →</div>
            </div>
          <div className={styles.cardContainer}>
            {[
              { title: "Movie tickets", desc: "Get amazing Movie  ticket booking expirenece", image:"/card/movie.jpeg"},
              { title: "StandUp Comedy", desc: "Fill your day with laughter", image:"/card/comedy.jpg"},
              { title: "Sports", desc: "Fun-filled enjoyments", image:"/card/sports.jpeg" },
              { title: "Workshops", desc: "Let's learn something new", image:"/card/workshop.jpg" },
            ].map((service, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={130}
                  className={styles.cardimage} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className={styles.arrow}>→</span>
              </div>
            
            ))}
          </div>
          </section>

          <section className={styles.section} id="services">
        <div className={styles.headerRow}>
        <h2 className={styles.bodyheading}>Our Services</h2>
        <div className={styles.viewall}>View All →</div>
        </div>
        <div className={styles.cardContainer}>
          {[
            { title: "DJ", desc: "Be Chill and enjoy the party", image:"/card/dj.jpg"},
            { title: "Catering", desc: "Serve Good food with us", image:"/card/catering.jpg"},
            { title: "Decoration", desc: "Get premium decoration within your budget", image:"/card/decoration.jpeg" },
            { title: "Security", desc: "Contact with us", image:"/card/security.jpeg" },
          ].map((service, index) => (
            <div key={index} className={styles.card}>
              <Image
               src={service.image}
               alt={service.title}
               width={200}
               height={130}
               className={styles.cardimage} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className={styles.arrow}>→</span>
            </div>
            
          ))}
        </div>
      </section>
      

      {/*About Us*/}
      <section className={styles.about}>
        <h2>About Us</h2>
        <div className={styles.aboutcontainer}>
          <img src="./aboutimage.jpg" alt="There is a image" className={styles.aboutimage} />
          <div className={styles.aboutwriting}>
          <p>
          We are passionate event planners who believe every event should be
          unforgettable. With years of experience, we turn your ideas into
          reality.
          With our resources, relationships and knowledge - we execute with ease. Put the stress of logistics on us and we’ll make you shine in the end.
        </p>
        </div>
        </div>
        
      </section>

      
      {/* Testimonials Section */}
      <section className={styles.testimonials} id="testimonials">
        <h2 className={styles.bodyheading}>Listen from our customers</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <p>“Bookerly made our day so special! Highly recommended.”</p>
            <h4>- Priya</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>“Professional and creative—everything went smoothly.”</p>
            <h4>- Rahul</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>“A delightful experience from planning to execution!”</p>
            <h4>- Sneha</h4> 
          </div>
        </div>
      </section>

          {/*Gallery*/}
          <section className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.galleryGrid}>
          <Image src="/gallery1.jpg" width={300} height={200} alt="Gallery 1" className={styles.galleryGridimage} /> 
          <Image src="/gallery2.jpg" width={300} height={200} alt="Gallery 2" className={styles.galleryGridimage} />
          <Image src="/gallery3.jpg" width={300} height={200} alt="Gallery 3" className={styles.galleryGridimage}/>
        </div>
      </section>

    </div>

      </main>

    {/*Footer*/}
    <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Logo and Tagline */}
                <div className={styles.section}>
                    <img src="./logo1.png" alt="This is an logo" className={styles.logo} />
                    <p>EventX is your trusted partner in creating experiences that captivate hearts, spark joy, and become lifelong memories for you and your guests.From intimate gatherings to grand-scale productions, EventX ensures every moment of your event is a seamless blend of creativity, precision, and excellence.</p>
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
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="/components/contact">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                    </ul>
                </div>
                {/* Contact Details */}
                <div className={styles.section}>
                    <h4>Get in Touch</h4>
                    <p>Call:+91 98765 43210</p>
                    <p>Email: info@eventx.com</p>
                    <p>Visit: Kolkata, India</p>

                </div>
            </div>
            <div className={styles.copy}>
                <p>&copy; {new Date().getFullYear()} EventX. All rights reserved.</p>
            </div>
        </footer>
    </>
  );
}
