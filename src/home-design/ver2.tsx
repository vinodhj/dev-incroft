import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Avatar,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Analytics, Security, AccountBalance, Search, Menu as MenuIcon } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a2332',
    },
    secondary: {
      main: '#00d4ff',
    },
    background: {
      default: '#0a0e1a',
      paper: '#1a2332',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      color: '#ffffff',
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#ffffff',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#ffffff',
    },
    body1: {
      fontSize: '1.1rem',
      color: '#94a3b8',
      lineHeight: 1.7,
    },
    subtitle1: {
      fontSize: '1.25rem',
      color: '#94a3b8',
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(26, 35, 50, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: 'none',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: `
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%)
  `,
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(26, 35, 50, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)',
    border: '1px solid rgba(0, 212, 255, 0.3)',
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00d4ff 30%, #0099cc 90%)',
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 600,
  padding: '12px 32px',
  fontSize: '1rem',
  '&:hover': {
    background: 'linear-gradient(45deg, #0099cc 30%, #007799 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
  },
}));

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UranusLabHomepage: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Blockchain Consulting',
      description: 'Devise tailored strategies that align blockchain technology with your business objectives from ideation to execution.',
      icon: <Analytics sx={{ fontSize: 40, color: '#00d4ff' }} />,
    },
    {
      title: 'Asset Tokenization',
      description:
        'Turn any real world asset into tradeable, digital form, opening up new avenues for investment and ownership at trustless environment.',
      icon: <AccountBalance sx={{ fontSize: 40, color: '#00d4ff' }} />,
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Assist businesses in navigating the ever-evolving regulatory landscape of digital assets, ensuring they remain compliant.',
      icon: <Security sx={{ fontSize: 40, color: '#00d4ff' }} />,
    },
    {
      title: 'Blockchain Forensics',
      description:
        'Dive deep into transactions, trace funds, historical value of digital assets, and understand the intricate paths of digital assets across multichain.',
      icon: <Search sx={{ fontSize: 40, color: '#00d4ff' }} />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#0a0e1a', minHeight: '100vh' }}>
        {/* Navigation */}
        <StyledAppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#00d4ff',
                  mr: 2,
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                U
              </Avatar>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700, color: 'white' }}>
                Uranus Lab
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              <Button sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}>About Us</Button>
              <Button sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}>Solutions</Button>
              <Button sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}>Case Studies</Button>
            </Box>

            <GradientButton size="small">Contact Us</GradientButton>
          </Toolbar>
        </StyledAppBar>

        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ mb: 3 }}>
                  <Chip
                    label="Enterprise blockchain experts"
                    sx={{
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      color: '#00d4ff',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      mb: 3,
                      fontWeight: 500,
                    }}
                  />
                </Box>

                <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                  Navigating Tomorrow's{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Blockchain Landscape
                  </Box>
                </Typography>

                <Typography variant="subtitle1" sx={{ mb: 4, maxWidth: '600px' }}>
                  We partner with regulators, legal experts, fintech firms, and DAOs to leverage distributed ledger technologies for
                  confidently navigating the evolving digital frontier.
                </Typography>

                <Typography variant="body1" sx={{ mb: 6, maxWidth: '600px' }}>
                  We intended to become your compass in this intricate realm of blockchain technology by proving insights, analysis,
                  strategies and integration needed.
                </Typography>

                <GradientButton size="large">Get Started</GradientButton>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Abstract blockchain visualization */}
                  <Box
                    sx={{
                      width: 400,
                      height: 400,
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Animated circles */}
                    {[...Array(3)].map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: 'absolute',
                          width: 150 + index * 80,
                          height: 150 + index * 80,
                          border: '2px solid rgba(0, 212, 255, 0.3)',
                          borderRadius: '50%',
                          animation: `rotate${index} ${10 + index * 5}s linear infinite`,
                          '@keyframes rotate0': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                          },
                          '@keyframes rotate1': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(-360deg)' },
                          },
                          '@keyframes rotate2': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                          },
                        }}
                      />
                    ))}

                    {/* Center core */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
                        zIndex: 10,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                        ∞
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </HeroSection>

        {/* Services Section */}
        <Container maxWidth="xl" sx={{ py: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Our Solutions
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Comprehensive blockchain services tailored to your business needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 3 }} key={index}>
                <ServiceCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>{service.icon}</Box>
                    <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1">{service.description}</Typography>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UranusLabHomepage;
