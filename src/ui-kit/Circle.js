import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useActiveIndexContext } from "../context";

import styles from "./Circle.module.scss";

export const Circle = ({ index }) => {
  const { activeIndex, setActiveIndex } = useActiveIndexContext();
  return (
    <span
      className={cx(styles.Circle, {
        [styles.Active]: activeIndex === index,
      })}
      onClick={() => setActiveIndex(index)}
    />
  );
};

Circle.propTypes = {
  index: PropTypes.number.isRequired,
};
