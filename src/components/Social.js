import React from 'react';

const Social = ({ accounts }) => {
  return (
    <div className="social">
      <ul>
        {accounts.map(({ url, className }, index) =>
          <li key={index}>
            <a href={url}>
              <i className={"fa " + className}></i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Social;
