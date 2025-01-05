import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["education-section"]}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>
            Smart Contract Development (Cairo)
          </h4>
          <div>
            <a target="_blank" href={"https://x.com/Official_GIDA"}>
              Ginakev Digital Academy
            </a>
          </div>
          <div>2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>
            Smart Contract Development (Solidity)
          </h4>
          <a target="_blank" href={"https://www.blockchainunn.org/"}>
            BlockChainUNN
          </a>
          <div>
            <a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1bERUHOSVAZZ0fazE8Rxe9Zis-larUqYx/view"
              }
            >
              Certified
            </a>
          </div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>
            dAPP Building/Development (React, Wagmi, Ethers)
          </h4>
          <a target="_blank" href={"https://www.blockchainunn.org/"}>
            BlockChainUNN
          </a>
          <div>
            <a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1bERUHOSVAZZ0fazE8Rxe9Zis-larUqYx/view"
              }
            >
              Certified
            </a>
          </div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>
            SELF-THOUGHT FULL-STACK WEB2 DEV. WITH HTML, CSS, JAVASCRIPT, NODE,
            REACT, EXPRESS.JS & MONGODB
          </h4>
          <div>2019 - 2022</div>
        </div>
      </div>

      <div className={styles["work-section"]}>
        <h3 className={styles.heading}>Professional Experience</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Avalanche Workshop (2⨯)</h4>
          <div>Physical: Avalanche DAO, UNN</div>
          <div>One of Many Participants / Speaker</div>
          <div>2023 - 2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Team Governator</h4>
          <div>Hackathon: web3 bridge, Lagos</div>
          <div>Smart Contract Dev.</div>
          <div>2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Project Contriboost</h4>
          <div>Hackathon: Scroll Bounty</div>
          <div>Frontend Integrator and Smart Contract Dev.</div>
          <div>2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Team Cyberhack</h4>
          <div>Hackathon: Klaytn Bounty</div>
          <div>Frontend Integrator</div>
          <div>2023</div>
        </div>

        
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Team Cyberhack</h4>
          <div>Hackathon: BlockchainUNN Blockathon</div>
          <div>Smart contract and frontend developer</div>
          <div>2024</div>
        </div>
  
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Team SUI-DEN</h4>
          <div>Hackathon: SUI on campus </div>
          <div>Backend developer</div>
          <div>2024</div>
        </div>
  
      </div>
 <a href="javascript:window.print()">Download this as a PDF</a>

    </div>
  );
};

export default ContactPage;
