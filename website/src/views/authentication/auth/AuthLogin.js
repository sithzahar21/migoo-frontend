import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box, Typography, Button, Stack, Checkbox, FormGroup,
  FormControlLabel, InputAdornment, IconButton
} from '@mui/material';
import {
  Google, LockOutlined, MailOutline,
  Visibility, VisibilityOff
} from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useTranslation } from 'react-i18next';

const AuthLogin = ({ title, subtitle, subtext }) => {
  const { t } = useTranslation();
  const navigate   = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  const togglePwd = () => setShowPwd(p => !p);

  /* Yup validation with translated messages */
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('login.errors.emailFormat'))
      .required(t('login.errors.emailRequired')),
    password: Yup.string()
      .min(6,  t('login.errors.pwdMin'))
      .required(t('login.errors.pwdRequired')),
    rememberMe: Yup.bool()
  });

  const handleSubmit = () => navigate('/dashboard');

  return (
    <>
      {title && (
        <Typography textAlign={"center"} fontWeight={700} variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <Formik
        initialValues={{ email: '', password: '', rememberMe: true }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <Stack>
              {/* Email */}
              <Box>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="email" mb="5px">
                  {t('login.email')}
                </Typography>
                <Field
                  as={CustomTextField}
                  id="email"
                  name="email"
                  placeholder={t('login.emailPlaceholder')}
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
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

              {/* Password */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="password" mb="5px">
                  {t('login.password')}
                </Typography>
                <Field
                  as={CustomTextField}
                  id="password"
                  name="password"
                  placeholder={t('login.pwdPlaceholder')}
                  type={showPwd ? 'text' : 'password'}
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePwd} edge="end">
                            {showPwd ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Box>

              {/* Remember + Forgot */}
              <Stack direction="row" justifyContent="space-between" alignItems="center" my={2}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                      />
                    }
                    label={t('login.remember')}
                  />
                </FormGroup>
                <Typography
                  component={Link}
                  to="/auth/forgot-password"
                  fontWeight={500}
                  sx={{ textDecoration: 'none', color: 'primary.main' }}
                >
                  {t('login.forgot')}
                </Typography>
              </Stack>

              {/* Submit */}
              <Button variant="contained" size="large" fullWidth type="submit">
                {t('login.loginBtn')}
              </Button>

              {/* Divider text */}
              <Typography textAlign="center" sx={{ my: 2, color: 'text.secondary' }}>
                {t('login.or')}
              </Typography>

              {/* Google */}
              <Button
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<Google />}
              >
                {t('login.google')}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>

      {subtitle}
    </>
  );
};

export default AuthLogin;
