import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import treaty from "../../assets/images/treaty.png";

export const SaveTime = () => {
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
              marginRight: { xs: 0, md: "15px", lg: "40px" },
              width: { xs: "282px", sm: "400px", md: "500px", lg: "608px" },
            }}
            component="img"
            image={treaty}
            alt="
            Treaty cooperation"
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
                fontSize: { xs: "22px", sm: "28px", md: "35px", lg: "45px" },
                lineHeight: { xs: "22px", sm: "27px", md: "36px", lg: "46px" },
                color: "#333333",
              }}
            >
              Digitalt och hållbart
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
              Digitaliseringsarbetet pågår för fullt runtom i Sveriges kommuner
              och myndigheter. Vad passar då bättre än en helt onlinebaserad
              sökmotor som på ett effektivt sätt underlättar flera aspekter i
              det offentliga arbetet? Att samtidigt skapa samsyn och samarbete
              och därmed enklare uppnå gemensamt uppställda mål tillsammans
              tycker vi dessutom känns väldigt hållbart!
            </Typography>
            <Box sx={{ mb: {} }}>
              <Box sx={{ margin: { xs: "0 12px", sm: "6px 12px" } }}>
                <Typography
                  component="h5"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "20px" },
                    color: "#333333",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Tänk på framtiden!
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    mb: { xs: "10px", md: "10px", lg: "30px" },
                    textAlign: { xs: "center", sm: "left" },
                    fontFamily: "Source Serif Pro",
                    fontWeight: "400",
                    fontSize: { xs: "13px", sm: "16px", md: "17px" },
                    lineHeight: { xs: "20px", md: "20px" },
                    display: "flex",
                    alignItems: "center",
                    color: "#454545",
                  }}
                >
                  Digitaliseringsarbetet pågår för fullt runtom i Sveriges
                  kommuner och myndigheter. Vad passar då bättre än en helt
                  onlinebaserad
                </Typography>
              </Box>

              <Box sx={{ margin: { xs: "0 12px", sm: "6px 12px" } }}>
                <Typography
                  component="h5"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "20px" },
                    color: "#333333",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  När du vill och var du vill
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    mb: { xs: "10px", md: "10px", lg: "30px" },
                    textAlign: { xs: "center", sm: "left" },
                    fontFamily: "Source Serif Pro",
                    fontWeight: "400",
                    fontSize: { xs: "13px", sm: "16px", md: "17px" },
                    lineHeight: { xs: "20px", md: "20px" },
                    display: "flex",
                    alignItems: "center",
                    color: "#454545",
                  }}
                >
                  Digitaliseringsarbetet pågår för fullt runtom i Sveriges
                  kommuner och myndigheter. Vad passar då bättre än.
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
                  fontSize: { xs: "15px", sm: "20px" },
                  padding: { xs: "5px 15px", sm: "6px 20px" },
                  color: "#333333",
                  background: "#FFDA3A",
                  fontFamily: "Source Serif Pro",

                  "&:hover": {
                    backgroundColor: "rgba(245, 213, 39, 0.5)",
                  },
                }}
              >
                Spara massa tid
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};
