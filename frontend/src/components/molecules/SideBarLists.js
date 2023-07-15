import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MainContents from '../data/MainContents';
import SubContents from '../data/SubContents';

export default function SideBarLists() {
  return (
    <List component="nav">
      <MainContents />
      <Divider sx={{ my: 1 }} />
      <SubContents />
    </List>
  )
}
