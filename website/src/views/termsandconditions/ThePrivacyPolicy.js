import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  useTheme,
  Container
} from '@mui/material';

const PrivacyPolicy = ({ onAccept }) => {
  const theme = useTheme();

  return (
     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Introduction:
        </Typography>
        <Typography variant="body1">
          Migoo is committed to protecting your privacy. This policy outlines how
          we handle your personal information.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Information We Collect:
        </Typography>
        <Typography variant="body1">
          We collect information necessary to provide our services, including
          your name and email address.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          How We Use Your Information:
        </Typography>
        <Typography variant="body1">
          We use your information to provide our services, improve our platform,
          and communicate with you.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Information Sharing and Disclosure:
        </Typography>
        <Typography variant="body1">
          Migoo provides a platform for AI-generated English language learning
          content, including vocabulary exercises, reading comprehension, and
          test preparation. The specific features and offerings depend on the
          chosen plan.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Data Security:
        </Typography>
        <Typography variant="body1">
          We implement security measures to protect your personal information.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Cookies and Other Tracking Technologies:
        </Typography>
        <Typography variant="body1">
          We use cookies and similar technologies to improve your experience on
          our platform.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Changes to This Policy:
        </Typography>
        <Typography variant="body1">
          We will notify you of any significant changes to this policy.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Contact Information:
        </Typography>
        <Typography variant="body1">
          For any questions or concerns about this Privacy Policy, please contact
          us at{' '}
          <Typography
            component="a"
            href="mailto:contact@migooai.com"
            color="primary"
          >
            contact@migooai.com
          </Typography>
          .
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
