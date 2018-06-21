import React, { Component } from 'react';
import Image from './Image';
import propTypes from 'prop-types';

class Gallery extends Component {
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

Gallery.propTypes = {
  gallery: propTypes.shape({
    title: propTypes.string.isRequired,
    photos: propTypes.array.isRequired
  }).isRequired,
  onScrollLeft: propTypes.func.isRequired,
  onScrollRight: propTypes.func.isRequired,
  scrollPosition: propTypes.number.isRequired,
  setScrollPosition: propTypes.func.isRequired
}

export default Gallery;
