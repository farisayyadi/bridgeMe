"use client";

import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact-us.png"
          alt="Contact- Us"
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
