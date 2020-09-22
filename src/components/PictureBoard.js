import React from "react";
import { Image } from "../ui-kit";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useActiveIndexContext } from "../context";

import styles from "./PictureBoard.module.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const PictureBoard = ({ pictures, interval, isLeftToRight }) => {
  const { activeIndex, setActiveIndex } = useActiveIndexContext();
  const direction = isLeftToRight ? "incremental" : "decremental";
  return (
    <>
      <div className={styles.Gallery}>
        {pictures.map((picture, index) => (
          <Image key={index} src={picture} alt="image-landscape" />
        ))}
      </div>

      <AutoPlaySwipeableViews
        enableMouseEvents
        interval={interval}
        direction={direction}
        index={activeIndex}
        onChangeIndex={() =>
          setActiveIndex(() => {
            if (activeIndex === pictures.length - 1) return 0;
            return activeIndex + 1;
          })
        }
        slideClassName={styles.GalleryMobile}
      >
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt="landscape"
            className={styles.Image}
          />
        ))}
      </AutoPlaySwipeableViews>
    </>
  );
};
