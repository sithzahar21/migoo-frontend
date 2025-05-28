import React from 'react';
import { TextField } from '@mui/material';
import MessageSentModal from '../modals/messagesent/MessageSentModal';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form style={{ maxWidth: '500px', width: '100%' }}>
      <TextField
        id="name"
        label={t('contactForm.nameLabel')}
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2, mt: 2 }}
      />
      <TextField
        id="subject"
        label={t('contactForm.subjectLabel')}
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        id="message"
        label={t('contactForm.messageLabel')}
        multiline
        rows={4}
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
      />

      <div>
        <MessageSentModal />
      </div>
    </form>
  );
};

export default ContactForm;
