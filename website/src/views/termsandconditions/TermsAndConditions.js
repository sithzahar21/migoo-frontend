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

const TermsAndConditions = ({ onAccept }) => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use
      </Typography>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Introduction:
        </Typography>
        <Typography variant="body1">
          Welcome to Migoo, your AI-powered English learning companion. These{' '}
          <Typography component="span" fontWeight="bold">
            Terms of Use
          </Typography>{' '}
          govern your use of our services.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Acceptance of Terms:
        </Typography>
        <Typography variant="body1">
          By accessing and using our services, you agree to these{' '}
          <Typography component="span" fontWeight="bold">
            Terms of Use
          </Typography>
          .
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Changes to Terms:
        </Typography>
        <Typography variant="body1">
          Migoo reserves the right to modify these terms at any time.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Services:
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
          User Responsibilities:
        </Typography>
        <Typography variant="body1">
          Users must use the services in compliance with all applicable laws and
          regulations. Users are responsible for the content they generate and
          share through our platform.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Intellectual Property:
        </Typography>
        <Typography variant="body1">
          All content provided by Migoo, including AI-generated content, is owned
          by us or our licensors and is protected by copyright and other
          intellectual property laws.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Limitation of Liability:
        </Typography>
        <Typography variant="body1">
          Migoo is not responsible for any damages or losses resulting from your
          use of our services, to the maximum extent permitted by law.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Governing Law:
        </Typography>
        <Typography variant="body1">
          These Terms of Use are governed by the laws of the jurisdiction where
          Migoo is based.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Contact Information:
        </Typography>
        <Typography variant="body1">
          For any questions or concerns about these Terms of Use, please contact
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

export default TermsAndConditions;
