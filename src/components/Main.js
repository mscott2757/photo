import React from 'react';
import { Gallery } from './';
import { CURRENT } from '../content/';

export const Main = ({ match: { params } }) => (
  <div className="main">
    <Gallery id={params.id || CURRENT} />
  </div>
);
