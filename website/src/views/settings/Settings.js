import React from 'react';
import { useTranslation } from 'react-i18next';
import HeadingTitle from '../../components/headingtitle/HeadingTitle';
import PersonalInformation from './components/PersonalInformation';
import LanguagePreferences from './components/LanguagePreferences';
import DisplaySettings from './components/DisplaySettings';
import EmailNotifications from './components/EmailNotifications';
import SubscriptionPlan from './components/SubscriptionPlan';
import { Button, Typography } from '@mui/material';

const Settings = () => {
  const { t, i18n } = useTranslation();

  // Optional: Handle direction change for Hebrew (rtl)
  const isRtl = i18n.language === 'he';

  return (
    <>
      <HeadingTitle
        title={t('settings.personalInformation.title')}
        subtitle={t('settings.personalInformation.subtitle')}
      />
      <PersonalInformation />

      <HeadingTitle
        title={t('settings.subscriptionPlan.title')}
        subtitle={t('settings.subscriptionPlan.subtitle')}
      />
      <SubscriptionPlan />

      <HeadingTitle
        title={t('settings.emailNotifications.title')}
        subtitle={t('settings.emailNotifications.subtitle')}
      />
      <EmailNotifications />

      <HeadingTitle
        title={t('settings.displaySettings.title')}
        subtitle={t('settings.displaySettings.subtitle')}
      />
      <DisplaySettings />

      <HeadingTitle
        title={t('settings.languagePreferences.title')}
        subtitle={t('settings.languagePreferences.subtitle')}
      />
      <LanguagePreferences />

      <div style={{ marginTop: '50px', direction: isRtl ? 'rtl' : 'ltr', textAlign: isRtl ? 'right' : 'left' }}>
        <div>
          <Typography variant="h4">{t('settings.savePreferences.heading')}</Typography>
          <Typography variant="h6" mt={2}>{t('settings.savePreferences.subheading')}</Typography>
        </div>
      </div>

      <Button variant="contained" style={{ margin: '20px 0px' }}>
        {t('settings.savePreferences.button')}
      </Button>
    </>
  );
};

export default Settings;
