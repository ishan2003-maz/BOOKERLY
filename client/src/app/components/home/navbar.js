"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import styles from "../../../styles/home/navbar/page.module.css";
import { clearAuthSession, getAuthSession } from "../../../lib/auth";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const syncSession = () => {
      setIsLoggedIn(Boolean(getAuthSession()));
    };

    syncSession();
    window.addEventListener("focus", syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener("focus", syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setSidebarOpen(false);
    setIsLoggedIn(Boolean(getAuthSession()));
  }, [pathname]);

  const handleLogout = () => {
    clearAuthSession();
    setIsLoggedIn(false);
    setDropdownOpen(false);
    setSidebarOpen(false);
    router.push("/components/login");
  };

  return (
    <main>
      {/*Navbar*/}
      <nav className={styles.navbar}>
        <a href="/components/homepage">
          <img src="/logo1.png" alt="Company logo" className={styles.logo} />
        </a>
        <ul className={styles.ul1}>
          <li><a href="/components/homepage">HOME</a></li>
          <li className={styles.hideOnMobile}><a href="/components/events">EVENTS</a></li>
          <li className={styles.hideOnMobile}><a href="/components/services">SERVICES</a></li>
          <li className={styles.hideOnMobile}><a href="/components/contactus">CONTACT US</a></li>
          {!isLoggedIn ? (
            <li className={styles.hideOnMobile}><a href="/components/login">LOGIN</a></li>
          ) : (
            <li className={`${styles.hideOnMobile} ${styles.accountWrapper}`}>
              <FaUserCircle
                size={26}
                className={styles.accountIcon}
                onClick={() => setDropdownOpen((current) => !current)}
              />
              {dropdownOpen && (
                <div className={styles.dropdown}>
                  <a href="/components/myaccount"><span>My Account</span></a>
                  <a href="/components/history"><span>History</span></a>
                  <button type="button" className={styles.dropdownButton} onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
          <li className={styles.menu_button} onClick={() => setSidebarOpen(true)}><a href="#"><img src="/hambargar.jpg" alt="Open navigation menu" height="36" width="36"/></a></li>
        </ul>
        <ul className={styles.sidebar} style={{ display: sidebarOpen ? "flex" : "none" }}>
          <li className={styles.close_button} onClick={() => setSidebarOpen(false)}><a href="#"><img src="/cross.png" alt="Close navigation menu" height="26" width="26"/></a></li>
          <li><a href="/components/homepage">HOME</a></li>
          <li><a href="/components/events">EVENTS</a></li>
          <li><a href="/components/services">SERVICES</a></li>
          <li><a href="/components/contactus">CONTACT US</a></li>
          {!isLoggedIn ? (
            <li><a href="/components/login">LOGIN</a></li>
          ) : (
            <>
              <li><a href="/components/myaccount">MY ACCOUNT</a></li>
              <li><a href="/components/history">HISTORY</a></li>
              <li>
                <button type="button" className={styles.mobileLogoutButton} onClick={handleLogout}>
                  LOGOUT
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </main>
  );
}
