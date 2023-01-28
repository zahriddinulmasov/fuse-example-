import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

export const HeroSearch = () => {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px 20px",
            sm: "35px 34px",
            md: "50px 59px",
          },
          background: "#FFFEF6",
        }}
      >
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel
            htmlFor="input-with-icon-adornment"
            sx={{ fontSize: "20px" }}
          >
            Search
          </InputLabel>
          <Input
            sx={{ p: "10px 0" }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <CloseIcon />

                <Button
                  variant="contained"
                  sx={{
                    m: { xs: "0 0 7px 8px", md: "0 24px 7px 16px" },
                    boxShadow: "none",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "16px" },
                    padding: { xs: "5px 10px", sm: "5px 25px" },
                    color: "#333333",
                    background: "#FFDA3A",
                    fontFamily: "Source Serif Pro",

                    "&:hover": {
                      backgroundColor: "rgba(245, 213, 39, 0.5)",
                    },
                  }}
                >
                  SÖK
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>

        <Box sx={{ display: { xs: "inline", md: "flex" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <FormControl sx={{ width: "100%", mt: 3, pr: "17px" }}>
                <Select defaultValue="Välja län ONE" sx={{ padding: "0px" }}>
                  <MenuItem value="Välja län ONE">Välja län ONE</MenuItem>
                  <MenuItem value="Välja län TWO">Välja län TWO</MenuItem>
                  <MenuItem value="Välja län THREE">Välja län THREE</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ width: "100%", mt: 3, pr: "17px" }}>
                <Select defaultValue="Välja kommun ONE" sx={{ padding: "0px" }}>
                  <MenuItem value="Välja kommun ONE">Välja kommun ONE</MenuItem>
                  <MenuItem value="Välja kommun TWO">Välja kommun TWO</MenuItem>
                  <MenuItem value="Välja kommun THREE">
                    Välja kommun THREE
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", width: "100%" }}>
              <FormControl sx={{ width: "100%", mt: 3, pr: "17px" }}>
                <Select
                  defaultValue="Beslutande organ ONE"
                  sx={{ padding: "0px" }}
                >
                  <MenuItem value="Beslutande organ ONE">
                    Beslutande organ ONE
                  </MenuItem>
                  <MenuItem value="Beslutande organ TWO">
                    Beslutande organ TWO
                  </MenuItem>
                  <MenuItem value="Beslutande organ THREE">
                    Beslutande organ THREE
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ width: "100%", mt: 3, pr: "17px" }}>
                <Select defaultValue="2019-2012 ONE" sx={{ padding: "0px" }}>
                  <MenuItem value="2019-2012 ONE">2019-2012 ONE</MenuItem>
                  <MenuItem value="2019-2012 TWO">2019-2012 TWO</MenuItem>
                  <MenuItem value="2019-2012 THREE">2019-2012 THREE</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Button
            sx={{
              p: "0",
              mt: "24px",
              ml: { xs: "10px", lg: "25px" },
              width: "111px",
              fontFamily: "Source Serif Pro",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#555555",
              flexShrink: 0,
            }}
          >
            Ta bort allt
          </Button>
        </Box>
      </Box>
    </>
  );
};
