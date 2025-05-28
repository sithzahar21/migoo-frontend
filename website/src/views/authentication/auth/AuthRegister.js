import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Stack,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Autocomplete
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Google, LockOutlined, MailOutline, Person2Outlined } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import './style.css';

const countries = [
  { label: 'India' }, { label: 'USA' }, { label: 'Hungary' }, { label: 'Europe' },
  { label: 'Australia' }, { label: 'Sri Lanka' }, { label: 'Andaman' },
  { label: 'Nicobar' }, { label: 'England' }, { label: 'Antarctica' }, { label: 'Africa' },
  { label: 'Bangladesh' }
];

const AuthRegister = ({ title, subtitle, subtext }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('register.validation.nameRequired'),
    email: Yup.string().email('register.validation.invalidEmail').required('register.validation.emailRequired'),
    country: Yup.object().nullable().required('register.validation.countryRequired'),
    password: Yup.string()
      .min(6, 'register.validation.passwordMin')
      .required('register.validation.passwordRequired'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'register.validation.passwordsMatch')
      .required('register.validation.confirmPasswordRequired'),
    terms: Yup.boolean().oneOf([true], 'register.validation.terms')
  });

  const initialValues = {
    name: '',
    email: '',
    country: null,
    password: '',
    confirmPassword: '',
    terms: false
  };

  const onSubmit = (values) => {
    console.log('Form Submitted ✅:', values);
    navigate('/auth/confirm-email');
  };

  return (
    <>
      {title && (
        <Typography textAlign="center" fontWeight={700} variant="h2" mb={1}>
          {t('register.title')}
        </Typography>
      )}
      {subtext}

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <Stack mb={3}>
              {/* Name */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="name" mb={0.5}>
                  {t('register.name')}
                </Typography>
                <CustomTextField
                  name="name"
                  placeholder={t('register.namePlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && t(errors.name)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person2Outlined />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Box>

              {/* Email */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="email" mb={0.5}>
                  {t('register.email')}
                </Typography>
                <CustomTextField
                  name="email"
                  placeholder={t('register.emailPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && t(errors.email)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutline />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Box>

              {/* Country */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="country" mb={0.5}>
                  {t('register.country')}
                </Typography>
                <Autocomplete
                  options={countries}
                  getOptionLabel={(option) => option?.label || ''}
                  value={values.country}
                  onChange={(event, value) => setFieldValue('country', value)}
                  fullWidth
                  size="small"
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      placeholder={t('register.countryPlaceholder')}
                      error={touched.country && Boolean(errors.country)}
                      helperText={touched.country && t(errors.country)}
                    />
                  )}
                />
              </Box>

              {/* Password */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="password" mb={0.5}>
                  {t('register.password')}
                </Typography>
                <CustomTextField
                  name="password"
                  placeholder={t('register.passwordPlaceholder')}
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && t(errors.password)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Box>

              {/* Confirm Password */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="confirmPassword" mb={0.5}>
                  {t('register.confirmPassword')}
                </Typography>
                <CustomTextField
                  name="confirmPassword"
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && t(errors.confirmPassword)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Box>

              {/* Terms */}
              <Stack direction="row" alignItems="center" my={2}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="terms" checked={values.terms} onChange={handleChange} />
                    }
                    label={
                      <>
                        {t('register.termsPrefix')}{' '}
                        <Link to="/terms-of-service" style={{ color: '#007bff', textDecoration: 'none' }}>
                          {t('register.termsOfService')}
                        </Link>{' '}
                        {t('register.and')}{' '}
                        <Link to="/privacy-policy" style={{ color: '#007bff', textDecoration: 'none' }}>
                          {t('register.privacyPolicy')}
                        </Link>.
                      </>
                    }
                  />
                  {touched.terms && errors.terms && (
                    <Typography color="error" variant="caption">
                      {t(errors.terms)}
                    </Typography>
                  )}
                </FormGroup>
              </Stack>
            </Stack>

            {/* Submit */}
            <Button color="primary" variant="contained" size="large" fullWidth type="submit">
              {t('register.createAccount')}
            </Button>
          </Form>
        )}
      </Formik>

      <p className="text-with-lines">{t('register.orContinue')}</p>

      {/* Google */}
      <Box>
        <Button
          color="primary"
          variant="outlined"
          size="large"
          fullWidth
          startIcon={<Google />}
          component={Link}
          to="/"
        >
          {t('register.google')}
        </Button>
      </Box>

      {subtitle}
    </>
  );
};

export default AuthRegister;
