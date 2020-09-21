import React, { useState } from "react";
import { PICTURES, MINIFIED, Length } from "../Content";
import { Container } from "../ui-kit";

import styles from "./Gallery.module.scss";
import { Icons } from "./Icons";
import { PictureBoard } from "./PictureBoard";
import { CircleSelection } from "./CircleSelection";
import { ImageThumbnails } from "./ImageThumbnails";

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container className={styles.Container}>
      <PictureBoard pictures={PICTURES} activeIndex={activeIndex} />
      <Icons setActiveIndex={setActiveIndex} maxLength={PICTURES.length - 1} />
      <CircleSelection
        size={Length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ImageThumbnails
        pictures={MINIFIED}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Container>
  );
};
