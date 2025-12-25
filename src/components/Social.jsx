import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Social = ({ accounts }) => (
  <div className="social">
    <ul>
      {accounts.map(({ url, icon }) => (
        <li key={url}>
          <a href={url}>
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);
