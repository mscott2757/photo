import React from 'react';
import propTypes from 'prop-types';

const Social = ({ accounts }) => {
  return (
    <div className="social">
      <ul>
        {accounts.map(({ url, className }, index) =>
          <li key={index}>
            <a href={url}>
              <i className={`fa ${className}`}></i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

Social.propTypes = {
  accounts: propTypes.arrayOf(propTypes.shape({
    className: propTypes.string.isRequired,
    url: propTypes.string.isRequired
  })).isRequired
}

export default Social;
