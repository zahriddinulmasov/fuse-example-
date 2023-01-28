import { Box, Typography } from "@mui/material";
import { Guide} from "../../container/guide"
import { QuestionsAnswers } from "../../container/questionsAnswers"
import { HeroAbout } from "./container/heroAbout/heroAbout";

export const About = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            marginTop: { xs: "55px", sm: "64px" },
            padding: {
              xs: "20px 20px",
              sm: "20px 24px",
              md: "40px 24px",
            },
            backgroundColor: "#FFFEF6",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: { xs: "20px", sm: "30px", md: "40px" },
              fontFamily: "Source Serif Pro",
              fontWeight: { xs: "700", sm: "600" },
              fontSize: { xs: "25px", sm: "30px", md: "38px", lg: "45px" },
              lineHeight: { xs: "30px", sm: "30px", md: "38px", lg: "45px" },
            }}
          >
            Hur vi hjälper kommuner att effektivisera sitt arbete och öka
            samsynen i beslutsfattandet
          </Typography>
          <HeroAbout />
        </Box>

        <Guide />

        <Box sx={{ background: "#FFFEF6" }}>
          <QuestionsAnswers />
        </Box>
      </Box>
    </>
  );
};
