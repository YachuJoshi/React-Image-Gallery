import React from "react";
import { Circle } from "../ui-kit";

import styles from "./Pagination.module.scss";

export const Pagination = ({ size }) => {
  return (
    <div className={styles.Pagination}>
      {size.map((_, index) => (
        <Circle key={index} index={index} />
      ))}
    </div>
  );
};
