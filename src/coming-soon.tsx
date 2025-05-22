import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  Snackbar,
  Alert,
  LinearProgress,
} from '@mui/material';
import { Email, Facebook, Twitter, Instagram, LinkedIn, Rocket, Schedule, NotificationsActive } from '@mui/icons-material';

function ComingSoonLanding() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Get current year
  const year = new Date().getFullYear();

  // Set launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setSnackbarOpen(true);
    setEmail('');
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Main Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, color: 'white' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
                <Rocket sx={{ fontSize: 40, mr: 2, color: '#ffd700' }} />
                <Typography variant="h3" component="h1" fontWeight="bold">
                  Incroft Solutions
                </Typography>
              </Box>

              <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Something Amazing is Coming Soon
              </Typography>

              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
                We're working hard to bring you an incredible experience. Get ready for the next big thing in digital innovation!
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 4 }}>
                <Chip label="Revolutionary" color="primary" sx={{ color: 'white', fontWeight: 'bold' }} />
                <Chip label="User-Friendly" color="secondary" sx={{ color: 'white', fontWeight: 'bold' }} />
                <Chip label="Innovative" sx={{ bgcolor: '#ffd700', color: '#333', fontWeight: 'bold' }} />
              </Box>

              {/* Progress Bar */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Development Progress
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    85%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={85}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#ffd700',
                    },
                  }}
                />
              </Box>

              {/* Social Media Links */}
              <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}
                  component="a"
                  href="https://www.linkedin.com/in/tech-incroft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Countdown & Email Signup */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backdropFilter: 'blur(10px)',
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 4,
                p: 3,
              }}
            >
              <CardContent>
                {/* Countdown Timer */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Schedule sx={{ color: '#ffd700', mr: 1 }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                      Launch Countdown
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <Grid size={{ xs: 3 }} key={unit}>
                        <Box
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.2)',
                            borderRadius: 2,
                            p: 2,
                            border: '1px solid rgba(255,255,255,0.3)',
                          }}
                        >
                          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                            {(value as number) || 0}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>
                            {unit}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Email Signup */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <NotificationsActive sx={{ color: '#ffd700', mr: 1 }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                      Get Notified
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', mb: 3 }}>
                    Be the first to know when we launch. No spam, just updates!
                  </Typography>

                  <Box component="form" onSubmit={handleEmailSubmit}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!emailError}
                      helperText={emailError}
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255,255,255,0.9)',
                          borderRadius: 2,
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffd700',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffd700',
                          },
                        },
                      }}
                      slotProps={{
                        input: <Email sx={{ color: 'rgba(0,0,0,0.5)', mr: 1 }} />,
                      }}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: '#ffd700',
                        color: '#333',
                        fontWeight: 'bold',
                        borderRadius: 2,
                        py: 1.5,
                        '&:hover': {
                          bgcolor: '#ffed4a',
                        },
                      }}
                    >
                      Notify Me When It's Ready
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {year} Incroft Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thanks for subscribing! We'll notify you when we launch. 🚀
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ComingSoonLanding;
