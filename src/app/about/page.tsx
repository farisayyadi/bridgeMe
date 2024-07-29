import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>About Agency</h3>
        <h1 className={styles.title}>
          Bridging Communities: Connecting Helpers with Those in Need through
          BridgeMe
        </h1>
        <p className={styles.desc}>
          Founded in 2024 with a vision to foster a more supportive and
          interconnected society, BridgeMe is more than just a service; it's a
          lifeline for those who require assistance with daily tasks, projects,
          or navigating through unfamiliar territories.
          <br />
          Our mission is simple: to bridge the gap between those seeking help
          and those willing to lend a hand. Whether you're an elderly individual
          needing assistance with household chores, a newcomer to a foreign land
          seeking guidance, or someone with a disability requiring specialized
          support, BridgeMe is here to connect you with reliable and
          compassionate helpers.
          <br />
          At BridgeMe, we believe that everyone deserves access to the help they
          need, regardless of their background, abilities, or financial
          situation. That's why our platform offers a range of options, from
          paid services to volunteer opportunities, ensuring that assistance is
          accessible to all.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about-us.png" alt="About-Us" fill />
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Number of Users</p>
          </div>
          <div className={styles.box}>
            <h2>25 K+</h2>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h2>5 K+</h2>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
