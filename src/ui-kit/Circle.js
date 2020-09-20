import React from "react";
import cx from "classnames";
import styles from "./Circle.module.scss";

export const Circle = ({ index, active, setActiveIndex }) => (
  <span
    className={cx(styles.Circle, {
      [styles.Active]: active,
    })}
    onClick={() => setActiveIndex(index)}
  />
);
