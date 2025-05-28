import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * Ready Component: A hero section designed to encourage users
 * to enhance their English skills. It features a prominent heading,
 * descriptive text, and a call-to-action button, with a dynamic
 * background.
 */
const Ready = () => {
  const { t } = useTranslation();
  return (
    // Main container for the hero section
    <Box
      sx={{
        background: '#2a8efe', // Blue background color
        color: 'white', // White text color
        padding: { xs: '60px 20px', sm: '60px 40px', md: '60px 60px', lg: '60px 80px' }, // Responsive padding
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small, row on medium+
        alignItems: 'center', // Center items vertically
        justifyContent: { xs: 'center', md: 'space-between' }, // Space between content and button on desktop
        textAlign: { xs: 'center', md: 'left' }, // Center text on small, left on medium+
        position: 'relative', // For absolute positioning of background shapes
        overflow: 'hidden', // Hide overflowing background shapes
      }}
    >
      {/* Dynamic Background Shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '0%',
          width: { xs: '100px', sm: '150px', md: '200px' },
          height: { xs: '100px', sm: '150px', md: '200px' },
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light white circle
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: { xs: '150px', sm: '200px', md: '250px' },
          height: { xs: '150px', sm: '200px', md: '250px' },
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)', // Another light white circle
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: { xs: '80px', sm: '100px', md: '120px' },
          height: { xs: '80px', sm: '100px', md: '120px' },
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // Smaller, more subtle circle
          filter: 'blur(20px)',
          zIndex: 0,
          display: { xs: 'none', sm: 'block' }
        }}
      />

      {/* Container for the text content (left side in LTR) */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '65%' }, // Max width for text content
          mb: { xs: 4, md: 0 }, // Margin bottom on small screens
          zIndex: 1, // Ensure content is above background shapes
          order: { xs: 1, md: 1 }, // Text appears first (left) on all screens
        }}
      >
        {/* Main heading */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '2rem', sm: '2rem', md: '2rem' }, // Responsive font size
            fontWeight: 'bold',
            lineHeight: 1.2,
            mb: { xs: 2, sm: 3 }, // Margin bottom
            textAlign: { xs: 'center', md: 'left' }, // Align text to the left on desktop, center on mobile
          }}
        >
          {t("ready.title")}
        </Typography>

        {/* Descriptive paragraph */}
        <Typography
          variant="body1" // Using body1 variant for semantic clarity
          sx={{
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' }, // Responsive font size
            lineHeight: 1.6,
            opacity: 0.9,
            textAlign: { xs: 'center', md: 'left' }, // Align text to the left on desktop, center on mobile
          }}
        >
          {t("ready.subtitle")}
        </Typography>
      </Box>

      {/* Call-to-action button (right side in LTR) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#000', // Pure black button background
          color: 'white',
          padding: { xs: '12px 25px', sm: '15px 35px' },
          borderRadius: '8px',
          fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#333',
            boxShadow: 'none',
          },
          zIndex: 1, // Ensure button is above background shapes
          ml: { xs: 0, md: 5 }, // Margin left on medium+ screens to separate from text
          order: { xs: 2, md: 2 }, // Button appears second (right) on all screens
        }}
      >
        {t("ready.startNow")}
      </Button>
    </Box>
  );
};

export default Ready;