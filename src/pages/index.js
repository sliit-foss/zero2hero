import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";
import "../css/globals.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={`row ${styles.heroItemRow}`}>
          <div className={`col justify-start align-start ${styles.heroInfoColumn}`}>
            <div className={`${styles.heroTitle1}`}>ZERO</div>
            <div className={`${styles.heroTitle2}`}>2HERO</div>
            <p className={`hero__subtitle text-left ${styles.heroDescrip}`}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={`button button--secondary button--lg ${styles.btnGetStarted}`}
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
          </div>
          <img src="img/home/heroImage.svg" className={`${styles.heroImg}`}></img>
        </div>
      </div>
    </header>
  );
}

function HomepageContact() {
  return (
    <div className={`w-full flex justify-center align-center ${styles.contactCard}`}>
      <div className={`container row justify-between align-center ${styles.contactRow}`}>
        <div className={`text-left ${styles.txtContact}`}>
          Want to make an impact to the community?
        </div>
        <div className={`${styles.btnContact}`}>Contact Us</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageContact />
    </Layout>
  );
}
