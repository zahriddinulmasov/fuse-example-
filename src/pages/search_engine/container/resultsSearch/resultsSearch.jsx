import {
  Avatar,
  Button,
  FormControl,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PinDropIcon from "@mui/icons-material/PinDrop";
import BalanceIcon from "@mui/icons-material/Balance";
import SdCardIcon from "@mui/icons-material/SdCard";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

import company from "../../../../assets/images/company.png";


export const ResultsSearch = () => {
  return (
    <Box
      sx={{
        p: { xs: "0", sm: "0 10px", md: "0 35px" },
        padding: {
          xs: "20px 20px",
          sm: "20px 34px",
          md: "40px 59px",
        },
        background: "#FFFEF6",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            width: { xs: "100%", md: "78%" },
          }}
        >
          <Box
            sx={{
              mb: { xs: "15px", md: "20px", lg: "30px" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: "Source Serif Pro",
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "17px", md: "18px" },
                lineHeight: "30px",
              }}
            >
              <Box component="strong">Antal träffar: </Box>
              <Box component="span">983</Box>
            </Typography>

            <FormControl sx={{ width: "190px" }}>
              <Select
                defaultValue="Den senaste ONE"
                startAdornment={
                  <InputAdornment position="start">
                    <FilterAltIcon />
                  </InputAdornment>
                }
              >
                <MenuItem value="Den senaste ONE">Den senaste ONE</MenuItem>
                <MenuItem value="Den senaste TWO">Den senaste TWO</MenuItem>
                <MenuItem value="Den senaste THREE">Den senaste THREE</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              background: "#FFFFFF",
              padding: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
              mb: { xs: "15px", md: "20px", lg: "30px" },
              borderRadius: { xs: "5px", md: "10px", lg: "15px" },
            }}
          >
            <Avatar
              sx={{
                mr: { xs: "8px", sm: "10px" },
                color: "white",
                background: "none",
                width: { xs: "20px", sm: "25px", md: "30px" },
              }}
              variant="square"
              src={company}
            />

            <Box sx={{ color: "#858585" }}>
              {/* Title */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: "0", sm: "2px", md: "5px" },
                    fontFamily: "Source Serif Pro",
                    fontWeight: 600,
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      lg: "25px",
                    },
                    lineHeight: { xs: "20px", sm: "22px", md: "24px" },
                    color: "#333333",
                  }}
                >
                  Krav på enskilda avlopp
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <Box
                    variant="p"
                    sx={{
                      marginRight: "6px",
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Spara
                  </Box>
                  <BookmarkBorderIcon
                    sx={{ width: "16px", marginRight: "4px" }}
                  />
                </Box>
              </Box>

              {/* Top */}

              <Box
                sx={{
                  mb: {
                    xs: "4px",
                    sm: "7px",
                    md: "10px",
                    lg: "12px",
                  },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <ScheduleIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    2022-02-21
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <LocationCityIcon
                    sx={{ width: "16px", marginRight: "4px" }}
                  />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Västra götaland
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <PinDropIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    2022-02-21
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <BalanceIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Västra götaland
                  </Box>
                </Box>
              </Box>

              {/* Middle */}

              <Typography
                mb="10px"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontSize: "12px",
                  lineHeight: { xs: "14px", sm: "16px", md: "18px" },
                  color: "#555555",
                }}
              >
                Det är du som rår över din avloppsrening som ansvarar för att
                utsläppet inte orsakar olägenhet för varken människors hälsa
                eller miljön. Myndighetens krav ska anpassas utifrån de risker
                ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var
                för sig.
              </Typography>

              {/* Bottom */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", mb: { xs: "6px", sm: "0" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: { xs: "16px", sm: "24px", md: "30px" },
                    }}
                  >
                    <SdCardIcon sx={{ width: "15px", marginRight: "4px" }} />
                    <Box
                      variant="p"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "19px",
                        },
                        fontFamily: "Source Serif Pro",
                      }}
                    >
                      12 Mb
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "12px",
                    }}
                  >
                    <TextSnippetIcon
                      sx={{ width: "15px", marginRight: "4px" }}
                    />
                    <Box
                      variant="p"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "19px",
                        },
                        fontFamily: "Source Serif Pro",
                      }}
                    >
                      14 Sidor
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      mr: { xs: "10px" },
                      boxShadow: "none",
                      border: "1px solid black",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "11px", sm: "15px", md: "20px" },
                      lineHeight: { xs: "16px", sm: "24px" },
                      color: "#333333",
                      background: "transparent",
                      fontFamily: "Source Serif Pro",

                      "&:hover": {
                        backgroundColor: "rgba(93, 93, 93, 0.5)",
                      },
                    }}
                  >
                    Logga in
                    <MenuBookIcon
                      sx={{
                        ml: { xs: "4px", sm: "8px" },
                        width: { xs: "16px", sm: "20px" },
                      }}
                    />
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "11px", sm: "15px", md: "20px" },
                      lineHeight: { xs: "16px", sm: "24px" },
                      color: "#333333",
                      background: "#FFDA3A",
                      fontFamily: "Source Serif Pro",

                      "&:hover": {
                        backgroundColor: "rgba(245, 213, 39, 0.5)",
                      },
                    }}
                  >
                    Ladda Ner
                    <FileDownloadIcon
                      sx={{ ml: "4px", width: { xs: "18px", sm: "24px" } }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              background: "#FFFFFF",
              padding: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
              mb: { xs: "15px", md: "20px", lg: "30px" },
              borderRadius: { xs: "5px", md: "10px", lg: "15px" },
            }}
          >
            <Avatar
              sx={{
                mr: { xs: "8px", sm: "10px" },
                color: "white",
                background: "none",
                width: { xs: "20px", sm: "25px", md: "30px" },
              }}
              variant="square"
              src={company}
            />

            <Box sx={{ color: "#858585" }}>
              {/* Title */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: "0", sm: "2px", md: "5px" },
                    fontFamily: "Source Serif Pro",
                    fontWeight: 600,
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      lg: "25px",
                    },
                    lineHeight: { xs: "20px", sm: "22px", md: "24px" },
                    color: "#333333",
                  }}
                >
                  Krav på enskilda avlopp
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <Box
                    variant="p"
                    sx={{
                      marginRight: "6px",
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Spara
                  </Box>
                  <BookmarkBorderIcon
                    sx={{ width: "16px", marginRight: "4px" }}
                  />
                </Box>
              </Box>

              {/* Top */}

              <Box
                sx={{
                  mb: {
                    xs: "4px",
                    sm: "7px",
                    md: "10px",
                    lg: "12px",
                  },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <ScheduleIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    2022-02-21
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <LocationCityIcon
                    sx={{ width: "16px", marginRight: "4px" }}
                  />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Västra götaland
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <PinDropIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    2022-02-21
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <BalanceIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Västra götaland
                  </Box>
                </Box>
              </Box>

              {/* Middle */}

              <Typography
                mb="10px"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontSize: "12px",
                  lineHeight: { xs: "14px", sm: "16px", md: "18px" },
                  color: "#555555",
                }}
              >
                Det är du som rår över din avloppsrening som ansvarar för att
                utsläppet inte orsakar olägenhet för varken människors hälsa
                eller miljön. Myndighetens krav ska anpassas utifrån de risker
                ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var
                för sig.
              </Typography>

              {/* Bottom */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", mb: { xs: "6px", sm: "0" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: { xs: "16px", sm: "24px", md: "30px" },
                    }}
                  >
                    <SdCardIcon sx={{ width: "15px", marginRight: "4px" }} />
                    <Box
                      variant="p"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "19px",
                        },
                        fontFamily: "Source Serif Pro",
                      }}
                    >
                      12 Mb
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "12px",
                    }}
                  >
                    <TextSnippetIcon
                      sx={{ width: "15px", marginRight: "4px" }}
                    />
                    <Box
                      variant="p"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "19px",
                        },
                        fontFamily: "Source Serif Pro",
                      }}
                    >
                      14 Sidor
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      mr: { xs: "10px" },
                      boxShadow: "none",
                      border: "1px solid black",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "11px", sm: "15px", md: "20px" },
                      lineHeight: { xs: "16px", sm: "24px" },
                      color: "#333333",
                      background: "transparent",
                      fontFamily: "Source Serif Pro",

                      "&:hover": {
                        backgroundColor: "rgba(93, 93, 93, 0.5)",
                      },
                    }}
                  >
                    Logga in
                    <MenuBookIcon
                      sx={{
                        ml: { xs: "4px", sm: "8px" },
                        width: { xs: "16px", sm: "20px" },
                      }}
                    />
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "11px", sm: "15px", md: "20px" },
                      lineHeight: { xs: "16px", sm: "24px" },
                      color: "#333333",
                      background: "#FFDA3A",
                      fontFamily: "Source Serif Pro",

                      "&:hover": {
                        backgroundColor: "rgba(245, 213, 39, 0.5)",
                      },
                    }}
                  >
                    Ladda Ner
                    <FileDownloadIcon
                      sx={{ ml: "4px", width: { xs: "18px", sm: "24px" } }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              background: "#FFFFFF",
              padding: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
              mb: { xs: "15px", md: "20px", lg: "30px" },
              borderRadius: { xs: "5px", md: "10px", lg: "15px" },
            }}
          >
            <Avatar
              sx={{
                mr: { xs: "8px", sm: "10px" },
                color: "white",
                background: "none",
                width: { xs: "20px", sm: "25px", md: "30px" },
              }}
              variant="square"
              src={company}
            />

            <Box sx={{ color: "#858585" }}>
              {/* Title */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: "0", sm: "2px", md: "5px" },
                    fontFamily: "Source Serif Pro",
                    fontWeight: 600,
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      lg: "25px",
                    },
                    lineHeight: { xs: "20px", sm: "22px", md: "24px" },
                    color: "#333333",
                  }}
                >
                  Krav på enskilda avlopp
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <Box
                    variant="p"
                    sx={{
                      marginRight: "6px",
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Spara
                  </Box>
                  <BookmarkBorderIcon
                    sx={{ width: "16px", marginRight: "4px" }}
                  />
                </Box>
              </Box>

              {/* Top */}

              <Box
                sx={{
                  mb: {
                    xs: "4px",
                    sm: "7px",
                    md: "10px",
                    lg: "12px",
                  },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <ScheduleIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    2022-02-21
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <LocationCityIcon
                    sx={{ width: "16px", marginRight: "4px" }}
                  />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Västra götaland
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <PinDropIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    2022-02-21
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontFamily: "Source Serif Pro",
                  }}
                >
                  <BalanceIcon sx={{ width: "16px", marginRight: "4px" }} />
                  <Box
                    variant="p"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      },
                      lineHeight: {
                        xs: "15px",
                        sm: "16px",
                        md: "17px",
                        lg: "18px",
                      },
                    }}
                  >
                    Västra götaland
                  </Box>
                </Box>
              </Box>

              {/* Middle */}

              <Typography
                mb="10px"
                sx={{
                  fontFamily: "Source Serif Pro",
                  fontSize: "12px",
                  lineHeight: { xs: "14px", sm: "16px", md: "18px" },
                  color: "#555555",
                }}
              >
                Det är du som rår över din avloppsrening som ansvarar för att
                utsläppet inte orsakar olägenhet för varken människors hälsa
                eller miljön. Myndighetens krav ska anpassas utifrån de risker
                ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var
                för sig.
              </Typography>

              {/* Bottom */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", mb: { xs: "6px", sm: "0" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: { xs: "16px", sm: "24px", md: "30px" },
                    }}
                  >
                    <SdCardIcon sx={{ width: "15px", marginRight: "4px" }} />
                    <Box
                      variant="p"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "19px",
                        },
                        fontFamily: "Source Serif Pro",
                      }}
                    >
                      12 Mb
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "12px",
                    }}
                  >
                    <TextSnippetIcon
                      sx={{ width: "15px", marginRight: "4px" }}
                    />
                    <Box
                      variant="p"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "19px",
                        },
                        fontFamily: "Source Serif Pro",
                      }}
                    >
                      14 Sidor
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      mr: { xs: "10px" },
                      boxShadow: "none",
                      border: "1px solid black",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "11px", sm: "15px", md: "20px" },
                      lineHeight: { xs: "16px", sm: "24px" },
                      color: "#333333",
                      background: "transparent",
                      fontFamily: "Source Serif Pro",

                      "&:hover": {
                        backgroundColor: "rgba(93, 93, 93, 0.5)",
                      },
                    }}
                  >
                    Logga in
                    <MenuBookIcon
                      sx={{
                        ml: { xs: "4px", sm: "8px" },
                        width: { xs: "16px", sm: "20px" },
                      }}
                    />
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "11px", sm: "15px", md: "20px" },
                      lineHeight: { xs: "16px", sm: "24px" },
                      color: "#333333",
                      background: "#FFDA3A",
                      fontFamily: "Source Serif Pro",

                      "&:hover": {
                        backgroundColor: "rgba(245, 213, 39, 0.5)",
                      },
                    }}
                  >
                    Ladda Ner
                    <FileDownloadIcon
                      sx={{ ml: "4px", width: { xs: "18px", sm: "24px" } }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "22%" },
            ml: { xs: "0", md: "14px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
            }}
          >
            <Box
              sx={{
                mb: { xs: "15px", md: "20px", lg: "30px" },
                mr: { xs: "0", sm: "15px", md: "0" },
                width: "100%",
              }}
            >
              <Typography
                component="p"
                sx={{
                  p: "10px 20px ",
                  fontFamily: "Source Serif Pro",
                  fontWeight: 600,
                  fontSize: { xs: "16px", sm: "17px", md: "18px" },
                  lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#F9FBFC",
                  borderTopLeftRadius: { xs: "5px", md: "8px", lg: "10px" },
                  borderTopRightRadius: { xs: "5px", md: "8px", lg: "10px" },
                }}
              >
                <Box component="strong">Sparade sökord </Box>
                <RemoveIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
              </Typography>

              <Box
                sx={{
                  p: "4px 25px 14px 20px",
                  backgroundColor: "#FFFFFF",
                  borderBottomLeftRadius: { xs: "5px", md: "8px", lg: "10px" },
                  borderBottomRightRadius: { xs: "5px", md: "8px", lg: "10px" },
                }}
              >
                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                  }}
                >
                  <Link href="#" underline="none">
                    Det finns mera 14st
                  </Link>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ mb: { xs: "15px", md: "20px", lg: "30px" }, width: "100%" }}
            >
              <Typography
                component="p"
                sx={{
                  p: "10px 20px ",
                  fontFamily: "Source Serif Pro",
                  fontWeight: 600,
                  fontSize: { xs: "16px", sm: "17px", md: "18px" },
                  lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#F9FBFC",
                  borderTopLeftRadius: { xs: "5px", md: "8px", lg: "10px" },
                  borderTopRightRadius: { xs: "5px", md: "8px", lg: "10px" },
                }}
              >
                <Box component="strong">Senaste sökda ord </Box>
                <RemoveIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
              </Typography>

              <Box
                sx={{
                  p: "4px 25px 14px 20px",
                  backgroundColor: "#FFFFFF",
                  borderBottomLeftRadius: { xs: "5px", md: "8px", lg: "10px" },
                  borderBottomRightRadius: { xs: "5px", md: "8px", lg: "10px" },
                }}
              >
                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Enskilda avlop storlek
                  <CloseIcon sx={{ width: { xs: "14px", sm: "16px" } }} />
                </Typography>

                <Typography
                  sx={{
                    p: "4px 0",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: { xs: "20px", sm: "25px", md: "30px" },
                  }}
                >
                  <Link href="#" underline="none">
                    Det finns mera 36st
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography
            component="p"
            sx={{
              p: "10px 20px ",
              fontFamily: "Source Serif Pro",
              fontWeight: 600,
              fontSize: { xs: "16px", sm: "17px", md: "18px" },
              lineHeight: { xs: "20px", sm: "25px", md: "30px" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#F9FBFC",
              borderRadius: { xs: "5px", md: "8px", lg: "10px" },
            }}
          >
            <Box component="strong">Senaste sökda ord </Box>
            <AddIcon sx={{ width: { xs: "15px", sm: "16px" } }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
