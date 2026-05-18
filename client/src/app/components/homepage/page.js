"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/homepage/page.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "../home/navbar";
import Footer from "../footer/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
       {/*Hero Section*/}
             <section className={styles.hero}>
               <img src="/heroBg.jpg" alt="There is a hero picture" className={styles.bg} />
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
                 { name: "Movies", icon: "/icons/movie.svg", href: "/components/events/movie" },
                 { name: "StandUp", icon: "/icons/comedy.svg", href: "/components/events/comedy" },
                 { name: "Sports", icon: "/icons/sports.svg", href: "/components/events/sports" },
                 { name: "Workshops", icon: "/icons/workshop.svg", href: "/components/events/workshop"},
                 { name: "DJ", icon: "/icons/dj.svg", href: "/components/services" },
                 { name: "Catering", icon: "/icons/catering.svg", href: "/components/services" },
                 { name: "Decoration", icon: "/icons/decoration.svg", href: "/components/services" },
                 { name: "Security", icon: "/icons/security.svg", href: "/components/services" },
               ].map((item, index) => (
               <Link
                 key={index}
                 href={item.href}
                 className={`${styles.categoryItem} ${item.active ? styles.active : ""}`}
               > 
               <div className={styles.iconCircle}>
                 <img src={item.icon} alt={item.name} />
               </div>
                 <p>{item.name}</p>
               </Link>
                 ))}
               </div>
             </section>
       
       
       
             {/* Events Section */}
             <div className={styles.body}>
       
                 {/*Services Section*/}
                 <section className={styles.section} id="services">
                   <div className={styles.headerRow}>
                     <h2 className={styles.bodyheading}>Our Events</h2>
                     <Link href="/components/events" className={styles.viewall}>View All →</Link>
                   </div>
                 <div className={styles.cardContainer}>
                   {[
                     { title: "Movie tickets", desc: "Get amazing Movie  ticket booking expirenece", image:"/card/movie.jpeg", href: "/components/events/movie"},
                     { title: "StandUp Comedy", desc: "Fill your day with laughter", image:"/card/comedy.jpg", href: "/components/events/comedy"},
                     { title: "Sports", desc: "Fun-filled enjoyments", image:"/card/sports.jpeg", href: "/components/events/sports" },
                     { title: "Workshops", desc: "Let's learn something new", image:"/card/workshop.jpg", href: "/components/events/workshop" },
                   ].map((service, index) => (
                     <Link key={index} href={service.href} className={styles.card}>
                       <Image
                         src={service.image}
                         alt={service.title}
                         width={200}
                         height={130}
                         className={styles.cardimage} />
                       <h3>{service.title}</h3>
                       <p>{service.desc}</p>
                       <span className={styles.arrow}>→</span>
                     </Link>
                   
                   ))}
                 </div>
                 </section>
       
                 <section className={styles.section} id="services">
               <div className={styles.headerRow}>
               <h2 className={styles.bodyheading}>Our Services</h2>
               <Link href="/components/services" className={styles.viewall}>View All →</Link>
               </div>
               <div className={styles.cardContainer}>
                 {[
                   { title: "DJ", desc: "Be Chill and enjoy the party", image:"/card/dj.jpg", href: "/components/services"},
                   { title: "Catering", desc: "Serve Good food with us", image:"/card/catering.jpg", href: "/components/services"},
                   { title: "Decoration", desc: "Get premium decoration within your budget", image:"/card/decoration.jpeg", href: "/components/services" },
                   { title: "Security", desc: "Contact with us", image:"/card/security.jpeg", href: "/components/services" },
                 ].map((service, index) => (
                   <Link key={index} href={service.href} className={styles.card}>
                     <Image
                      src={service.image}
                      alt={service.title}
                      width={200}
                      height={130}
                      className={styles.cardimage} />
                     <h3>{service.title}</h3>
                     <p>{service.desc}</p>
                     <span className={styles.arrow}>→</span>
                   </Link>
                   
                 ))}
               </div>
             </section>
             
       
             {/*About Us*/}
             <section className={styles.about}>
               <h2>About Us</h2>
               <div className={styles.aboutcontainer}>
                 <img src="/aboutimage.jpg" alt="There is a image" className={styles.aboutimage} />
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

        <Footer />
    </>
  );
}
