import React from "react";
import styles from "./About.module.css";
import { aboutText } from "../../data";
import GridImages from "./GridImages";
import Modal from "./Modal"

function About() {
  return (
    <>
      <main className={styles.about_container}>
        <section className={styles.caroussel_box}>
          <GridImages />
          {/* <Modal /> */}
        </section>
        <section className={styles.about_text_box}>
          {aboutText.map((data, index) => {
            return (
              <>
                <h1 key={index}>{data.title}</h1>
                <p>{data.text}</p>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default About;
