import React, { Component } from 'react';
import Image from './Image';
import '../styles/css/Gallery.css';

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
    return (
      <div className="gallery">
        <div className="gallery-container" ref="gallery">
          {this.props.pictures.map((picture, index) =>
            <Image picture={picture} key={index} />
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
