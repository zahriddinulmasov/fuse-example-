import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import CheckIcon from "@mui/icons-material/Check";

import operatorAbout from "../../../../assets/images/operatorAbout.png";

export const HeroAbout = () => {
  return (
    <>
      <Box>
        <CardContent
          sx={{
            p: "0px",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CardMedia
            sx={{
              marginRight: { xs: "20px", lg: "40px" },
              width: { xs: "300px", sm: "420px", md: "522px", lg: "700px" },
            }}
            component="img"
            image={operatorAbout}
            alt="Photo cooperation"
          />
          <Box sx={{ maxWidth: "100%" }}>
            <Typography
              variant="h4"
              component="p"
              sx={{
                m: { xs: "20px 0 6px 0", sm: "20px 0 12px" },
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Source Serif Pro",
                fontWeight: "600",
                fontSize: { xs: "22px", sm: "25px" },
                lineHeight: { xs: "22px", sm: "24px" },
                color: "#333333",
              }}
            >
              På ett gratis demosamtal får du reda på:
            </Typography>

            <Box sx={{ mb: {} }}>
              <Box
                display="flex"
                sx={{ margin: { xs: "0 12px", sm: "6px 12px" } }}
              >
                <CheckIcon sx={{ width: { xs: "20px", sm: "24px" } }} />
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "18px" },
                    color: "#333333",
                  }}
                >
                  Hur sökmotorn fungerar
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{ margin: { xs: "0 12px", sm: "6px 12px" } }}
              >
                <CheckIcon sx={{ width: { xs: "20px", sm: "24px" } }} />
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "18px" },
                    color: "#333333",
                  }}
                >
                  Hur våra avtalsupplägg ser ut
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{ margin: { xs: "0 12px", sm: "6px 12px" } }}
              >
                <CheckIcon sx={{ width: { xs: "20px", sm: "24px" } }} />
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "18px" },
                    color: "#333333",
                  }}
                >
                  Vad priset för att ha tillgång till sökmotorn är
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{ margin: { xs: "0 12px", sm: "6px 12px" } }}
              >
                <CheckIcon sx={{ width: { xs: "20px", sm: "24px" } }} />
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "18px" },
                    color: "#333333",
                  }}
                >
                  Vad som behövs för att komma igång
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: "flex", sm: "inline" } }}>
              <Button
                variant="contained"
                sx={{
                  margin: { xs: "12px 0 0", sm: "16px 0 0" },
                  boxShadow: "none",
                  marginLeft: "auto",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  padding: { xs: "5px 15px", sm: "6px 20px" },
                  color: "#333333",
                  background: "#FFDA3A",
                  fontFamily: "Source Serif Pro",

                  "&:hover": {
                    backgroundColor: "rgba(245, 213, 39, 0.5)",
                  },
                }}
              >
                Boka ditt demo samtal här!
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};
