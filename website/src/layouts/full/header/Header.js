import React, { useState } from 'react';
import {
  AppBar, Toolbar, styled, IconButton, Button, Drawer,
  List, ListItem, ListItemButton, ListItemText, Box, Stack,
  Select, MenuItem, FormControl
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { Logo } from 'react-mui-sidebar';
// import { NavLink } from 'react-router-dom'; // No longer needed for scroll links
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Use RouterLink for routes not handled by scroll
import logoicn from "../../../assets/images/logos/dark1-logo.svg";

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../../context/ThemeContext';

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const { toggleDirection } = useThemeContext();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const navLinks = [
    { label: t("header.home"), to: 'home' }, // 'to' is now the ID of the section
    { label: t("header.features"), to: 'features' },
    { label: t("header.aboutUs"), to: 'about' },
    { label: t("header.testimonials"), to: 'testimonials' },
    { label: t("header.pricing"), to: 'pricing' },
  ];

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
    toggleDirection(lang === 'he');
  };

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)', // Subtle shadow
    background: theme.palette.background.paper, // Use theme paper background
    backdropFilter: 'blur(8px)', // Slightly stronger blur
    zIndex: theme.zIndex.appBar + 1, // Ensure it's above other content
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.breakpoints.values.lg, // Constrain width for larger screens
    margin: '0 auto', // Center the toolbar content
    padding: theme.spacing(1, 4), // Responsive padding
    minHeight: '64px', // Standard min height for toolbar
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(1, 2), // Adjust padding for smaller screens
    },
  }));

  return (
    <>
      <AppBarStyled position="sticky" color="default">
        <ToolbarStyled>

          {/* Hamburger Icon - Mobile only */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'inline-flex', lg: 'none' }, mr: 1 }} // Margin right for spacing
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          {/* Using RouterLink for dashboard navigation */}
          <Box sx={{ margin: "0 -24px" }}>
            <Logo
              img={logoicn}
              component={RouterLink} // Use RouterLink for internal app routes
              to="/"
              sx={{
                width: { xs: "50px", sm: "50px", md:"50px" }, // Responsive logo size
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                '& img': {
                  width: '100%',
                  height: 'auto',
                }
              }}
              color="inherit"
            >
              {/* Optional: if you want text next to logo, otherwise remove */}
              {/* Flexy */}
            </Logo>
          </Box>

          <Box flexGrow={1} /> {/* Pushes content to the sides */}

          {/* Desktop Nav */}
          <Stack spacing={3} direction="row" alignItems="center" sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {navLinks.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.to} // ID of the section to scroll to
                spy={true} // Make Link selected when scroll is at its target position
                smooth={true} // Enable smooth scrolling
                offset={-70} // Adjust scroll position if you have a fixed header
                duration={500} // Scroll animation duration
                activeClass="active-nav-link" // Class applied when link is active
                style={{
                  textDecoration: 'none', // Remove underline
                  cursor: 'pointer', // Indicate clickable
                }}
              >
                <Button
                component={RouterLink} // Use RouterLink for external routes or non-scroll routes
              to="/home"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: 15, // Slightly larger font size
                    color: 'black',
                    '&:hover': { color: 'primary.main', backgroundColor: 'transparent' }, // Hover effect
                    '&.active-nav-link': { // Styling for the active link
                      color: 'primary.main',
                      fontWeight: 600, // Make active link bold
                    },
                  }}
                >
                  {item.label}
                </Button>
              </ScrollLink>
            ))}

            <Button
              variant="contained"
              component={RouterLink} // Use RouterLink for external routes or non-scroll routes
              to="/auth/register"
              sx={{
                backgroundColor: 'black',
                color: 'white',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: 15, // Consistent font size
                borderRadius: '8px', // Slightly rounded corners
                px: 3, // Horizontal padding
                py: 1, // Vertical padding
                '&:hover': {
                  backgroundColor: '#333',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add subtle shadow on hover
                },
              }}
            >
              {t("header.signup")}
            </Button>

            <FormControl variant="standard">
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                disableUnderline
                displayEmpty
                inputProps={{
                  IconComponent: () => <LanguageIcon sx={{ color: 'text.secondary', ml: 0.5 }} />, // Icon color and spacing
                }}
                sx={{
                  fontSize: 14, // Consistent font size
                  minWidth: 60, // Minimum width for select
                  '.MuiSelect-select': {
                    padding: '4px 24px 4px 8px', // Adjust padding for text and icon
                    display: 'flex',
                    alignItems: 'center',
                  },
                  '& .MuiSvgIcon-root': {
                    right: 4, // Position the icon
                  },
                  '&:focus': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="he">HE</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </ToolbarStyled>
      </AppBarStyled>

      {/* Drawer for Mobile Nav */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { lg: 'none' } }}
      >
        <Box
          sx={{ width: 250, pt: 2 }} // Add padding to the top of the drawer content
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={ScrollLink} // Use ScrollLink for drawer items too
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active-nav-link"
                  onClick={toggleDrawer(false)} // Close drawer on click
                  sx={{
                    '&.active-nav-link': {
                      backgroundColor: 'action.selected', // Highlight active item in drawer
                      color: 'primary.main',
                      fontWeight: 600,
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2, px: 2 }}> {/* Margin top and horizontal padding */}
              <Button
                fullWidth
                variant="contained"
                component={RouterLink}
                to="/auth/register"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: '8px',
                  py: 1.2,
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                {t("header.signup")}
              </Button>
            </ListItem>
            <ListItem sx={{ px: 2 }}>
              <FormControl fullWidth>
                <Select
                  value={i18n.language}
                  onChange={handleLanguageChange}
                  displayEmpty
                  inputProps={{
                    IconComponent: () => <LanguageIcon fontSize="small" />,
                  }}
                  sx={{
                    fontSize: 14,
                    mt: 1,
                    '.MuiSelect-select': { padding: '8px 28px 8px 8px' },
                  }}
                >
                  <MenuItem value="en">EN</MenuItem>
                  <MenuItem value="he">HE</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;