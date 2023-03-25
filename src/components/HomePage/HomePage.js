import React, { useState } from 'react';
import AnimatedTitle from '../TitleCom/TitleCom';
import ProfilePic from '../ProfilePic/ProfilePic';
import DetailsArea from '../DetailsArea/DetailsArea';
import { Typography, styled } from '@mui/material';
import JWDline from '../JWDline/JWDline';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useInView } from 'react-intersection-observer';

const LazyAnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });
  return (
    <div ref={ref}>
      {inView ? <AnimatedTitle /> : <div style={{ height: '200px' }} />}
    </div>
  );
};

const LazyProfilePic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });
  return (
    <div ref={ref}>
      {inView ? <ProfilePic /> : <div style={{ height: '400px' }} />}
    </div>
  );
};

const LazyDetailsArea = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });
  return (
    <div ref={ref}>
      {inView ? <DetailsArea /> : <div style={{ height: '800px' }} />}
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <LazyAnimatedTitle />
      <LazyProfilePic />
      <JWDline />
      <ThemeSwitcher />
      <div>
        <LazyDetailsArea />
      </div>
    </div>
  );
};

export default HomePage;
