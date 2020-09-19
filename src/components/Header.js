import React from "react";
import cx from "classnames";

import styles from "./Header.module.scss";

import { Container } from "./Container";

export const Header = () => (
  <header className={cx(styles.Header)}>
    <Container>
      <h1>Responsive Image Gallery</h1>
    </Container>
  </header>
);
