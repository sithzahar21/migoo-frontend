import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  InputAdornment,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlined from '@mui/icons-material/LockOutlined';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const AuthResetPassword = ({ title, subtext }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Yup schema with i18n keys (messages resolved in helperText via t())
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('resetPassword.validation.passwordRequired')
      .min(8, 'resetPassword.validation.passwordMin'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'resetPassword.validation.passwordsMatch')
      .required('resetPassword.validation.confirmPasswordRequired')
  });

  return (
    <>
      {title && (
        <Typography textAlign="center" fontWeight={700} variant="h2" mb={1}>
          {t('resetPassword.title')}
        </Typography>
      )}

      {subtext}

      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted', values);
          navigate('/dashboard');
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Stack>
              {/* New Password */}
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="password"
                  mb="5px"
                >
                  {t('resetPassword.newPassword')}
                </Typography>

                <CustomTextField
                  id="password"
                  name="password"
                  placeholder={t('resetPassword.newPasswordPlaceholder')}
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  fullWidth
                />
              </Box>

              {/* Confirm Password */}
              <Box mt="25px">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="confirmPassword"
                  mb="5px"
                >
                  {t('resetPassword.confirmPassword')}
                </Typography>

                <CustomTextField
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t('resetPassword.confirmPasswordPlaceholder')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  fullWidth
                />
              </Box>
            </Stack>

            {/* Submit */}
            <Box mt="25px">
              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                disabled={Object.keys(errors).length > 0}
              >
                {t('resetPassword.save')}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthResetPassword;
