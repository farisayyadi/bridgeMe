import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo}>
          <Image src="/Logo.png" alt="Logo" fill />
        </Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
