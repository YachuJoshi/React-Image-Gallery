import React from "react";
import { PICTURES, MINIFIED, Length } from "../Content";
import { Container } from "../ui-kit";

import styles from "./Gallery.module.scss";
import { Icons } from "./Icons";
import { PictureBoard } from "./PictureBoard";
import { CircleSelection } from "./CircleSelection";
import { ImageThumbnails } from "./ImageThumbnails";

export const Gallery = () => {
  return (
    <Container className={styles.Container}>
      <PictureBoard pictures={PICTURES} />
      <Icons maxLength={PICTURES.length - 1} />
      <CircleSelection size={Length} />
      <ImageThumbnails pictures={MINIFIED} />
    </Container>
  );
};
