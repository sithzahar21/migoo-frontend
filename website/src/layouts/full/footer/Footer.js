'use client';
import { Typography } from "@mui/material";
import {Grid2, Box} from "@mui/material";
import { Logo } from "react-mui-sidebar";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoicn from "../../../assets/images/logos/light1-logo.svg"
import { IconMail } from "@tabler/icons-react";
import { Link as RouterLink } from 'react-router-dom'; // Use RouterLink for routes not handled by scroll


const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box p={"2% 0 2% 0"}>
       <Box 
       display="flex" alignItems="center" justifyContent="center">
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
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', margin:"auto" }}>
      <IconMail sx={{ mr: 1, color: 'primary.main' }} />
      <Typography>Contact@migooai.com</Typography>
    </Box>
    <Grid2
      m={5}
      textAlign="center"
      container
      // spacing={5}
      justifyContent={"center"}
      spacing={{ xs: 2, md: 5, lg:5 }}
      // columns={{ xs: 4, sm: 8, md: 12 }}
    >

      <Grid2 xs={12} sm={12} md={4}>
        <Typography style={{color:'black'}}>
          © {new Date().getFullYear()} {t("footer.rights")}
        </Typography>
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <NavLink to="/privacy-policy" style={{ textDecoration: 'none', color:'black' }}>
          <Typography>{t("footer.privacyPolicy")}</Typography>
        </NavLink>
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <NavLink to="/terms-and-conditions" style={{ textDecoration: 'none', color:'black' }}>
          <Typography>{t("footer.terms")}</Typography>
        </NavLink>
      </Grid2>
    </Grid2>
    </Box>

  );
};

export default Footer;
