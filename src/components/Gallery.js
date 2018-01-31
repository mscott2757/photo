import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {
  componentDidMount() {
    this.props.setScrollPosition(this.refs.gallery.scrollLeft);

    this.refs.gallery.addEventListener("scroll", () => {
      let newScrollPosition = this.refs.gallery.scrollLeft;
      if (newScrollPosition > this.props.scrollPosition) {
        this.props.onScrollRight();
      } else {
        this.props.onScrollLeft();
      }
      this.props.setScrollPosition(newScrollPosition);
    }, false);
  }

  render() {
    const { title, photos } = this.props.content;

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
