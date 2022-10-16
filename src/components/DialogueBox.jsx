import { useState } from "react";
import styles from "../sass/DialogueBox.module.sass";

function DialogueBox(props) {
  return (
    <>
      <div
        className={`${styles.backdrop}${
          props.show === true ? " " + styles.show : ""
        }`}
      >
        <div className={styles.box}>
          <div className={styles.title}>Coming Soon</div>
          <div className={styles.desc}>
            The page you are looking for is not implemented yet. Website is
            created for demo perpose.
          </div>
          <div className={styles.bottomBtns}>
            <button className={`${styles.btn} ${styles.white}`}>
              Contact Us
            </button>
            <button
              className={`${styles.btn} ${styles.red}`}
              onClick={props.closeHandle}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogueBox;
