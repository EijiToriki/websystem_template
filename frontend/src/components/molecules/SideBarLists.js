import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MainContents from './MainContents';
import SubContents from './SubContents';

export default function SideBarLists({selected, setSelected}) {
  return (
    <List component="nav">
      <MainContents selected={selected} setSelected={setSelected} />
      <Divider sx={{ my: 1 }} />
      <SubContents selected={selected} setSelected={setSelected} />
    </List>
  )
}
