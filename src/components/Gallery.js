import React, { Component } from 'react';
import Image from './Image';
import { debounce } from 'lodash';

class Gallery extends Component {
  componentDidMount() {
    this.props.setScrollPosition(this.refs.gallery.scrollLeft);
    let scrollHandler = () => {
      let newScrollPosition = this.refs.gallery.scrollLeft;
      if (newScrollPosition > this.props.scrollPosition) {
        this.props.onScrollRight();
      } else {
        this.props.onScrollLeft();
      }
      this.props.setScrollPosition(newScrollPosition);
    }
    this.refs.gallery.addEventListener("scroll", debounce(scrollHandler, 15), false);
  }

  render() {
    const { title, photos } = this.props.gallery;
    return (
      <div className="gallery">
        <div className="gallery-title">
          <p>{title}</p>
        </div>
        <div className="gallery-container" ref="gallery">
          {photos.map((photo, index) =>
            <Image picture={photo} key={index} />
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
