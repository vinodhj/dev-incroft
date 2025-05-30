import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  TextField,
  InputAdornment,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

// Create dark theme matching the design
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    background: {
      default: '#1a1a2e',
      paper: '#16213e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:960px)': {
        fontSize: '2.8rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
  },
});

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(26, 26, 46, 0.9)',
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)',
  position: 'relative',
}));

const LogoBox = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  '&::before': {
    content: '""',
    width: '20px',
    height: '20px',
    background: 'white',
    borderRadius: '3px',
    transform: 'rotate(45deg)',
  },
}));

const NavLogoBox = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
  '&::before': {
    content: '""',
    width: '16px',
    height: '16px',
    background: 'white',
    borderRadius: '2px',
    transform: 'rotate(45deg)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderRadius: '12px',
    height: '56px',
    '& fieldset': {
      borderColor: 'rgba(148, 163, 184, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(148, 163, 184, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6366f1',
      borderWidth: '1px',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#94a3b8',
    fontSize: '16px',
  },
  '& .MuiInputLabel-root': {
    color: '#64748b',
  },
}));

const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6366f1',
  color: 'white',
  borderRadius: '12px',
  height: '56px',
  minWidth: '140px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#5855eb',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#94a3b8',
  textTransform: 'none',
  fontSize: '15px',
  fontWeight: 500,
  padding: '8px 16px',
  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

interface BetterStackLandingProps {}

const BetterStackLanding: React.FC<BetterStackLandingProps> = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleStartClick = (): void => {
    if (email) {
      console.log('Starting with email:', email);
      // Add your logic here
    } else {
      alert('Please enter your email address');
    }
  };

  const handleBookDemo = (): void => {
    console.log('Book a demo clicked');
    // Add your logic here
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* Navigation Bar */}
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box display="flex" alignItems="center">
              <NavLogoBox />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  fontSize: '18px',
                }}
              >
                Better Stack
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <NavButton>Platform</NavButton>
              <NavButton>Documentation</NavButton>
              <NavButton>Pricing</NavButton>
              <NavButton>Community</NavButton>
              <NavButton>Company</NavButton>
              <NavButton>Enterprise</NavButton>
            </Box>

            {/* Auth Buttons */}
            <Box display="flex" alignItems="center" gap={2}>
              <Button
                variant="text"
                sx={{
                  color: '#94a3b8',
                  textTransform: 'none',
                  fontWeight: 500,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#6366f1',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#5855eb',
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="md">
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" sx={{ pt: 12, pb: 8 }}>
            {/* Logo */}
            <LogoBox />

            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 6,
                fontSize: '18px',
              }}
            >
              Better Stack
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 4,
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              Radically better observability stack
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                mb: 6,
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '600px',
              }}
            >
              Ship higher-quality software faster. Be the hero of your engineering teams.
            </Typography>

            {/* Email Form */}
            <Box
              display="flex"
              gap={2}
              sx={{
                width: '100%',
                maxWidth: '500px',
                mb: 3,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <StyledTextField
                fullWidth
                placeholder="Your work e-mail"
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon sx={{ color: '#64748b', fontSize: '20px' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <StartButton onClick={handleStartClick}>Start for free</StartButton>
            </Box>

            {/* CTA Text */}
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: '14px',
              }}
            >
              Start monitoring for free or{' '}
              <Box
                component="span"
                onClick={handleBookDemo}
                sx={{
                  color: '#6366f1',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#8b5cf6',
                  },
                }}
              >
                book a demo
              </Box>
            </Typography>
          </Box>
        </Container>
      </HeroSection>
    </ThemeProvider>
  );
};

export default BetterStackLanding;
