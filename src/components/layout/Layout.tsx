import React from 'react';
import { Box, Container } from '@mui/system';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 4,
        }}
      >

        {children}
      </Container>
    </Box>
  );
};

export default Layout;
