import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Menu, MenuItem, IconButton, Chip } from '@mui/material';
import { KeyboardArrowDown, ShoppingBag, Notifications } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#2d5a3d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.1,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
});

export default function DeityHomepage() {
  const [platformAnchor, setPlatformAnchor] = React.useState(null);
  const [useCasesAnchor, setUseCasesAnchor] = React.useState(null);
  const [resourcesAnchor, setResourcesAnchor] = React.useState(null);
  const [companyAnchor, setCompanyAnchor] = React.useState(null);

  const handleMenuClick = (setter: any) => (event: any) => {
    setter(event.currentTarget);
  };

  const handleMenuClose = (setter: any) => () => {
    setter(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)`, // Purple Twilight
          // background: 'linear-gradient(135deg, #0f4c75 0%, #3282b8 50%, #bbe1fa 100%)', // Cool Teal
          // background: `linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #ef4444 100%)`, // Warm Burgundy
          // background: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`, // Electric Blue
          // background: 'linear-gradient(135deg, #4a7c59 0%, #2d5a3d 50%, #1e3e2a 100%)', // Dark Green
          // background: `linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)`, // Deep Ocean Blue
          // background: `linear-gradient(135deg, #2c3e50 0%, #3498db 50%, #2c3e50 100%)`, // Dark Navy
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 0%, transparent 50%)
            `,
            zIndex: 1,
          }}
        />

        {/* Navigation */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            zIndex: 10,
            position: 'relative',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://images.incroft.com/logo.png"
                alt="Logo"
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDown />}
                onClick={handleMenuClick(setPlatformAnchor)}
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              >
                Platform
              </Button>
              <Menu anchorEl={platformAnchor} open={Boolean(platformAnchor)} onClose={handleMenuClose(setPlatformAnchor)}>
                <MenuItem onClick={handleMenuClose(setPlatformAnchor)}>Commerce Cloud</MenuItem>
                <MenuItem onClick={handleMenuClose(setPlatformAnchor)}>Headless Commerce</MenuItem>
                <MenuItem onClick={handleMenuClose(setPlatformAnchor)}>API Platform</MenuItem>
              </Menu>

              <Button
                color="inherit"
                endIcon={<KeyboardArrowDown />}
                onClick={handleMenuClick(setUseCasesAnchor)}
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              >
                Use Cases
              </Button>
              <Menu anchorEl={useCasesAnchor} open={Boolean(useCasesAnchor)} onClose={handleMenuClose(setUseCasesAnchor)}>
                <MenuItem onClick={handleMenuClose(setUseCasesAnchor)}>B2B Commerce</MenuItem>
                <MenuItem onClick={handleMenuClose(setUseCasesAnchor)}>Multi-store</MenuItem>
                <MenuItem onClick={handleMenuClose(setUseCasesAnchor)}>Mobile Commerce</MenuItem>
              </Menu>

              <Button
                color="inherit"
                endIcon={<KeyboardArrowDown />}
                onClick={handleMenuClick(setResourcesAnchor)}
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              >
                Resources
              </Button>
              <Menu anchorEl={resourcesAnchor} open={Boolean(resourcesAnchor)} onClose={handleMenuClose(setResourcesAnchor)}>
                <MenuItem onClick={handleMenuClose(setResourcesAnchor)}>Documentation</MenuItem>
                <MenuItem onClick={handleMenuClose(setResourcesAnchor)}>Blog</MenuItem>
                <MenuItem onClick={handleMenuClose(setResourcesAnchor)}>Case Studies</MenuItem>
              </Menu>

              <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>
                Pricing
              </Button>

              <Button
                color="inherit"
                endIcon={<KeyboardArrowDown />}
                onClick={handleMenuClick(setCompanyAnchor)}
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              >
                Company
              </Button>
              <Menu anchorEl={companyAnchor} open={Boolean(companyAnchor)} onClose={handleMenuClose(setCompanyAnchor)}>
                <MenuItem onClick={handleMenuClose(setCompanyAnchor)}>About</MenuItem>
                <MenuItem onClick={handleMenuClose(setCompanyAnchor)}>Careers</MenuItem>
                <MenuItem onClick={handleMenuClose(setCompanyAnchor)}>Contact</MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip
                icon={<Notifications />}
                label="Deity is now Ultra Commerce! Read more →"
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  fontSize: '0.8rem',
                  '& .MuiChip-icon': { color: 'white' },
                  display: { xs: 'none', lg: 'flex' },
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 8, md: 12 },
            pb: { xs: 8, md: 16 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#a8d4b8',
              fontWeight: 600,
              letterSpacing: 2,
              mb: 3,
              fontSize: '0.9rem',
            }}
          >
            Incroft Companies
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              mb: 4,
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Manage and Monitor all your Store Essentials from One Admin Panel.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              px: 2,
            }}
          >
            With our no-code console you can monitor performance and deployments, manage ecommerce integrations and orchestrate the most
            important part of all: the check-out experience.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Read more
            </Button>

            <Button
              variant="text"
              size="large"
              sx={{
                color: 'white',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Schedule a demo
            </Button>
          </Box>
        </Container>

        {/* Floating Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 200,
            height: 200,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            borderRadius: '50%',
            filter: 'blur(1px)',
            zIndex: 1,
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': {
                transform: 'translateY(0px) rotate(0deg)',
              },
              '50%': {
                transform: 'translateY(-20px) rotate(180deg)',
              },
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: 150,
            height: 150,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            borderRadius: '50%',
            filter: 'blur(2px)',
            zIndex: 1,
            animation: 'float-reverse 8s ease-in-out infinite',
            '@keyframes float-reverse': {
              '0%, 100%': {
                transform: 'translateY(0px) rotate(0deg)',
              },
              '50%': {
                transform: 'translateY(15px) rotate(-180deg)',
              },
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
