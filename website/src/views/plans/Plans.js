import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material'; // Changed Grid2 to Grid
import CheckIcon from '@mui/icons-material/Check';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Icon for Regular plan
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'; // Icon for Premium plan
import { useTranslation } from 'react-i18next';

const Plans = () => {
  const { t } = useTranslation();

  // Data structure for plans (you'll need to define 'plans' in your i18n JSON)
  const plansData = [
    {
      type: 'regular',
      icon: <LockOutlinedIcon sx={{ fontSize: 30, color: '#3399ff' }} />,
      titleKey: 'plans.regular.title',
      priceKey: 'plans.regular.price',
      featuresKeys: [
        'plans.regular.feature1',
        'plans.regular.feature2',
        'plans.regular.feature3',
        'plans.regular.feature4',
      ],
      buttonKey: 'plans.choosePlan',
      bgColor: '#e6f0ff', // Light blue background
      borderColor: '1px solid #cce0ff', // Subtle border
    },
    {
      type: 'premium',
      icon: <DiamondOutlinedIcon sx={{ fontSize: 30, color: 'white' }} />,
      titleKey: 'plans.premium.title',
      priceKey: 'plans.premium.price',
      featuresKeys: [
        'plans.premium.feature1',
        'plans.premium.feature2',
        'plans.premium.feature3',
        'plans.premium.feature4',
        'plans.premium.feature5',
        'plans.premium.feature6',
      ],
      buttonKey: 'plans.choosePlan',
      bgColor: 'linear-gradient(135deg, #3399ff 0%, #0065ff 100%)', // Blue gradient
      textColor: 'white',
      shadow: '0 8px 20px rgba(0, 101, 255, 0.3)', // Stronger shadow for premium
    },
  ];

  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        backgroundColor: '#f8f8fa', // A very light grey background matching the image
        textAlign: 'center',
        position: 'relative', // For absolute positioning of sparkle elements
        overflow: 'hidden', // Hide overflow from sparkles
      }}
    >
      {/* Decorative sparkle elements (top left) */}
      <Box sx={{
        position: 'absolute',
        top: { xs: '5%', md: '10%' },
        left: { xs: '5%', md: '15%' },
        fontSize: { xs: '2rem', md: '3rem' },
        color: '#e0c0ff', // Light purple
        transform: 'rotate(15deg)',
        zIndex: 0,
        display: { xs: 'none', sm: 'block' }
      }}>
        ✨
      </Box>
      {/* Decorative sparkle elements (top right) */}
      <Box sx={{
        position: 'absolute',
        top: { xs: '5%', md: '10%' },
        right: { xs: '5%', md: '15%' },
        fontSize: { xs: '2rem', md: '3rem' },
        color: '#e0c0ff', // Light purple
        transform: 'rotate(-15deg)',
        zIndex: 0,
        display: { xs: 'none', sm: 'block' }
      }}>
        ✨
      </Box>

      <Typography
        variant='h3' // Adjusted variant for main title
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: { xs: 2, md: 3 },
          color: 'text.primary',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          zIndex: 1, // Ensure text is above sparkles
        }}
      >
        {t('plans.title') || 'Select your perfect plan'}
      </Typography>
      <Typography
        variant="h6" // Adjusted variant for subtitle
        color="text.secondary"
        sx={{
          mb: { xs: 6, md: 8 }, // More bottom margin for subtitle
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
          zIndex: 1, // Ensure text is above sparkles
        }}
      >
        {t('plans.subtitle') || 'Choose from our flexible subscription plans that fit your budget and learning needs.'}
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch"> {/* Align items to stretch for equal card height */}
        {plansData.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> {/* Responsive grid items */}
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                background: plan.bgColor,
                color: plan.textColor || 'text.primary',
                borderRadius: 4, // More rounded corners
                boxShadow: plan.shadow || '0 4px 15px rgba(0,0,0,0.1)', // Default shadow
                border: plan.borderColor || 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%', // Ensure cards stretch to equal height
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)', // Subtle lift on hover
                }
              }}
            >
              {/* <Box sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: plan.type === 'premium' ? 'rgba(255,255,255,0.2)' : '#cce0ff', // Icon background color
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}>
                {plan.icon}
              </Box> */}

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={1}
                sx={{
                  color: plan.textColor || 'text.primary',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                {t(plan.titleKey)}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
                sx={{
                  color: plan.textColor || 'text.primary',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                {t(plan.priceKey)}
              </Typography>

              <Box sx={{ width: '100%', mb: 3 }}>
                {plan.featuresKeys.map((featureKey, fIndex) => (
                  <Box key={fIndex} sx={{ display: 'flex', alignItems: 'center', mb: 1, textAlign: 'left' }}>
                    <CheckIcon sx={{ fontSize: 20, mr: 1, color: plan.textColor || '#0065ff' }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: plan.textColor || 'text.secondary',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {t(featureKey)}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 'auto', // Push button to bottom
                  backgroundColor: plan.type === 'premium' ? 'white' : '#000', // White button for premium, black for regular
                  color: plan.type === 'premium' ? '#0065ff' : 'white', // Blue text for premium, white for regular
                  '&:hover': {
                    backgroundColor: plan.type === 'premium' ? '#e0e0e0' : '#333',
                    color: plan.type === 'premium' ? '#0065ff' : 'white',
                  },
                  textTransform: 'none',
                  fontWeight: 'bold',
                  py: 1.5,
                  px: 4,
                  borderRadius: '8px',
                  boxShadow: 'none',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                }}
              >
                {t(plan.buttonKey)}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plans;