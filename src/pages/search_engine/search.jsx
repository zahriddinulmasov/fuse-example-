import { Box } from "@mui/material";
import { Facilitate } from "../../container/facilitate";
import { QuestionsAnswers } from "../../container/questionsAnswers";
import { SaveTime } from "../../container/save-time";
import { HeroSearch } from "./container/heroSearch/heroSearch";
import { ResultsSearch } from "./container/resultsSearch/resultsSearch";

export const Search = () => {
  return (
    <Box
      sx={{
        marginTop: {
          xs: "55px",
          sm: "64px",
        },
      }}
    >
      <HeroSearch />
      <ResultsSearch />
      <Facilitate />
      <Box sx={{ backgroundColor: "#FFFEF6" }}>
        <SaveTime />
      </Box>
      <QuestionsAnswers/>
    </Box>
  );
};
