import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { IconBook, IconBarbell, IconGraph } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

// Assuming learn.svg is located here
import learnSvg from '../../../assets/images/general/learn.svg'; // Placeholder path

const Learn = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <IconBook size={28} color="#1976d2" />,
      title: t("learn.heading1"),
      description: t("learn.subHeading1"),
    },
    {
      icon: <IconBarbell size={28} color="#1976d2" />,
      title: t("learn.heading2"),
      description: t("learn.subHeading2"),
    },
    {
      icon: <IconGraph size={28} color="#1976d2" />,
      title: t("learn.heading3"),
      description: t("learn.subHeading3")
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center content vertically within the section
        minHeight: '70vh', // Ensure a good minimum height for the section
      }}
    >
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center" maxWidth="lg">
        {/* Left Column: Text Content (Features and Button) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h4" // Main title for the section
              fontWeight="bold"
              gutterBottom
              sx={{
                // mb: { xs: 4, md: 6 },
                fontSize: { xs: '2.2rem', sm: '2rem', md: '2rem' },
                color: 'text.primary',
                lineHeight: { xs: 1.2, md: 1.3 }, // Added responsive line height
              }}
            >
              {t("learn.mainTitle") || "Enhance your learning experience!"}
            </Typography>

            <Typography
              variant="h6" // Main title for the section
              fontWeight="bold"
              gutterBottom
              sx={{
                mb: { xs: 4, md: 6 },
                // fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3rem' },
                color: 'text.primary',
              }}
            >
              {t("learn.mainSubTitle") || "At Migoo, we've got your back every step of the way"}
            </Typography>

            {features.map((feature, index) => (
              <Box key={index} sx={{
                display: 'flex',
                // alignItems: 'flex-start',
                mb: 4,
                flexDirection: { xs: 'column', sm: 'row' }, // Stack icon and text on xs, row on sm+
                textAlign: { xs: 'center', sm: 'left' },
                alignItems: { xs: 'center', sm: 'flex-start' }, // Center items on xs, align flex-start on sm+
              }}>
                <Box sx={{
                  mr: { xs: 0, sm: 2 }, // Margin right on sm+, no margin on xs
                  mb: { xs: 1, sm: 0 }, // Margin bottom on xs, no margin on sm+
                  display: 'flex', // Ensure icon is centered on xs
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '40px', // Give icon some space
                }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h5" // Smaller heading for feature titles
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      color: 'text.primary',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Button
              variant="outlined"
              sx={{
                mt: { xs: 2, md: 4 }, // Responsive margin top
                px: 4,
                py: 1.5,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                borderRadius: '8px',
                textTransform: 'none',
              }}
              color="primary"
            >
              {t("learn.button")}
            </Button>
          </Box>
        </Grid>

        {/* Right Column: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={learnSvg}
            alt="Learning illustration"
            sx={{
              borderRadius:"30px",
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

export default Learn;