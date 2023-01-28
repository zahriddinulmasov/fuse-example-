import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";

import sintuna from "../../../../assets/images/sigtuna.png";
import umea from "../../../../assets/images/umae.png";
import ange from "../../../../assets/images/ange.png";
import amals from "../../../../assets/images/amals.png";
import uppsala from "../../../../assets/images/uppsala.png";

export const Funkar = () => {
  return (
    <Box sx={{ padding: { xs: "20px 20px", sm: "20px 24px", md: "40px 24px" }}}>
      <Typography
        sx={{
          margin: { xs: "0  0 8px", sm: "0 0 18px", md: "0 0 30px" },
          fontFamily: "Source Serif Pro",
          fontWeight: "600",
          fontSize: { xs: "30px", sm: "38px", md: "48px" },
          lineHeight: "45px",
          textAlign: "center",
          color: "#333333",
        }}
      >
        Se hur det funkar
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "space-around",
            sm: "space-between",
            md: "space-around",
            flexWrap: "wrap",
          },
          textAlign: "center",
        }}
      >
        <Box component="a" href="https://www.sigtuna.se/">
          <CardMedia
            component="img"
            src={sintuna}
            alt="Logo site"
            sx={{
              margin: { xs: "6px", sm: "8px" },
              width: { xs: "127px", sm: "138px" },
            }}
          />
        </Box>
        <Box component="a" href="https://www.umea.se/">
          <CardMedia
            component="img"
            src={umea}
            alt="Logo site"
            sx={{
              margin: { xs: "6px", sm: "8px" },
              width: { xs: "100px", sm: "108px" },
            }}
          />
        </Box>
        <Box component="a" href="https://www.ange.se/">
          <CardMedia
            component="img"
            src={ange}
            alt="Logo site"
            sx={{
              margin: { xs: "6px", sm: "8px" },
              width: { xs: "102px", sm: "111px" },
            }}
          />
        </Box>
        <Box component="a" href="https://www.amal.se/">
          <CardMedia
            component="img"
            src={amals}
            alt="Logo site"
            sx={{
              margin: { xs: "6px", sm: "8px" },
              width: { xs: "94px", sm: "100px" },
            }}
          />
        </Box>
        <Box component="a" href="https://www.uppsala.se/">
          <CardMedia
            component="img"
            src={uppsala}
            alt="Logo site"
            sx={{
              margin: { xs: "6px", sm: "8px" },
              width: { xs: "109px", sm: "121px" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
