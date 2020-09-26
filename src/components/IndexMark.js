import React from "react";
import cx from "classnames";
import Proptypes from "prop-types";
import { useActiveIndexContext } from "../context";

import styles from "./IndexMark.module.scss";

export const IndexMark = ({ length, className }) => {
  const { activeIndex } = useActiveIndexContext();

  return (
    <div className={cx(styles.Index, className)}>
      {activeIndex + 1} / {length}
    </div>
  );
};

IndexMark.propTypes = {
  length: Proptypes.number.isRequired,
};
