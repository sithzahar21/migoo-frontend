import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const questions = t('faq.questions', { returnObjects: true });

  const [expanded, setExpanded] = useState(0); // First one open by default

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      p={{ xs: 4, sm: 6, md: 8, lg: 10 }} // More controlled responsive padding
      bgcolor="#e6f0ff" // Main background color from image
      sx={{
        minHeight: '70vh', // Ensure section has a good minimum height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        py: { xs: 8, md: 12 } // Add top/bottom padding
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        mb={6}
        sx={{
          lineHeight: 1.5,
          fontWeight: 'bold', // Make title bold
          color: 'text.primary',
          fontSize: { xs: '2rem', md: '2.5rem' } // Responsive font size for title
        }}
      >
        {t('faq.title') || 'Frequently Asked Questions'}
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '800px', // Constrain the width of the FAQ list
        }}
      >
        {questions?.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              borderRadius: 2,
              mb: 2,
              mt: 2, // Keep margin top as requested
              // boxShadow: 2, // Default shadow
              backgroundColor: '#fff', // Individual accordion background color
              // Updated border and boxShadow for the expanded state
              border: expanded === index ? '2px solid #3399ff' : '1px solid transparent', // Thicker blue border when expanded
              boxShadow: expanded === index ? '0px 0px 15px rgba(51, 153, 255, 0.4)' : '0px 2px 4px rgba(0,0,0,0.1)', // Blue shadow when expanded, subtle default otherwise
              transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth transition for border and shadow
              '&:before': { // Remove default accordion border on hover/focus
                display: 'none',
              },
              '&.Mui-expanded': {
                margin: 'auto', // Keep accordion centered when expanded
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <IconButton
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '20%', // Keeps the square-ish rounded shape from the image
                    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                    ml: 2,
                    flexShrink: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: expanded === index ? '#3399ff' : 'transparent',
                    // Removed the explicit border for inactive state as it's handled by the Accordion's main border
                    '&:hover': {
                      backgroundColor: expanded === index ? '#2a7fe6' : '#f0f0f0',
                    },
                  }}
                >
                  {expanded === index ? (
                    <RemoveIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                  ) : (
                    <AddIcon sx={{ color: '#3399ff', fontSize: '1.5rem' }} />
                  )}
                </IconButton>
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                minHeight: { xs: 56, sm: 64 },
                '& .MuiAccordionSummary-content': {
                  my: { xs: 1.5, sm: 2 },
                  alignItems: 'center',
                },
                flexDirection: 'row',
                '& .MuiAccordionSummary-expandIconWrapper': {
                  marginLeft: 'auto',
                  marginRight: 0,
                  transform: 'none !important',
                }
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  color: 'text.primary',
                  fontSize: { xs: '1rem', sm: '1.15rem' },
                  textAlign: 'left',
                  flexGrow: 1,
                }}
              >
                {index + 1}. {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 2, px: 2, textAlign: 'left' }}>
              <Typography
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;