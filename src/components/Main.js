import React from 'react';
import { Gallery } from './';
import { useParams, useLocation } from 'react-router-dom';
import { CURRENT } from '../content/';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Main = () => {
  const  { key } = useLocation();
  const { id } = useParams();
  return (
    <TransitionGroup>
      <CSSTransition
        key={key}
        timeout={400}
        classNames='main'
      >
      <div className="main">
        <Gallery id={id || CURRENT} />
      </div>
    </CSSTransition>
  </TransitionGroup>
);
};
