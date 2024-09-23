import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={project.image}
        height={300}
        width={600}
        alt={project.name}
      />
      <div className={styles.content}>
        <div>
          <h3>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              {project.name}
            </a>{" "}
            <a
              target={project.name}
              className="github"
              href={String(project.source_code)}
            >
              <GithubIcon fill={"rgb(106, 115, 125)"} className={styles.icon} />
            </a>
          </h3>
          <p>{project.description}</p>

          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
