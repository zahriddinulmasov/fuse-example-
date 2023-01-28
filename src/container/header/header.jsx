import styles from "./header.module.scss";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import siteLogo from "../../assets/images/site_logo.svg";
import { Button, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";


export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box component="header">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar sx={{ background: "#FFFEF6", boxShadow: "none" }}>
          <Toolbar
            sx={{
              margin: "0 auto",
              maxWidth: "1440px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              color="<summary></summary>"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { xs: "0", sm: "16px" }, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              marginRight="8px"
              component="a"
              sx={{
                height: { xs: "48px", sm: "64px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="/"
            >
              <CardMedia
                component="img"
                src={siteLogo}
                alt="Logo site"
                sx={{ width: { xs: "166px", sm: "283px" } }}
              />
            </Box>
            <Box
              fontWeight="700"
              fontSize="20px"
              lineHeight="25px"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <NavLink to="/" className={styles.links}>
                Hem
              </NavLink>
              <NavLink to="/search" className={styles.links}>
                Sökguide
              </NavLink>
              <NavLink to="/prices" className={styles.links}>
                Priser
              </NavLink>
              <NavLink to="/about" className={styles.links}>
                Om oss
              </NavLink>
              <NavLink to="/contact" className={styles.links}>
                Kontakt
              </NavLink>
            </Box>

            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                marginLeft: "auto",
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: { xs: "12px", sm: "20px" },
                lineHeight: { xs: "16px", sm: "24px" },
                color: "#333333",
                background: "#FFDA3A",
                fontFamily: "Source Serif Pro",

                "&:hover": {
                  backgroundColor: "rgba(245, 213, 39, 0.5)",
                },
              }}
            >
              Logga in
            </Button>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Box
                component="a"
                sx={{
                  height: { xs: "48px", sm: "64px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                href="/"
              >
                <CardMedia
                  component="img"
                  src={siteLogo}
                  alt="Logo site"
                  sx={{ width: 180 }}
                />
              </Box>

              <Divider />
              <List sx={{ display: "flex", flexDirection: "column" }}>
                <NavLink to="/" className={styles.list_links}>
                  Hem
                </NavLink>
                <NavLink to="/search" className={styles.list_links}>
                  Sökguide
                </NavLink>
                <NavLink to="/prices" className={styles.list_links}>
                  Priser
                </NavLink>
                <NavLink to="/about" className={styles.list_links}>
                  Om oss
                </NavLink>
                <NavLink to="/contact" className={styles.list_links}>
                  Kontakt
                </NavLink>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};
