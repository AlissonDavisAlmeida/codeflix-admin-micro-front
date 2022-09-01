import {
  AppBar, IconButton, Toolbar, Box, Typography, Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}

    >

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: '1rem' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            CodeFlix
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
