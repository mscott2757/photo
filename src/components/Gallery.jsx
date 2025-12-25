import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Image } from './Image';
import { BodyText } from './core';
import {
  showNav,
  hideNav,
  setScrollPosition,
  getGallery
} from '../actions';

const TitleText = styled(BodyText)`
  text-align: center;
  @media screen and (min-width: 414px) {
    height: 4vh;
  }
`;

class GalleryBase extends Component {
  scrollHandler = () => {
    let newScrollPosition = this.refs.gallery.scrollLeft;
    if (newScrollPosition > this.props.scrollPosition) {
      this.props.onScrollRight();
    } else {
      this.props.onScrollLeft();
    }
    this.props.setScrollPosition(newScrollPosition);
  }

  componentDidMount() {
    this.props.setScrollPosition(this.refs.gallery.scrollLeft);
    this.refs.gallery.addEventListener("scroll", this.scrollHandler, false);
  }

  componentWillUnmount() {
    this.refs.gallery.removeEventListener("scroll", this.scrollHandler, false);
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    const { title, photos } = this.props.gallery;
    return (
      <div className="gallery">
        <TitleText>{title}</TitleText>
        <div className="gallery-container" ref="gallery">
          {photos.map((photo, index) => <Image {...photo} key={index} /> )}
        </div>
      </div>
    );
  }
};

export const Gallery = connect(
  ({ scrollPosition, ...state }, ownProps) => ({
    scrollPosition,
    gallery: getGallery(state, ownProps.id)
  }),
  dispatch => ({
    setScrollPosition: (scrollPosition) => {
      dispatch(setScrollPosition(scrollPosition));
    },
    onScrollRight: () => {
      dispatch(hideNav());
    },
    onScrollLeft: () => {
      dispatch(showNav());
    }
  }),
)(GalleryBase);
