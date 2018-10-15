import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from './Image';
import { BodyText } from './core';

const TitleText = styled(BodyText)`
  text-align: center;
  @media screen and (min-width: 414px) {
    height: 4vh;
  }
`;

export class Gallery extends Component {
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
