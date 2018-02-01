import React from 'react';
import GalleryContainer from '../containers/GalleryContainer';
import NavContainer from '../containers/NavContainer';
import Social from './Social';
import { CURRENT, Accounts } from '../content/PhotoContent';

const Main = ({ match: { params } }) => {
  return (
    <div className="main">
      <NavContainer />
      <GalleryContainer id={params.id || CURRENT} />
      <Social accounts={Accounts} />
    </div>
  );
}

export default Main;
