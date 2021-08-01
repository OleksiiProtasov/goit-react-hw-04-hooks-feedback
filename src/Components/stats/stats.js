import React from "react";
import styles from "../stats/stats.css";

const Stats = ({ stats: { good, neutral, bad }, total, getPositive }) => {
  return (
    <>
      <p className={styles.item}> Good: {good} </p>
      <p className={styles.item}> Neutral: {neutral}</p>
      <p className={styles.item}> Bad: {bad} </p>
      <div className={styles.totalDiv}>
        <p className={styles.titleItem}>Total: {total} </p>
        <p className={styles.titleItem}>Positive percentage: {getPositive} %</p>
      </div>
    </>
  );
};
export default Stats;
