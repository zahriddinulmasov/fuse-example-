import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import CheckIcon from "@mui/icons-material/Check";

import cooperation from "../../../../assets/images/cooperation.png";

export const Cooperation = () => {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "20px 20px", sm: "20px 24px", md: "40px 24px" },
        }}
      >
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
              marginRight: { xs: 0, md: "20px", lg: "40px" },
              width: { xs: "282px", sm: "400px", md: "500px", lg: "608px" },
            }}
            component="img"
            image={cooperation}
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
                fontSize: { xs: "22px", sm: "23px", md: "35px", lg: "45px" },
                lineHeight: { xs: "22px", sm: "27px", md: "36px", lg: "46px" },
                color: "#333333",
              }}
            >
              Skapa samsyn och samarbete
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: { xs: "10px", md: "10px", lg: "30px" },
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Source Serif Pro",
                fontWeight: "400",
                fontSize: { xs: "14px", sm: "16px", md: "17px" },
                lineHeight: { xs: "20px", md: "20px" },
                display: "flex",
                alignItems: "center",
                color: "#454545",
              }}
            >
              Vi förenklar för kommuner och offentlig sektor att skapa samsyn
              mellan varandra genom att på ett väldigt enkelt och smidigt vis
              tillhandahålla dokument i en enda sökbar databas. Gör en sökning
              och se hur andra liknande kommuner gjort i en liknande fråga som
              din. Genom att tillhandahålla den här informationen på ett enkelt
              sätt är vår förhoppning att allt fler kommuner ska slippa uppfinna
              hjulet gång på gång och istället ta rygg på varandra och öka det
              kommunala samarbetet mellan kommuner. Tänk på möjligheterna som
              skapas!
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
                  Enkelt och smidigt
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
                  Offentlig sektor att skapa samsyn
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
                  Slippa uppfinna hjulet gång på gång
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
                Professionell
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};
