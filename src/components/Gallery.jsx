import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Image } from "./Image";
import { BodyText } from "./core";
import {
  showNav,
  hideNav,
  setScrollPosition as setScrollPositionAction,
  getGallery,
} from "../actions";

const TitleText = styled(BodyText)`
  text-align: center;
  @media screen and (min-width: 414px) {
    height: 4vh;
  }
`;

export const Gallery = ({ id }) => {
  const scrollPosition = useSelector(({ scrollPosition }) => scrollPosition);
  const { title, photos } = useSelector((state) => getGallery(state, id));
  const dispatch = useDispatch();

  const galleryRef = useRef(null);

  const prevScrollPosition = useRef(scrollPosition);

  const setScrollPosition = useCallback(
    (scrollPosition) => {
      dispatch(setScrollPositionAction(scrollPosition));
    },
    [dispatch]
  );

  const onScrollLeft = useCallback(() => {
    dispatch(showNav());
  }, [dispatch]);

  const onScrollRight = useCallback(() => {
    dispatch(hideNav());
  }, [dispatch]);

  useEffect(() => {
    if (!galleryRef.current) {
      return () => {};
    }

    const gallery = galleryRef.current;

    const scrollHandler = () => {
      const newScrollPosition = gallery.scrollLeft;
      if (newScrollPosition > prevScrollPosition.current) {
        onScrollRight();
      } else {
        onScrollLeft();
      }
      prevScrollPosition.current = newScrollPosition;
      setScrollPosition(newScrollPosition);
    };

    gallery.addEventListener("scroll", scrollHandler, false);
    return () => {
      gallery.removeEventListener("scroll", scrollHandler, false);
    };
  }, [onScrollLeft, onScrollRight, setScrollPosition]);

  useEffect(() => {
    if (!galleryRef.current) {
      return () => {};
    }

    const gallery = galleryRef.current;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    };

    gallery.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      gallery.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="gallery">
      <TitleText>{title}</TitleText>
      <div className="gallery-container" ref={galleryRef}>
        {photos.map((photo, index) => (
          <Image {...photo} key={index} />
        ))}
      </div>
    </div>
  );
};
