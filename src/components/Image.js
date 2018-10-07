import React from 'react';
import { withLoading } from './with';
import propTypes from 'prop-types';

export const Image = withLoading(
  ({
    loading,
    hideLoader,
    picture: { aspect, url },
  }) => {
    let imgLoading = null;
    if (loading) {
      imgLoading = (
        <div className={`image-loading aspect--${aspect}`}>
          <i className="fa fa-circle-o-notch fa-spin"></i>
        </div>
      );
    }

    return (
      <div className="image">
        {imgLoading}
        <img src={url}
             className={(loading ? "hide-img" : "")}
             onLoad={hideLoader}
             alt=""
        />
      </div>
    );
  }
)

Image.propTypes = {
  picture: propTypes.shape({
    aspect: propTypes.string.isRequired,
    url: propTypes.string.isRequired
  }).isRequired
}
