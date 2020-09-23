import React from "react";
import cx from "classnames";
import { Image } from "../ui-kit";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useActiveIndexContext } from "../context";

import styles from "./PictureBoard.module.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const PictureBoard = ({
  pictures,
  interval,
  isPlaying,
  className,
  mobileDimClassName,
}) => {
  const { activeIndex, setActiveIndex } = useActiveIndexContext();
  return (
    <>
      <div className={cx(styles.Gallery, className)}>
        {pictures.map((picture, index) => (
          <Image key={index} src={picture} alt="image-landscape" />
        ))}
      </div>

      <AutoPlaySwipeableViews
        enableMouseEvents
        autoplay={isPlaying}
        interval={interval}
        index={activeIndex}
        onChangeIndex={() =>
          setActiveIndex(() => {
            if (activeIndex === pictures.length - 1) return 0;
            return activeIndex + 1;
          })
        }
        slideClassName={cx(styles.GalleryMobile, mobileDimClassName)}
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
