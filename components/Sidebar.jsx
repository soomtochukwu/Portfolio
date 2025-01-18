import Link from "next/link";
import { useRouter } from "next/router";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import WhatsAppIcon from "./icons/WhatsappIcon";
import FacebookIcon from "./icons/FacebookIcon"; // Corrected import
import TikTokIcon from "./icons/TiktokIcon";
import styles from "../styles/Sidebar.module.css";
import LinkedInIcon from "./icons/LinkedInIcon";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: WhatsAppIcon,
    path: "https://wa.link/gos92y",
  },
  {
    Icon: TwitterIcon,
    path: "https://x.com/tweetSomto",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: LinkedInIcon,
    path: "https://www.linkedin.com/in/somtochukwu-ko/",
  },
  {
    Icon: MailIcon,
    path: "mailto:onwuajuesesomtochukwu@gmail.com",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }, index) => (
          <div key={index} className={styles.iconContainer}>
            <Link href={path} passHref>
              <a
                className={router.pathname === path ? styles.active : undefined}
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                  className={styles.icon}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }, index) => (
          <div key={index} className={styles.iconContainer}>
            <Link href={path} passHref>
              <a
                className={router.pathname === path ? styles.active : undefined}
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                  className={styles.icon}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
