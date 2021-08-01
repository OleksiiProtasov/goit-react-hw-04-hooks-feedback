import React from "react";
import styles from "../Container/containerStyle.module.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FeedbackOptions = ({ onChangeStats }) => {
  return (
    <>
      <h1 className={styles.item}>Please leave feedback</h1>
      <ButtonGroup aria-label="contained primary button group">
        <Button
          style={{ backgroundColor: "greenyellow" }}
          type="button"
          name="good"
          className={styles.button_good}
          onClick={(e) => {
            onChangeStats(e.currentTarget.name);
          }}
        >
          good
        </Button>
        <Button
          style={{ backgroundColor: "yellow" }}
          type="button"
          name="neutral"
          className={styles.button_neutral}
          onClick={(e) => {
            onChangeStats(e.currentTarget.name);
          }}
        >
          neutral
        </Button>
        <Button
          style={{ backgroundColor: "red" }}
          type="button"
          name="bad"
          className={styles.button_bad}
          onClick={(e) => {
            onChangeStats(e.currentTarget.name);
          }}
        >
          bad
        </Button>
      </ButtonGroup>
    </>
  );
};
export default FeedbackOptions;
