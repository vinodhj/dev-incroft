import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid, Chip, Stack, Avatar, IconButton } from '@mui/material';
import { Factory, Computer, ArrowForward, LocationOn, Business, Group, TrendingUp, WhatsApp, Schedule } from '@mui/icons-material';
import ScheduleButton from './ScheduleButton';

interface DivisionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
  stats: { label: string; value: string }[];
}

const DivisionCard: React.FC<DivisionCardProps> = ({ title, description, icon, gradient, features, buttonText, onButtonClick, stats }) => {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid rgba(0,0,0,0.06)',
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
        },
      }}
    >
      {/* Header with gradient */}
      <Box
        sx={{
          background: gradient,
          p: 4,
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.1)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Avatar
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              width: 56,
              height: 56,
            }}
          >
            {icon}
          </Avatar>
          <Typography variant="h4" fontWeight={700}>
            {title}
          </Typography>
        </Stack>

        {/* Stats */}
        <Grid container spacing={2}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 4 }} key={index}>
              <Box textAlign="center">
                <Typography variant="h6" fontWeight={600}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <CardContent sx={{ p: 4 }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
          {description}
        </Typography>

        {/* Features */}
        <Box mb={3}>
          <Typography variant="h6" fontWeight={600} mb={2} color="text.primary">
            Key Features
          </Typography>
          <Stack spacing={1}>
            {features.map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                variant="outlined"
                size="small"
                sx={{
                  justifyContent: 'flex-start',
                  '& .MuiChip-label': {
                    fontSize: '0.875rem',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Action Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          endIcon={<ArrowForward />}
          onClick={onButtonClick}
          sx={{
            background: gradient,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            },
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const BusinessDivisions: React.FC = () => {
  const divisions = [
    {
      title: 'Rubber Trading',
      description:
        'Strategic partnerships with leading rubber manufacturers in Chennai and Salem. We operate with our own warehouse facilities and maintain exclusive tie-ups with established rubber companies. Currently focused on our proprietary products with signed agreements across the supply chain.',
      icon: <Factory sx={{ fontSize: 28 }} />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        'Own warehouse facilities',
        'Chennai & Salem partnerships',
        'Exclusive manufacturer tie-ups',
        'Proprietary product focus',
        'Signed supply agreements',
      ],
      buttonText: 'Explore Rubber Division',
      onButtonClick: () => window.open('https://rubber.incroft.com', '_blank'),
      stats: [
        { label: 'Locations', value: '2+' },
        { label: 'Partners', value: '5+' },
        { label: 'Years', value: '30+' },
      ],
    },
    {
      title: 'IT Solutions',
      description:
        "Powered by a team of seasoned professionals with 10+ years of corporate experience. Our collective expertise drives innovative IT solutions as we've joined forces to launch our technology startup, delivering cutting-edge digital solutions to transform businesses.",
      icon: <Computer sx={{ fontSize: 28 }} />,
      gradient: 'linear-gradient(135deg, #f093fb 0%,rgb(81, 46, 50) 100%)',
      features: [
        '10+ years corporate experience',
        'Seasoned professional team',
        'Cutting-edge solutions',
        'Digital transformation',
        'Startup innovation mindset',
      ],
      buttonText: 'Discover Tech Solutions',
      onButtonClick: () => window.open('https://tech.incroft.com', '_blank'),
      stats: [
        { label: 'Experience', value: '10+' },
        { label: 'Team Size', value: '15+' },
        { label: 'Projects', value: '50+' },
      ],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={8}>
          <Chip
            label="Our Expertise"
            sx={{
              mb: 3,
              bgcolor: 'rgba(102, 126, 234, 0.1)',
              color: '#667eea',
              fontWeight: 600,
              px: 2,
              py: 1,
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            fontWeight={700}
            color="text.primary"
            mb={3}
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Business Divisions
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Bridging traditional industry expertise with modern technological innovation
          </Typography>
        </Box>

        {/* Division Cards */}
        <Grid container spacing={4}>
          {divisions.map((division, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={index}>
              <DivisionCard {...division} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box
          textAlign="center"
          mt={8}
          p={6}
          sx={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
            borderRadius: 4,
            border: '1px solid rgba(102, 126, 234, 0.1)',
          }}
        >
          <Typography variant="h4" fontWeight={600} mb={2} color="text.primary">
            We can’t wait to hear from you!
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            If you have any questions about our company, platform or solutions, we'd be delighted to speak with you.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              onClick={() => {
                if (window.Tawk_API?.maximize) {
                  window.Tawk_API.maximize();
                } else {
                  console.warn('Tawk.to is not initialized yet.');
                }
              }}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Chat With Us
            </Button>{' '}
            &nbsp; &nbsp;
            <ScheduleButton
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#667eea',
                color: '#667eea',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#764ba2',
                  color: '#764ba2',
                  bgcolor: 'rgba(102, 126, 234, 0.05)',
                },
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessDivisions;
