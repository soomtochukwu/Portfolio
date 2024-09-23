import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import CheckIcon from "./icons/CheckIcon";
import NextjsIcon from "./icons/NextjsIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
import styles from "../styles/Bottombar.module.css";
const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/soomtochukwu/Portfolio.git"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={`${styles.icon} ${styles.dim}`} />
          <p className={`${styles.icon} ${styles.dim}`}>main</p>
        </a>
        <div className={`${styles.section} ${styles.dim}`}>
          <ErrorIcon className={`${styles.icon} ${styles.dim}`} />
          <WarningIcon className={`${styles.icon} ${styles.dim}`} />
        </div>
      </div>
      {/*  */}
      <div className={`${styles.container} ${styles.dim}`}>
        <div className={`${styles.section} ${styles.dim}`}>
          <NextjsIcon className={`${styles.icon} ${styles.dim}`} />
          <p>Powered by Next.js</p>
        </div>

        <div className={`${styles.section} ${styles.dim}`}>
          <p>UTF-8</p>
        </div>

        <div className={`${styles.section} ${styles.dim}`}>
          <p>{"{ }"} JavaScript JSX</p>
        </div>

        <div className={`${styles.section} ${styles.dim}`}>
          <CheckIcon className={`${styles.icon} ${styles.dim}`} />
          <p>Prettier</p>
        </div>

        <div className={`${styles.section} ${styles.dim}`}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
