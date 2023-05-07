import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

const accounts = [
  { icon: faInstagram, url: "https://www.instagram.com/masonchan_/" },
  { icon: faSpotify, url: "https://open.spotify.com/user/122383669" },
];

export const Social = () => (
  <div className="social">
    <ul>
      {accounts.map(({ icon, url, className }) => (
        <li key={className}>
          <a href={url}>
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);
