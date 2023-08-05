import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

export default function SubContents({selected, setSelected}) {
  const navigate = useNavigate()

  const handleClick = (path, id) => {
    setSelected(id)
    navigate(`/${path}`)
  }

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Sub Contents
      </ListSubheader>

      <ListItemButton onClick={() => handleClick('sub1', 4)} sx={ selected===4 ? { backgroundColor: '#e0e0e0' } : {}} >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sub1" />
      </ListItemButton>

      <ListItemButton onClick={() => handleClick('sub2', 5)} sx={ selected===5 ? { backgroundColor: '#e0e0e0' } : {}} >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sub2" />
      </ListItemButton>
    </React.Fragment>
  )
}
