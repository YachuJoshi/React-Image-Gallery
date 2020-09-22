import React from "react";
import { PICTURES, MINIFIED, Length } from "../Content";
import { Container } from "../ui-kit";

import { Icons } from "./Icons";
import { PictureBoard } from "./PictureBoard";
import { Pagination } from "./Pagination";
import { ImageThumbnails } from "./ImageThumbnails";

import styles from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <Container className={styles.Container}>
      <PictureBoard pictures={PICTURES} />
      <Icons maxLength={PICTURES.length - 1} />
      <Pagination size={Length} />
      <ImageThumbnails pictures={MINIFIED} />
    </Container>
  );
};
