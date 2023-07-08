import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

export default function SubContents() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Sub Contents
      </ListSubheader>

      <ListItemButton onClick={() => navigate('/sub1')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sub1" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon onClick={() => navigate('/sub2')}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sub2" />
      </ListItemButton>
    </React.Fragment>
  )
}
