import React from "react";
import styles from "../Notification/notification.module.css";

const Notification = ({ message }) => (
  <h2 className={styles.messageItem}>{message}</h2>
);
export default Notification;
