import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Explorer.module.css";

const //
  explorerItems = [
    {
      name: "home.jsx",
      path: "/",
      icon: "react_icon.svg",
    },
    {
      name: "about.html",
      path: "/about",
      icon: "html_icon.svg",
    },
    {
      name: "resume.json",
      path: "/resume",
      icon: "json_icon.svg",
    },
    {
      name: "projects.js",
      path: "/projects",
      icon: "js_icon.svg",
    },
    {
      name: "github.md",
      path: "/github",
      icon: "markdown_icon.svg",
    },
  ],
  galleryItems = [
    {
      name: "gallery.jsx",
      path: "/gallery",
      icon: "art0.png",
    },
  ];
const Explorer = () => {
  const //
    [portfolioOpen, setPortfolioOpen] = useState(true),
    [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-gallery"
          checked={galleryOpen}
          onChange={() => setGalleryOpen(!galleryOpen)}
        />
        <label htmlFor="portfolio-gallery" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={galleryOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Gallery
        </label>
        <div
          className={styles.files}
          style={galleryOpen ? { display: "block" } : { display: "none" }}
        >
          {galleryItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
