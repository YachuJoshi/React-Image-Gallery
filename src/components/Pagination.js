import React from "react";
import PropTypes from "prop-types";
import { Circle } from "../ui-kit";

import styles from "./Pagination.module.scss";

export const Pagination = ({ pages }) => {
  return (
    <div className={styles.Pagination}>
      {pages.map((_, index) => (
        <Circle key={index} index={index} />
      ))}
    </div>
  );
};

Pagination.propTypes = { pages: PropTypes.arrayOf(PropTypes.number) };
