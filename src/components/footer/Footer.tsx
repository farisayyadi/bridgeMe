import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className={styles.image} src="/Logo.png" alt="Logo" fill />
        </Link>
      </div>
      <div className={styles.text}>
        <p>© 2024 BridgeMe. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
