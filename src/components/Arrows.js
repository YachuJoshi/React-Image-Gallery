import React from "react";
import cx from "classnames";
import { useActiveIndexContext } from "../context";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./Arrows.module.scss";

export const Arrows = ({ maxLength, className }) => {
  const { setActiveIndex } = useActiveIndexContext();
  return (
    <>
      <FiChevronLeft
        className={cx(styles.Icon, styles.Left, className)}
        onClick={() =>
          setActiveIndex((prevIndex) => {
            if (prevIndex === 0) return maxLength;
            return prevIndex - 1;
          })
        }
      />
      <FiChevronRight
        className={cx(styles.Icon, styles.Right, className)}
        onClick={() =>
          setActiveIndex((prevIndex) => {
            if (prevIndex === maxLength) return 0;
            return prevIndex + 1;
          })
        }
      />
    </>
  );
};
