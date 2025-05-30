import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
          }}
        >
          {/* Contact Section */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                Support:
              </Typography>
              <Link
                href="https://incroft.freshdesk.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  '&:hover': { color: 'grey.300' },
                }}
              >
                incroft.freshdesk.com
              </Link>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.600' }}>
              |
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                Email:
              </Typography>
              <Link
                href="mailto:info@incroft.com"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  '&:hover': { color: 'grey.300' },
                }}
              >
                info@incroft.com
              </Link>
            </Box>
          </Box>

          {/* Copyright and Links Section - Single Line */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
              borderTop: '1px solid #333',
              pt: 2,
              width: '100%',
            }}
          >
            <Typography variant="caption" sx={{ color: 'grey.500' }}>
              © {new Date().getFullYear()} Incroft Solutions. All rights reserved.
            </Typography>
            <Link
              href="#"
              sx={{
                color: 'grey.500',
                textDecoration: 'none',
                fontSize: '12px',
                '&:hover': { color: 'white' },
              }}
            >
              Privacy Policy
            </Link>
            <Typography variant="caption" sx={{ color: 'grey.600' }}>
              |
            </Typography>
            <Link
              href="#"
              sx={{
                color: 'grey.500',
                textDecoration: 'none',
                fontSize: '12px',
                '&:hover': { color: 'white' },
              }}
            >
              Terms of Use
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
