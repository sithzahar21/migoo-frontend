import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material'; // Added Grid
import { useTranslation } from 'react-i18next';

// Assuming howDoesItWork.svg is located here
import howDoesItWorkSvg from '../../../assets/images/general/howDoesItWork.svg'; // Placeholder path

const HowDoesItWork = () => {
  const { t } = useTranslation();
  return (
    <Box
    id="about"
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center content vertically
        minHeight: '70vh', // Ensure a good minimum height for the section
      }}
    >
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center" maxWidth="lg">
        {/* Left Column: Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h3" // Adjusted variant for main heading
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' },
                color: 'text.primary',
                mb: 2,
              }}
            >
              {t("howDoesItWork.heading1")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{
                fontSize: { xs: '0.95rem', sm: '1rem' },
                lineHeight: 1.6,
                mb: { xs: 3, md: 4 },
              }}
            >
              {t("howDoesItWork.subHeading1")}
            </Typography>

            <Typography
              mt={2}
              variant="h4" // Adjusted variant for sub-heading
              color="primary"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                mb: 1,
              }}
            >
              {t("howDoesItWork.heading2")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1rem' },
                lineHeight: 1.6,
              }}
            >
              {t("howDoesItWork.subHeading2")}
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={howDoesItWorkSvg}
            alt="How it works illustration"
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: { xs: '80%', sm: '60%', md: '100%' }, // Responsive max width
              display: 'block', // Ensures no extra space below image
              margin: 'auto', // Center image horizontally
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowDoesItWork;