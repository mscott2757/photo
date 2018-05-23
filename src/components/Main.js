import React from 'react';
import GalleryContainer from '../containers/GalleryContainer';
import { CURRENT } from '../content/';

const Main = ({ match: { params } }) => {
  return (
    <div className="main">
      <GalleryContainer id={params.id || CURRENT} />
    </div>
  );
}

export default Main;
