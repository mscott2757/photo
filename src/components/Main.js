import React from 'react';
import GalleryContainer from '../containers/GalleryContainer';
import NavContainer from '../containers/NavContainer';
import Social from './Social';
import Accounts from '../content/Accounts';

const Main = ({ match: { params } }) => {
  return (
    <div className="main">
      <NavContainer />
      <GalleryContainer id={params.id || 'current'} />
      <Social accounts={Accounts} />
    </div>
  );
}

export default Main;
