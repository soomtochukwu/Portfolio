import Image from "next/image";
import styles from "../styles/About.module.css";
import brain from "../public/brain.jpg";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={brain}
              alt="About Me"
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>
              Smart Contract &amp; Web Developer
              <br />
              <span className={styles.scripting}>+web3 scripting</span>
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>Name: </strong>
                  Somtochukwu K. O.
                </span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>Niche: </strong>
                  Web3 Enthusiast
                </span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Nationality: </strong>
                  Nigeria 🇳🇬
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
              </li>
            </ul>
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Aliases: </strong>
                  Mazi, Agba-dev, Akwara
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Zodiac: </strong>
                  Cancer (12 July)
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Availability: </strong>
                  Freelance, Remote, & Hybrid
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
          Innovative and deadline-driven Developer with practical experience in
          researching and developing solutions that meet client satisfaction
          using the easiest, yet effective approach possible. I make the whole
          concept of developing, a whole vibe - A Normal Life is Boring.{" "}
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.textHead}>Skills</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>Solidity, Cairo</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "89%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>
                ReactJS, NextJS & React Native
              </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Tailwindcss & CSS </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "92%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>
                ExpressJS, NodeJS & MongoDB
              </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "65%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>
                EthersJS, WagmiSH, RainbowKit & Web3JS
              </span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Git & Github</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}
