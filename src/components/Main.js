import React from 'react';
import { GalleryContainer } from '../containers';
import { CURRENT } from '../content/';

export const Main = ({ match: { params } }) => (
  <div className="main">
    <GalleryContainer id={params.id || CURRENT} />
  </div>
);
