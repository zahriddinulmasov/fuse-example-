import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import facilitate from "../../assets/images/facilitate.png";

export const Facilitate = () => {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "20px 20px", sm: "20px 24px", md: "40px 24px" },
        }}
      >
        <CardContent
          sx={{
            p: "0",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box sx={{ maxWidth: "100%" }}>
            <Typography
              variant="h4"
              component="p"
              sx={{
                m: { xs: "20px 0 6px 0", sm: "20px 0 12px" },
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Source Serif Pro",
                fontWeight: "600",
                fontSize: { xs: "22px", sm: "23px", md: "35px", lg: "45px" },
                lineHeight: { xs: "22px", sm: "27px", md: "36px", lg: "46px" },
                color: "#333333",
              }}
            >
              Underlätta din omvärldsbevakning
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: { xs: "10px", md: "10px", lg: "30px" },
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Source Serif Pro",
                fontWeight: "400",
                fontSize: { xs: "14px", sm: "16px", md: "17px" },
                lineHeight: { xs: "20px", md: "20px" },
                display: "flex",
                alignItems: "center",
                letterSpacing: "-0.002em",
                color: "#454545",
              }}
            >
              Istället för att du ska behöva ringa runt till kommuner på måfå
              eller sålla bland tusentals träffar på Google, så har vi skapat en
              sökbar databas som endast är uppbyggd av de dokument du faktiskt
              kan vara intresserad utav i sammanhanget. Allt för att underlätta
              din omvärldsbevakning och spara på din tid. När du väl får en
              träff som är intressant för just dig så har du nu tillgång till
              ett diarienummer och vet exakt vem du ska vända dig till för att
              veta mer. Tänk på timmarna som sparas!
            </Typography>
            <Box
              sx={{
                mt: { xs: "20", sm: "30px", md: "40px", lg: "50px" },
                mb: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ m: "0 6px" }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "24px",
                      lg: "30px",
                      xl: "35px",
                    },
                    lineHeight: "24px",
                    color: "#000000",
                  }}
                >
                  +50.000
                </Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: {
                      xs: "10px",
                      sm: "15px",
                      md: "13px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "19px",
                    },
                    color: "#333333",
                  }}
                >
                  Protokoll i samma plats
                </Typography>
              </Box>
              <Box sx={{ m: "0 6px" }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "24px",
                      lg: "30px",
                      xl: "35px",
                    },
                    lineHeight: "24px",
                    color: "#000000",
                  }}
                >
                  +30.000
                </Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: {
                      xs: "10px",
                      sm: "15px",
                      md: "13px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "19px",
                    },
                    color: "#333333",
                  }}
                >
                  Ned laddade protokoll
                </Typography>
              </Box>
              <Box sx={{ m: "0 6px" }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "24px",
                      lg: "30px",
                      xl: "35px",
                    },
                    lineHeight: "24px",
                    color: "#000000",
                  }}
                >
                  +10.000
                </Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: {
                      xs: "10px",
                      sm: "15px",
                      md: "13px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "19px",
                    },
                    color: "#333333",
                  }}
                >
                  Sparade timmar
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "inline" } }}>
              <Button
                variant="contained"
                sx={{
                  margin: "8px auto",
                  boxShadow: "none",
                  marginLeft: "auto",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { xs: "16px", sm: "20px" },
                  padding: { xs: "5px 15px", sm: "6px 20px" },
                  color: "#333333",
                  background: "#FFDA3A",
                  fontFamily: "Source Serif Pro",

                  "&:hover": {
                    backgroundColor: "rgba(245, 213, 39, 0.5)",
                  },
                }}
              >
                obegränsad
              </Button>
            </Box>
          </Box>

          <CardMedia
            sx={{
              marginLeft: { xs: "20px", lg: "30px" },
              width: { xs: "282px", sm: "400px", md: "500px", lg: "608px" },
            }}
            component="img"
            image={facilitate}
            alt="Photo facilitate"
          />
        </CardContent>
      </Box>
    </>
  );
};
