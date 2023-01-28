import { Box } from "@mui/material";
import { QuestionsAnswers } from "../../container/questionsAnswers";
import { HeroContact } from "./container/heroContact/heroContact";

export const Contact = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "55px", sm: "64px" },

        }}
      >
        <HeroContact/>
        <QuestionsAnswers/>
      </Box>
    </>
  );
};
