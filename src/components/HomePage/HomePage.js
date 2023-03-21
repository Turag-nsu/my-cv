import React from 'react';
import AnimatedTitle from '../TitleCom/TitleCom';
import ProfilePic from '../ProfilePic/ProfilePic';
import DetailsArea from '../DetailsArea/DetailsArea';
import { Typography, styled } from '@mui/material';
import { Stack} from '@mui/system';
import JWDline from '../JWDline/JWDline';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
const HomePage = () => {
  
  return (
    <div>
      <AnimatedTitle></AnimatedTitle>
      <ProfilePic></ProfilePic>
      <JWDline></JWDline>
      <ThemeSwitcher></ThemeSwitcher>
      <div>
      <DetailsArea></DetailsArea>
      </div>
    </div>
  );
};

export default HomePage;