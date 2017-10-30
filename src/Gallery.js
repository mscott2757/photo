import React, { Component } from 'react';
import './styles/css/Gallery.css';

class Gallery extends Component {
  componentDidUpdate() {
    this.refs.gallery.scrollLeft = 0;
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery-container" ref="gallery">
          {this.props.pictures.map((picture, index) =>
            <img key={index}
                 src={picture}
                 alt=""
            />
          )}
        </div>
      </div>
    );
  }
}

Gallery.defaultProps = {
  pictures: []
}

export default Gallery;
