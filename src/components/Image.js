import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/css/Image.css';

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
    return (
      <div className="image">
        {this.state.loading &&
          <div className={"image-loading aspect--" + this.props.picture.aspect}>
            <i className="fa fa-circle-o-notch fa-spin"></i>
          </div>
        }
        <img src={this.props.picture.url}
             className={(this.state.loading ? "hide-img" : "")}
             onLoad={this.hideLoader.bind(this)}
             alt=""
        />
      </div>
    );
  }
}

export default Image;
