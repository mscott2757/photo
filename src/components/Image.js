import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  hideLoader() {
    this.setState({ loading: false });
  }

  render() {
    const { aspect, url } = this.props.picture;
    let imgLoading = null;
    if (this.state.loading) {
      imgLoading = (
        <div className={"image-loading aspect--" + aspect}>
          <i className="fa fa-circle-o-notch fa-spin"></i>
        </div>
      );
    }

    return (
      <div className="image">
        {imgLoading}
        <img src={url}
             className={(this.state.loading ? "hide-img" : "")}
             onLoad={this.hideLoader.bind(this)}
             alt=""
        />
      </div>
    );
  }
}

export default Image;