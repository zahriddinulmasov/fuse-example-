import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Box from "@mui/material/Box";

export const Attempt = () => {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px 20px",
            sm: "20px 24px",
            md: "40px 24px",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            margin: { xs: "0 auto 15px", sm: " 0 auto 30px" },
            maxWidth: { xs: "500px", sm: "650px", md: "800px", lg: "983px" },
            fontFamily: "Source Serif Pro",
            fontWeight: "600",
            fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
            lineHeight: { xs: "35px", md: "40px", lg: "45px" },
            textAlign: "center",
            color: "#333333",
          }}
        >
          Allt fler kommuner och myndigheter använder och uppskattar vår
          sökmotor. Se själv.
        </Typography>

        <Card
          sx={{
            p: "5px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            boxShadow: "none",
          }}
        >
          <CardActionArea
            sx={{
              maxWidth: 300,
            }}
          >
            <CardContent
              sx={{
                padding: {
                  xs: "25px 15px",
                  sm: "25px 15px",
                  md: "35px 20px",
                  margin: "5px",
                  "&:hover": {
                    background: "#FFFEF6",
                    boxShadow: "3px 4px 4px 2px rgba(0, 0, 0, 0.15)",
                    borderRadius: "5px",
                  },
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: { xs: "13px", sm: "18px", md: "23px" },
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "14px", sm: "15px" },
                  lineHeight: { xs: "16px", sm: "17px", md: "18px" },
                  textAlign: "center",
                  color: "#3B3B3B",
                }}
              >
                Construction and Building Materials provides an international
                forum for the. Construction and Building Materials provides an
                international forum for the
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  mb: "0",
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "17px", sm: "19px", md: "20px" },
                  lineHeight: { xs: "19px", sm: "22px", md: "24px" },
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#3B3B3B",
                  textTransform: "uppercase",
                }}
              >
                Kils kommun
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActionArea sx={{ maxWidth: 300 }}>
            <CardContent
              sx={{
                padding: { xs: "25px 15px", sm: "25px 15px", md: "35px 20px" },
                margin: "5px",
                "&:hover": {
                  background: "#FFFEF6",
                  boxShadow: "3px 4px 4px 2px rgba(0, 0, 0, 0.15)",
                  borderRadius: "5px",
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: { xs: "13px", sm: "18px", md: "23px" },
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "14px", sm: "15px" },
                  lineHeight: { xs: "16px", sm: "17px", md: "18px" },
                  textAlign: "center",
                  color: "#3B3B3B",
                }}
              >
                Construction and Building Materials provides an international
                forum for the. Construction and Building Materials provides an
                international forum for the
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  mb: "0",
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "17px", sm: "19px", md: "20px" },
                  lineHeight: { xs: "19px", sm: "22px", md: "24px" },
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#3B3B3B",
                  textTransform: "uppercase",
                }}
              >
                Arvika kommun
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActionArea sx={{ maxWidth: 300 }}>
            <CardContent
              sx={{
                padding: { xs: "25px 15px", sm: "25px 15px", md: "35px 20px" },
                margin: "5px",
                "&:hover": {
                  background: "#FFFEF6",
                  boxShadow: "3px 4px 4px 2px rgba(0, 0, 0, 0.15)",
                  borderRadius: "5px",
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: { xs: "13px", sm: "18px", md: "23px" },
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "14px", sm: "15px" },
                  lineHeight: { xs: "16px", sm: "17px", md: "18px" },
                  textAlign: "center",
                  color: "#3B3B3B",
                }}
              >
                Construction and Building Materials provides an international
                forum for the. Construction and Building Materials provides an
                international forum for the
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  mb: "0",
                  fontFamily: "Source Serif Pro",
                  fontSize: { xs: "17px", sm: "19px", md: "20px" },
                  lineHeight: { xs: "19px", sm: "22px", md: "24px" },
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#3B3B3B",
                  textTransform: "uppercase",
                }}
              >
                Karlstads kommun
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};
