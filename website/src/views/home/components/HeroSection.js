import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroCurve from "../../../assets/images/general/hero-curve.svg";
import manImg from "../../../assets/images/general/manImg.svg";

import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../context/ThemeContext";

export default function HeroSection() {
  const { t } = useTranslation();
  const { isRtl } = useThemeContext();

  return (
    <Box
      id="home"
      sx={{
        height:"100vh",
        px: 4,
        py: 10,
        background: {xs:'#2a8efe', sm:"#2a8efe", md:"linear-gradient(to right, #f8f9ff, #e8f0ff)"},
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* Content and Man Image Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "lg",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        {/* Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            maxWidth: { xs: "100%", md: "50%" }, // Keep content max width to allow image to grow
            zIndex: 1,
            position: "relative",
            mt: {xs:-10, sm:-10, md:-10},
            textAlign: { xs: "center", sm: "left", md: "left" },
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.2rem" },
              lineHeight: { xs: 1.2, md: 1.3 },
              color: {xs:"#fff", sm:"#fff", md:"text.primary"},
              maxWidth: { xs: "100%", sm: "80%", md: "100%" },
            }}
          >
            {t("hero.heading")}
          </Typography>

          <Typography
            mt={2}
            mb={4}
            variant="body1"
            sx={{
              fontSize: { xs: "1.05rem", md: "1rem" },
              lineHeight: 1.6,
              // color: "text.secondary",
              color: {xs:"#fff", sm:"#fff", md:"text.secondary"},

              maxWidth: { xs: "90%", sm: "70%", md: "100%" },
            }}
          >
            {t("hero.subHeading")}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
            backgroundColor: {xs:"#fff", sm:"#fff", md:"#2a8efe"},
            color: {xs:"#2a8efe", sm:"#2a8efe", md:"#fff"},
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textTransform: "none",
            }}
          >
            {t("hero.button")}
          </Button>
        </Box>

        {/* Background Curve - Positioned and mirrored based on direction */}
        <Box
          component="img"
          src={HeroCurve}
          alt="Hero graphic"
          sx={{
            position: "absolute",
            top: '60px',
            right:0,
            display: { xs: "none", md: "block" },
            maxWidth: "900px",
            height: "auto",
            zIndex: 0,
            transform: isRtl ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
        {/* Man Image */}
        {/* <Box
          component="img"
          src={manImg}
          alt="Man working"
          sx={{
            // Adjusted width and maxWidth to make the image bigger
            mt:5,
            width: { xs: "80%", md: "50%" }, // Increased width for larger screens
            maxWidth: "550px", // Increased max width
            display: { xs: "none", md: "block" },
            height: "auto",
            zIndex: 2,
            // transform: isRtl ? "scaleX(-1)" : "scaleX(1)", // Mirror horizontally for RTL
          }}
        /> */}
        <Box
  component="img"
  src={manImg}
  alt="Man working"
  sx={{
    mt: 5,
    width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" }, // Responsive width at various breakpoints
    maxWidth: "550px", // Limit the largest size
    display: { xs: "none", md: "block" }, // Show on all sizes
    height: "auto",
    zIndex: 2,
    objectFit: "contain", // Optional: maintain aspect ratio
  }}
/>
      </Box>
    </Box>
  );
}
