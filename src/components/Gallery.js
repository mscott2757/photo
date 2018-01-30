import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0
    }
  }

  componentDidMount() {
    this.setState({ scrollPosition: this.refs.gallery.scrollLeft });

    this.refs.gallery.addEventListener("scroll", () => {
      let newScrollPosition = this.refs.gallery.scrollLeft;
      if (newScrollPosition > this.state.scrollPosition) {
        this.props.handleHideNav();
      } else {
        this.props.handleShowNav();
      }
      this.setState({ scrollPosition: newScrollPosition });
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

Gallery.defaultProps = {
  pictures: []
}

export default Gallery;
