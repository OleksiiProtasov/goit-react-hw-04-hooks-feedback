import React from "react";
import PropTypes from "prop-types";
import styles from "./containerStyle.module.css";

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
