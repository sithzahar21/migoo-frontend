import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material'; // Added Grid
import { useTranslation } from 'react-i18next';

// Assuming these are the correct paths to your logo images
import amazonLogo from '../../../assets/images/general/amazon.png';    // Placeholder path
import googleLogo from '../../../assets/images/general/google.png';  // Placeholder path
import microsoftLogo from '../../../assets/images/general/microsoft.png'; // Placeholder path

const Enhance = () => {
  const { t } = useTranslation();

  const logos = [
    { src: amazonLogo, alt: 'Amazon Logo' },
    { src: googleLogo, alt: 'Google Logo' },
    { src: microsoftLogo, alt: 'Microsoft Logo' },
  ];

  return (
    <Box
      id="partners" // Changed ID to reflect new content (e.g., 'partners' or 'clients')
      sx={{
        textAlign: 'center',
        py: { xs: 5, sm: 5, md: 5 }, // Adjusted vertical padding for new content
        px: { xs: 3, sm: 6, md: 10 },
        // backgroundColor: '#efe6ef', // Your chosen light purple-ish background
        position: 'relative',
        overflow: 'hidden',
        minHeight: '40vh', // Ensure it takes up a good amount of screen space
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Optional: Add a title for the section if desired, e.g., "Our Trusted Partners" */}
        {/* Uncomment the Typography block below if you want a title */}
        {/*
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
            lineHeight: 1.1,
            mb: { xs: 4, md: 6 }, // Margin below title
            color: 'text.primary',
          }}
        >
          {t('enhance.partnersTitle') || "Trusted by Leading Companies"}
        </Typography>
        */}

        <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center" alignItems="center">
          {logos.map((logo, index) => (
            <Grid item xs={12} sm={4} key={index}> {/* Responsive grid for logos */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: { xs: 2, sm: 3 }, // Padding around each logo
                  bgcolor: 'white', // White background for each logo box
                  borderRadius: 2, // Slightly rounded corners
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)', // Subtle shadow
                  height: { xs: '100px', sm: '120px' }, // Fixed height for consistency
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)', // Subtle zoom effect on hover
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    maxWidth: '80%', // Ensure logo fits within the box
                    maxHeight: '80%', // Ensure logo fits within the box
                    objectFit: 'contain', // Maintain aspect ratio
                    // Removed grayscale filter and opacity to keep original colors
                    // Removed hover effects for filter and opacity as they are no longer needed
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Enhance;
