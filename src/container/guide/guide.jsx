import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import iconi from "../../assets/images/iconi.png";
import calendar from "../../assets/images/calendar.png";
import money from "../../assets/images/money.png";
import top from "../../assets/images/top.png";
import bottom from "../../assets/images/bottom.png";
import MDtop from "../../assets/images/MDtop.png";
import MDbottom from "../../assets/images/MDbottom.png";

export const Guide = () => {
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
        <Box
          sx={{
            mb: { xs: "0", sm: "15px", md: "25px" },
            display: "flex",
            justifyContent: "center",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="p"
            sx={{
              m: "0 0 12px",
              maxWidth: { xs: "300px", sm: "400px", md: "500px", lg: "629px" },
              fontFamily: "Source Serif Pro",
              fontWeight: "600",
              fontSize: { xs: "22px", sm: "28px", md: "35px", lg: "45px" },
              lineHeight: { xs: "22px", sm: "30px", md: "36px", lg: "45px" },
              color: "#333333",
            }}
          >
            Intresserad av vår sökmotor? Så här går du tillväga
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "none", sm: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "stretch " },
          }}
        >
          <Card
            sx={{
              m: { xs: "0 4px 6px", md: "0 8px" },
              maxWidth: 318,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "none",
              background: "transparent"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px", mt: "20px" }}
              image={iconi}
              title="green iguana"
            />
            <CardContent sx={{}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontWeight: "600",
                  fontSize: { xs: "15px", sm: "18px" },
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Kolla runt på hemsidan
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{
                  textAlign: "center",
                  fontFamily: "Source Serif Pro",
                  fontWeight: "400",
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  lineHeight: { xs: "15px", md: "20px" },
                  color: "#454545",
                }}
              >
                Kolla runt på hemsidan och läs vår Frågor och svar - sektion för
                att förstå vad det här är för slags tjänst och om den passar
                just dig och din verksamhet.
              </Typography>
            </CardContent>
          </Card>

          <CardMedia
            sx={{
              display: { xs: "none", md: "none", lg: "inline" },
              margin: "20px -80px 0 -80px",
              width: { xs: "0", md: "178px", lg: "248px" },
              height: "28px",
              zIndex: 3,
            }}
            component="img"
            image={top}
            alt="Photo direction"
          />

          <CardMedia
            sx={{
              display: { xs: "none", md: "inline", lg: "none" },
              margin: "20px -80px 0 -80px",
              width: { xs: "0", md: "178px", lg: "248px" },
              height: "28px",
              zIndex: 3,
            }}
            component="img"
            image={MDtop}
            alt="Photo direction"
          />

          <Card
            sx={{
              m: { xs: "0 4px 6px", md: "0 8px" },
              maxWidth: 318,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "none",
              background: "transparent"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px", mt: "20px" }}
              image={calendar}
              title="green iguana"
            />
            <CardContent sx={{}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontWeight: "600",
                  fontSize: { xs: "15px", sm: "18px" },
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Boka in tid
              </Typography>
              <Box
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "400",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "15px", md: "20px" },
                    color: "#454545",
                  }}
                >
                  Använd vår online kalender för att boka in ett demosamtal där
                  vi kan berätta mer om hur tjänsten fungerar –
                  <Box
                    component="a"
                    href="https://app.gohighlevel.com/v2/preview/RhoG32VjjBQZ9MzUbJTF"
                    color="black"
                  >
                    Klicka här för att boka ett demosamtal.
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <CardMedia
            sx={{
              display: { xs: "none", md: "none", lg: "inline" },
              margin: "20px -80px 0 -80px",
              width: { xs: "0", md: "178px", lg: "248px" },
              height: "28px",
              marginTop: "97px",
              zIndex: 3,
            }}
            component="img"
            image={bottom}
            alt="Photo direction"
          />

          <CardMedia
            sx={{
              display: { xs: "none", md: "inline", lg: "none" },
              margin: "20px -80px 0 -80px",
              width: { xs: "0", md: "178px", lg: "248px" },
              height: "28px",
              marginTop: "97px",
              zIndex: 3,
            }}
            component="img"
            image={MDbottom}
            alt="Photo direction"
          />

          <Card
            sx={{
              m: { xs: "0 4px", md: "0 8px" },
              maxWidth: 318,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "none",
              background: "transparent"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px", mt: "20px" }}
              image={money}
              title="green iguana"
            />
            <CardContent sx={{}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontWeight: "600",
                  fontSize: { xs: "15px", sm: "18px" },
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Under demosamtalet
              </Typography>
              <Box
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: "400",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "15px", md: "20px" },
                    color: "#454545",
                  }}
                >
                  Under demosamtalet visar vi tjänsten och dess funktioner. Vi
                  berättar om våra upplägg och lämnar en offert med prisförslag
                  -{" "}
                  <Box
                    component="a"
                    href="https://app.gohighlevel.com/v2/preview/RhoG32VjjBQZ9MzUbJTF"
                    color="black"
                  >
                    Klicka här för att boka ett demosamtal.
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};
