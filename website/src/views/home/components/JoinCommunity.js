import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Paper, IconButton, CssBaseline } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// --- i18n.js content (integrated for self-contained example) ---
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          joinCommunity: {
            heading: "Join a community of 10,000+ students!",
            testimonials: [
              {
                quote: "Migoo transformed my English learning journey with interactive lessons and practical exercises that truly worked for me. The personalized feedback was invaluable.",
                scoreLabel: "Score in English psychometric exam:",
                score: "139",
                name: "Eitam, Haifa",
                role: "Student",
                // image will be dynamically assigned from imgs array
              },
              {
                quote: "I never thought learning English could be this engaging! Migoo's approach made complex topics easy to understand and remember. Highly recommend!",
                scoreLabel: "Score in English proficiency test:",
                score: "92%",
                name: "Sarah, Tel Aviv",
                role: "Professional",
                // image will be dynamically assigned from imgs array
              },
              {
                quote: "Thanks to Migoo, my confidence in speaking English has soared. The real-life scenarios and conversational practice were game-changers.",
                scoreLabel: "Improvement in speaking fluency:",
                score: "40%",
                name: "David, Jerusalem",
                role: "Researcher",
                // image will be dynamically assigned from imgs array
              },
              {
                quote: "The interactive lessons and real-time feedback from Migoo have significantly improved my English pronunciation and grammar. It's truly an innovative platform.",
                scoreLabel: "Grammar accuracy improvement:",
                score: "35%",
                name: "Maria, London",
                role: "Designer",
                // image will be dynamically assigned from imgs array
              }
            ]
          }
        }
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// --- theme.js content (integrated for self-contained example) ---
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      main: '#0065ff', // Main blue color
    },
    text: {
      primary: '#333333', // Dark text
      secondary: '#666666', // Lighter text
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
      `,
    },
  },
});

// --- JoinCommunity.js content ---
const JoinCommunity = () => {
  const { t } = useTranslation();
  // Fetch testimonials data from i18n
  const rawTestimonials = t('joinCommunity.testimonials', { returnObjects: true });

  // Array of user image URLs
  const imgs = [
    "https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg",
    "https://media.istockphoto.com/id/870079648/photo/seeing-things-in-a-positive-light.jpg?s=170667a&w=0&k=20&c=0p7KCODmXjvX-9JkkrHg9SPL0zojHb_8ygOfPylt3W8=",
    "https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875",
    "https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875",
    "https://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1653932875"
  ];

  // Assign images from the imgs array to each testimonial
  const testimonials = rawTestimonials.map((item, index) => ({
    ...item,
    image: imgs[index % imgs.length] // Cycle through images if there are more testimonials than images
  }));

  return (
    <Box
      id="testimonials"
      sx={{
        bgcolor: '#eaf2ff', // Light blue background matching image
        py: { xs: 8, md: 10 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={{ xs: 5, md: 8 }}
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
          color: 'text.primary',
        }}
      >
        {t('joinCommunity.headingFirstPart')} {" "} <span style={{color:'#0065ff'}}>10,000+</span> {" "} {t('joinCommunity.headingSecondPart')}
      </Typography>

      <Carousel
        navButtonsAlwaysVisible={true} // Keep nav buttons visible
        indicators={true} // Keep indicators visible
        animation='slide'
        timeout={500} // Animation speed
        sx={{
          maxWidth: { xs: '100%', sm: '650px', md: '700px' }, // Max width for the carousel container
          margin: '0 auto', // Center the carousel
        }}
        // Custom NavButtons for the specific look from the image
        NavButton={({ onClick, className, style, next, prev }) => {
          const arrowStyle = {
            position: 'absolute',
            top: 'auto',
            bottom: '-70px', // Position below the card
            transform: 'translateY(0)', // Reset transform from default Carousel NavButton
            backgroundColor: 'transparent',
            color: '#0065ff', // Blue color for arrows
            '&:hover': {
              backgroundColor: 'transparent',
            },
            boxShadow: 'none',
            fontSize: '1.5rem', // Larger arrow size
          };
          return (
            <IconButton onClick={onClick} className={className} style={style} sx={arrowStyle}>
              {next && <ArrowForwardIosIcon />}
              {prev && <ArrowBackIosIcon />}
            </IconButton>
          );
        }}
        // Custom indicator styling to match the image
        indicatorContainerProps={{
          style: {
            marginTop: '30px', // Space between card and indicators
            textAlign: 'center',
          }
        }}
        indicatorIconButtonProps={{
          style: {
            padding: '8px',
            color: '#b0b0b0', // Grey for inactive indicators
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#0065ff', // Blue for active indicator
          }
        }}
      >
        {testimonials.map((item, index) => (
          <Paper
            key={index}
            elevation={0} // No default elevation, will apply custom shadow
            sx={{
              p: { xs: 4, sm: 5, md: 6 }, // More padding for content
              bgcolor: '#fff', // White background
              borderRadius: 3, // More rounded corners
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)', // Subtle shadow matching image
              mx: { xs: 1, sm: 2 }, // Horizontal margin for spacing between cards (if multiple shown)
              position: 'relative', // For absolute positioning of quote icon
              textAlign: 'left', // Default LTR text alignment
              minHeight: { xs: '250px', sm: '200px', md: '220px' }, // Ensure a consistent height for cards
              display: 'flex', // Make Paper a flex container
              flexDirection: 'row', // Arrange items in a row
              alignItems: 'center', // Vertically center items (image and text)
            }}
          >
            {/* Large blue quote icon at top-right, inside the card, as a subtle background */}
            <FormatQuoteIcon
              sx={{
                color: '#0065ff',
                fontSize: { xs: 50, sm: 60, md: 70 },
                position: 'absolute',
                top: { xs: 10, sm: 15 },
                right: { xs: 10, sm: 15 },
                zIndex: 0, // Behind the content
                opacity: 0.1, // Subtle
              }}
            />

            {/* User Image */}
            {/* <Box
              sx={{
                width: { xs: 60, sm: 80 },
                height: { xs: 60, sm: 80 },
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0, // Prevent shrinking
                mr: { xs: 2, sm: 3 }, // Margin right for spacing between image and text
                // mt: 0, // Removed as alignItems: 'center' handles vertical alignment
                backgroundImage: `url(${item.image || 'https://placehold.co/80x80/aabbcc/ffffff?text=User'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            /> */}

            {/* Text Content Wrapper */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography
                variant="h6"
                sx={{
                  mb: { xs: 2, md: 3 },
                  fontStyle: 'italic',
                  fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
                  color: 'text.primary',
                }}
              >
                {item.quote}
              </Typography>

              <Box mt="auto"> {/* Push the score, name, and role to the bottom */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    mb: 0.5,
                  }}
                >
                  English test score{' '}
                  <Typography component="span" fontWeight="bold" sx={{ color: '#0065ff' }}>
                    {item.score || ''}
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                  }}
                >
                  {item.role}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

// --- App.js content (main component to render) ---
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets CSS and applies base styles */}
        <div className="App">
          <JoinCommunity />
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
