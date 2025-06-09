import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.footerContent}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <Link href="/">
              <Image className={styles.image} src="/Logo.png" alt="BridgeMe Logo" fill />
            </Link>
          </div>
          <p className={styles.brandDescription}>
            Empowering connections and inspiring growth. Join our community of service providers
            and discover amazing opportunities in your area.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.footerSection}>
          <h4>Services</h4>
          <div className={styles.footerLinks}>
            <Link href="/services" className={styles.footerLink}>Browse Services</Link>
            <Link href="/providers" className={styles.footerLink}>Become a Provider</Link>
            <Link href="/categories" className={styles.footerLink}>Categories</Link>
            <Link href="/featured" className={styles.footerLink}>Featured Services</Link>
          </div>
        </div>

        {/* Company Section */}
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <div className={styles.footerLinks}>
            <Link href="/about" className={styles.footerLink}>About Us</Link>
            <Link href="/blog" className={styles.footerLink}>Blog</Link>
            <Link href="/contact" className={styles.footerLink}>Contact</Link>
            <Link href="/careers" className={styles.footerLink}>Careers</Link>
          </div>
        </div>

        {/* Support Section */}
        <div className={styles.footerSection}>
          <h4>Support</h4>
          <div className={styles.footerLinks}>
            <Link href="/help" className={styles.footerLink}>Help Center</Link>
            <Link href="/safety" className={styles.footerLink}>Safety</Link>
            <Link href="/community" className={styles.footerLink}>Community</Link>
            <Link href="/feedback" className={styles.footerLink}>Feedback</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          © {currentYear} BridgeMe. All rights reserved.
        </div>
        <div className={styles.legalLinks}>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          <Link href="/cookies" className={styles.legalLink}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
