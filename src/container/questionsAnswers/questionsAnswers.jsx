import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const QuestionsAnswers = () => {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px 20px",
            sm: "20px 24px",
            md: "30px 24px",
          },
        }}
      >
        <Box component="div" maxWidth="844px" margin="0 auto">
          <Typography
            variant="h2"
            sx={{
              m: { xs: "0 auto 18px", sm: "0 auto 25px", md: "0 auto 34px" },
              maxWidth: { xs: "500px", sm: "650px", md: "800px", lg: "983px" },
              fontFamily: "Source Serif Pro",
              fontWeight: "600",
              fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
              lineHeight: { xs: "35px", md: "40px", lg: "45px" },
              textAlign: "center",
              color: "#333333",
            }}
          >
            Frågor och svar
          </Typography>
          <Card
            sx={{
              mb: {
                xs: "12px",
                sm: "15px",
                md: "17px",
                boxShadow: "none",
                border: "1px solid #D0D3DB",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box component="div">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    alignItems: "center",
                    color: "#2b2b2b",
                  }}
                >
                  Vilket är det bästa materialet för miljön?
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontSize: "14px",
                    lineHeight: "17px",
                    alignItems: "center",
                    color: "#6F737C",
                  }}
                >
                  Återvunna textilier är generellt sett ett bättre miljömässigt
                  val då det tar vara på befintliga resurser och minskar mängden
                  avfall. Vi på H&M jobbar med flera typer av återvunna
                  material, såsom återvunnen bomull, polyester, nylon, ull,
                  plast och silver.
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Box
            sx={{
              width: "100%",
              mb: { xs: "12px", sm: "15px", md: "17px" },
              background: "#fff",
            }}
          >
            <TextField
              fullWidth
              label="Hur bygger man ett miljövänligt hus?"
              id="fullWidth"
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              mb: { xs: "12px", sm: "15px", md: "17px" },
              background: "#fff",
            }}
          >
            <TextField
              fullWidth
              label="Vad är kvalitet i byggnationen?"
              id="fullWidth"
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              mb: { xs: "12px", sm: "15px", md: "17px" },
              background: "#fff",
            }}
          >
            <TextField
              fullWidth
              label="7 tips för snabbare, säkrare och billigare byggprojekt"
              id="fullWidth"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
