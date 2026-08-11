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
  const gallery = useSelector((state) => getGallery(state, id));
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

    const scrollHandler = () => {
      const newScrollPosition = galleryRef.current.scrollLeft;
      if (newScrollPosition > prevScrollPosition.current) {
        onScrollRight();
      } else {
        onScrollLeft();
      }
      prevScrollPosition.current = newScrollPosition;
      setScrollPosition(newScrollPosition);
    };

    galleryRef.current.addEventListener("scroll", scrollHandler, false);
    return () => {
      galleryRef.current.removeEventListener("scroll", scrollHandler, false);
    };
  }, [onScrollLeft, onScrollRight, setScrollPosition]);

  useEffect(() => {
    if (!galleryRef.current) {
      return () => {};
    }

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      e.preventDefault();
      galleryRef.current.scrollLeft += e.deltaY;
    };

    galleryRef.current.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    return () => {
      galleryRef.current.remove("wheel", handleWheel);
    };
  }, []);

  const { title, photos } = gallery;

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
