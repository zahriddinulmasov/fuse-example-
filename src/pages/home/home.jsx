import { Box } from "@mui/system";
import { Attempt } from "./container/attempt/attempt";
import { Cooperation } from "./container/cooperation";
import { Facilitate } from "../../container/facilitate";

import { Funkar } from "./container/funkar";
import { Guide } from "../../container/guide";
import { HeroHome } from "./container/hero";
import { QuestionsAnswers } from "../../container/questionsAnswers";
import { SaveTime } from "../../container/save-time";

export const Home = () => {
  return (
    <Box>
      <HeroHome />
      <Funkar />
      <Cooperation />
      <Box sx={{ background: "#FFFEF6" }}>
        <Facilitate />
      </Box>
      <SaveTime />
      <Box sx={{ background: "#FFFEF6" }}>
        <Guide />
      </Box>
      <Attempt />
      <Box sx={{ background: "#FFFEF6" }}>
        <QuestionsAnswers />
      </Box>
    </Box>
  );
};
