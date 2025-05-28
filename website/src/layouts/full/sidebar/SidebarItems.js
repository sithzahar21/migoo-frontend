import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import {
  Logo,
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from 'react-mui-sidebar';
import { IconPoint } from '@tabler/icons-react';
import Menuitems from './MenuItems';

import logoicn     from '../../../assets/images/logos/logo-migoo.svg';
import logoicndark from '../../../assets/images/logos/logo-migoo-dark.svg';

import { useThemeContext } from '../../../context/ThemeContext';
import { useTranslation }  from 'react-i18next';

const renderMenuItems = (items, pathDirect, t) =>
  items.map((item) => {
    const Icon     = item.icon || IconPoint;
    const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

    /* Section header ---------------------------------------------------- */
    if (item.subheader) {
      return (
        <Box sx={{ margin: '0 -24px', textTransform: 'uppercase' }} key={item.subheader}>
          <Menu subHeading={t(item.i18n || item.subheader)} />
        </Box>
      );
    }

    /* Nested submenu ---------------------------------------------------- */
    if (item.children) {
      return (
        <Submenu
          key={item.id}
          title={t(item.i18n)}
          icon={itemIcon}
          borderRadius="7px"
        >
          {renderMenuItems(item.children, pathDirect, t)}
        </Submenu>
      );
    }

    /* Leaf menu item ---------------------------------------------------- */
    return (
      <MenuItem
        key={item.id}
        isSelected={pathDirect === item.href}
        icon={itemIcon}
        component={NavLink}
        link={item.href || '#'}
        badge={!!item.chip}
        badgeContent={item.chip}
        badgeColor="secondary"
        badgeTextColor="#49BEFF"
        disabled={item.disabled}
        borderRadius="7px"
      >
        {t(item.i18n)}
      </MenuItem>
    );
  });

const SidebarItems = () => {
  const location     = useLocation();
  const pathDirect   = location.pathname;
  const { isDarkMode } = useThemeContext();
  const { t }          = useTranslation();

  return (
    <Box sx={{ px: 3, overflowX: 'hidden' }}>
      <MUI_Sidebar
        width="100%"
        showProfile={false}
        themeColor="#5D87FF"
        themeSecondaryColor="#49BEFF1a"
        mode={isDarkMode ? 'dark' : 'light'}
      >
        {/* Logo */}
        <Box sx={{ margin: '0 -24px' }}>
          <Logo img={isDarkMode ? logoicndark : logoicn} component={NavLink} to="/">
            Flexy
          </Logo>
        </Box>

        {/* Menu */}
        {renderMenuItems(Menuitems, pathDirect, t)}
      </MUI_Sidebar>

      {/* Logout */}
      <Box mt={1} py={1} px={2}>
        <Button
          variant="outlined"
          color="primary"
          component={NavLink}
          to="/auth/login"
          fullWidth
        >
          {t('menu.logout')}
        </Button>
      </Box>
    </Box>
  );
};

export default SidebarItems;
