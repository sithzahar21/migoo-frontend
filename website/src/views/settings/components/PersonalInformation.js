import React, { useState } from 'react';
import {
  Stack,
  Box,
  IconButton,
  InputAdornment,
  Button,
  Typography,
  Avatar,
  styled,
} from '@mui/material';
import {
  LockOutlined,
  MailOutline,
  Visibility,
  VisibilityOff,
  PersonOutline,
  PhotoCamera,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import UserAvatar from '../../../assets/images/profile/user-3.jpg';

/* hidden file input */
const FileInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const PersonalInformation = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  /* toggle eye icon */
  const togglePassword = () => setShowPassword((prev) => !prev);

  /* preview selected avatar */
  const handleProfilePictureChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfilePicture(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <Stack maxWidth={500} width="100%" spacing={2}>
      {/* ------ Name ------ */}
      <Box>
        <Typography fontWeight={600} component="label" htmlFor="name" mb={0.5}>
          {t('settings.personalInformation.name')}
        </Typography>
        <CustomTextField
          size="small"
          id="name"
          placeholder={t('settings.personalInformation.namePlaceholder')}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* ------ Email ------ */}
      <Box>
        <Typography fontWeight={600} component="label" htmlFor="email" mb={0.5}>
          {t('settings.personalInformation.email')}
        </Typography>
        <CustomTextField
          size="small"
          id="email"
          placeholder={t('settings.personalInformation.emailPlaceholder')}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* ------ Password ------ */}
      <Box>
        <Typography fontWeight={600} component="label" htmlFor="password" mb={0.5}>
          {t('settings.personalInformation.password')}
        </Typography>
        <CustomTextField
          size="small"
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder={t('settings.personalInformation.passwordPlaceholder')}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* ------ Change Password button ------ */}
      <Box mt={2}>
        <Button component={Link} to="/auth/reset-password" variant="contained">
          {t('settings.personalInformation.changePassword')}
        </Button>
      </Box>

      {/* ------ Avatar uploader ------ */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar
          alt="Profile"
          src={profilePicture || UserAvatar}
          sx={{ width: 56, height: 56, mr: 1 }}
        />
        <label htmlFor="profile-picture-input">
          <FileInput
            accept="image/*"
            id="profile-picture-input"
            type="file"
            onChange={handleProfilePictureChange}
          />
          <IconButton component="span" color="primary" size="small">
            <PhotoCamera fontSize="small" />
          </IconButton>
        </label>
      </Box>
    </Stack>
  );
};

export default PersonalInformation;
