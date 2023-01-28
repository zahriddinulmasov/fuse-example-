import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import operator from "../../../../assets/images/operator.png";

export const HeroHome = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "48px", ms: "64px" },
          padding: { xs: "20px 20px", sm: "20px 24px", md: "40px 24px" },
          background: "#FFFEF6",
        }}
      >
        <CardContent
          sx={{
            p: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Box sx={{ maxWidth: "650px", marginRight: "20px" }}>
            <Typography
              variant="h4"
              component="p"
              sx={{
                m: { xs: "20px 0 6px 0", sm: "0 0 12px" },
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Source Serif Pro",
                fontWeight: "600",
                fontSize: { xs: "24px", sm: "26px", md: "42px", lg: "48px" },
                lineHeight: { xs: "25px", sm: "30px", md: "50px", lg: "60px" },
                color: "#333333",
              }}
            >
              Över 50.000 protokoll från Sveriges kommuner samlade i en enda
              sökbar databas!
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: {xs: "15px", sm: "30px"},
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Source Serif Pro",
                fontWeight: "400",
                fontSize: {xs: "16px", sm: "18px", md: "22px"},
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "-0.002em",
                color: "#454545",
              }}
            >
              Ta reda på hur andra kommuner gjort i liknande frågor som de du
              själv sitter med!
            </Typography>
            <Box sx={{ display: {xs: "flex", sm: "inline"} }}>
              <Button
                variant="contained"
                sx={{
                  margin: "0 auto",
                  boxShadow: "none",
                  marginLeft: "auto",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { xs: "14px", sm: "22px" },
                  padding: { xs: "5px 18px", sm: "6px 30px" },
                  color: "#333333",
                  background: "#FFDA3A",
                  fontFamily: "Source Serif Pro",

                  "&:hover": {
                    backgroundColor: "rgba(245, 213, 39, 0.5)",
                  },
                }}
              >
                Boka Demo
              </Button>
            </Box>
          </Box>

          <CardMedia
            sx={{
              marginRight: { xs: "0", sm: "0", md: "60px" },
              width: { xs: "180px", sm: "270px", md: "438px" },
            }}
            component="img"
            image={operator}
            alt="Photo opeartor"
          />
        </CardContent>
      </Box>
    </>
  );
};
