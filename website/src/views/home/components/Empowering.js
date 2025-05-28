import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/MenuBook';
import TranslateIcon from '@mui/icons-material/Translate';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTranslation } from 'react-i18next';

const Empowering = () => {
  const { t } = useTranslation();
  const content = t('empowering', { returnObjects: true });

  const icons = [
    <BookIcon style={{ fontSize: 40, color: '#0065ff' }} />,
    <TranslateIcon style={{ fontSize: 40, color: '#0065ff' }} />,
    <ImportContactsIcon style={{ fontSize: 40, color: '#0065ff' }} />,
    <TrendingUpIcon style={{ fontSize: 40, color: '#0065ff' }} />,
  ];

  return (
    <Box
    id="features"
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        backgroundColor: '#f5f7fa',
        // Removed direction: 'rtl' to default to LTR
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: { xs: 4, md: 6 }, // Add more bottom margin for title
            fontSize: { xs: '2rem', md: '2.5rem' }, // Responsive font size
            color: 'text.primary',
            lineHeight:"3rem"
          }}
        >
          {content.title}
        </Typography>

        <Grid container spacing={4} mt={2} justifyContent="center"> {/* Center the grid items */}
          {content.headings?.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}> {/* Adjusted sm breakpoint for better layout */}
              <Box
                p={3}
                bgcolor="#fff"
                borderRadius={2}
                boxShadow={2}
                height="100%"
                display="flex"
                // alignItems="flex-start" // Align items to the start (left for LTR)
                gap={2}
                sx={{
                  flexDirection: { xs: 'column', sm: 'row' }, // Stack icon/text on xs, row on sm+
                  textAlign: { xs: 'center', sm: 'left' }, // Center text on xs, left on sm+
                  alignItems: { xs: 'center', sm: 'flex-start' }, // Center items on xs, align flex-start on sm+
                }}
              >
                <Box sx={{
                  flexShrink: 0, // Prevent icon from shrinking
                  mb: { xs: 1, sm: 0 }, // Margin bottom on xs, no margin on sm+
                }}>
                  {icons[index] || icons[0]}
                </Box>
                <Box
                  // Removed textAlign="right" to default to left
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#0065ff',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }, // Responsive font size
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
                      lineHeight: 1.6,
                    }}
                  >
                    {item.subHeading}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Empowering;