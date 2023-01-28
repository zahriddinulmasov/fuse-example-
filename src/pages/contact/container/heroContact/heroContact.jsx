import {
  Avatar,
  Box,
  Button,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import phone from "../../../../assets/images/phone.svg";
import house from "../../../../assets/images/house.svg";
import timer from "../../../../assets/images/timer.svg";
import telegram from "../../../../assets/images/telegram.svg";
import instagram from "../../../../assets/images/instagram.svg";
import facebook from "../../../../assets/images/facebook.svg";

export const HeroContact = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#FFFEF6",
          padding: {
            xs: "20px 20px",
            sm: "40px 24px",
            md: "80px 24px",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid sx={{ width: { xs: "100%", md: "70%" } }}>
            <Box sx={{ maxWidth: "562px", mb: "22px" }}>
              <Typography
                variant="h2"
                component="div"
                sx={{
                  mb: "8px",
                  fontFamily: "Source Serif Pro",
                  fontWeight: "600",
                  fontSize: { xs: "30px", sm: "35px", md: "40px" },
                  color: "#2B2B2B",
                }}
              >
                Hör av dig
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "#6F737C",
                }}
              >
                Söker du efter en byggfirma som kan hjälpa dig med
                köksrenovering i Stockholm? Då är vi den rätta firman för dig!
              </Typography>
            </Box>

            <Box>
              <Grid
                container
                spacing={2}
                sx={{ mb: { xs: "4px", sm: "12px", md: "22px" } }}
              >
                <Grid xs={6} p="0 25px 0 0 ">
                  <TextField
                    id="standard-multiline-flexible"
                    label="Namn"
                    multiline
                    maxRows={4}
                    sx={{ width: "100%" }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={6} sx={{ p: { xs: "0", md: "0 25px 0 0" } }}>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Efternamn"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2}
                sx={{ mb: { xs: "4px", sm: "12px", md: "22px" } }}
              >
                <Grid xs={6} p="0 25px 0 0 ">
                  <TextField
                    id="standard-multiline-flexible"
                    label="E-post"
                    multiline
                    maxRows={4}
                    sx={{ width: "100%" }}
                    variant="standard"
                  />
                </Grid>
                <Grid xs={6} sx={{ p: { xs: "0", md: "0 25px 0 0" } }}>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Telefonnummer"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>

              <TextField
                id="standard-number"
                label="Meddelande"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                sx={{
                  mt: { xs: "6px", sm: "12px", md: "22px", lg: "32px" },
                  width: "100%",
                  p: { xs: "0", md: "0 25px 0 0" },
                }}
              />
            </Box>

            <Box
              sx={{
                m: { xs: "15px 0 10px", sm: "20px 0 25px", md: "25px 0 50px" },
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mr: { xs: "0", md: "25px" },
                  boxShadow: "none",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { xs: "15px", sm: "18px" },
                  padding: { xs: "5px 15px", sm: "6px 20px" },
                  color: "#333333",
                  background: "#FFDA3A",
                  fontFamily: "Source Serif Pro",

                  "&:hover": {
                    backgroundColor: "rgba(245, 213, 39, 0.5)",
                  },
                }}
              >
                Skicka In
              </Button>
            </Box>
          </Grid>

          <Grid
            sx={{
              width: { xs: "100%", md: "30%" },
              pl: { xs: "8px", md: "5%" },
              display: { xs: "flex", md: "inline" },
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "none",
              },
              flexWrap: "wrap",
            }}
          >
            {/* bgcolor: deepOrange[500], */}
            <Box
              sx={{
                display: "flex",
                maxWidth: { xs: "211px", md: "283px" },
                mb: { xs: "12px", sm: "20px", md: "35px" },
              }}
            >
              <Avatar
                sx={{
                  mr: "10px",
                  color: "white",
                  background: "none",
                  width: "30px",
                  height: "30px",
                }}
                variant="square"
                src={phone}
              />

              <Box mt="10px">
                <Typography
                  variant="h5"
                  sx={{
                    mb: "7px",
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#2B2B2B",
                  }}
                >
                  Adress
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#2B2B2B",
                  }}
                >
                  SMÅLANDSVÄGEN 00 F LGH 1111 Mjölby
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                maxWidth: "283px",
                mb: { xs: "12px", sm: "20px" },
              }}
            >
              <Avatar
                sx={{
                  mr: "10px",
                  color: "white",
                  background: "none",
                  width: "30px",
                  height: "30px",
                }}
                variant="square"
                src={house}
              />

              <Box mt="10px">
                <Typography
                  variant="h5"
                  sx={{
                    mb: "7px",
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#2B2B2B",
                  }}
                >
                  Telefon
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontSize: "15px",
                    lineHeight: "18px",
                  }}
                >
                  <Box
                    component="a"
                    href="tel: 0760-609500"
                    sx={{ textDecoration: "none", color: "#3B3B3B" }}
                  >
                    0760-609500
                  </Box>
                  {", "}
                  <Box
                    component="a"
                    href="tel: 0760-594300"
                    sx={{ textDecoration: "none", color: "#3B3B3B" }}
                  >
                    0760-594300
                  </Box>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                maxWidth: "283px",
                mb: { xs: "12px", sm: "20px" },
              }}
            >
              <Avatar
                sx={{
                  mr: "10px",
                  color: "white",
                  background: "none",
                  width: "28px",
                  height: "30px",
                }}
                variant="square"
                src={timer}
              />

              <Box mt="10px">
                <Typography
                  variant="h5"
                  sx={{
                    mb: "7px",
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#2B2B2B",
                  }}
                >
                  Öppettider
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#2B2B2B",
                  }}
                >
                  Mån-Fre: 10-18 <br /> Lör: 11-15
                </Typography>
              </Box>
            </Box>

            <Box sx={{ marginLeft: "37px" }}>
              <Box mt="10px">
                <Typography
                  variant="h5"
                  sx={{
                    mb: "12px",
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#2B2B2B",
                  }}
                >
                  Följa oss
                </Typography>

                <Box
                  sx={{
                    mr: { xs: "18px" },
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "157px",
                    width: { xs: "180px", md: "100%" },
                  }}
                >
                  <Box component="a" href="https://www.instagram.com/">
                    <CardMedia
                      component="img"
                      src={instagram}
                      alt="Logo site"
                      sx={{ width: "35px" }}
                    />
                  </Box>

                  <Box component="a" href="https://web.telegram.org/k/">
                    <CardMedia
                      component="img"
                      src={telegram}
                      alt="Logo site"
                      sx={{ width: "30px" }}
                    />
                  </Box>

                  <Box component="a" href="https://www.facebook.com/">
                    <CardMedia
                      component="img"
                      src={facebook}
                      alt="Logo site"
                      sx={{ width: "30px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
