import React from "react";
import { Circle } from "../ui-kit";

import styles from "./CircleSelection.module.scss";

export const CircleSelection = ({ size }) => {
  return (
    <div className={styles.CircleSelection}>
      {size.map((_, index) => (
        <Circle key={index} index={index} />
      ))}
    </div>
  );
};
