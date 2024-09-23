import Link from "next/link";
// import Illustration from '../components/Illustration';
import styles from "../styles/HomePage.module.css";
import styling from "../styles/Home.module.css";
import art0 from "../public/art0.png";
import solidity from "../public/solidity.svg";
import Image from "next/image";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I SPIT</h1>
          <h1>CODE!</h1>
        </div>
        <d iv className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Somtochukwu</h1>
            <h6 className={styles.bio}>
              FullStack
              <span className={styles.w3b}> W3B</span>,
              <span className={styles.w2b}> W2B</span> Developer
            </h6>
            with
            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/solidity.svg"}></img>
                <div className={styling.skillText}>Solidity</div>
              </div>
              {/* Skill item for Solana Rust */}
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/cairo.png"}></img>
                <div className={styling.skillText}>Cairo</div>
              </div>
              {/* Skill item for WordPress */}
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/hardhat.svg"}></img>
                <div className={styling.skillText}>Hardhat</div>
              </div>

              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/ethers.svg"}></img>
                <div className={styling.skillText}>Ether.JS</div>
              </div>
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/web3js.svg"}></img>
                <div className={styling.skillText}>Web3JS</div>
              </div>

              {/* Skill item for Express.js */}
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/express.png"}></img>
                <div className={styling.skillText}>Express.js</div>
              </div>
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/react_icon.svg"}></img>
                <div className={styling.skillText}>React</div>
              </div>
              <div className={styling.skillItem}>
                <img className={styling.img} src={"/mongodb.svg"}></img>

                <div className={styling.skillText}>MongoDB</div>
              </div>
              {/*  */}
            </div>
            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>
                  View Work
                </button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>
                  My Resume
                </button>
              </Link>
            </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          {/* Logo image */}
          <div className={styling.imageWrapper + ""}>
            <Image
              src={art0}
              alt="Sarcastic Geek Logo"
              width={650}
              height={650}
              className={styling.myImg}
            />
          </div>
        </d>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
