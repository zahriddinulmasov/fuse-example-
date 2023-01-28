import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px 20px",
            sm: "20px 24px",
            md: "30px 24px",
          },
          background: "#333333",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            color: "#FFFFFF",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="p"
            sx={{
              m: "0",
              fontFamily: "Source Serif Pro",
              fontSize: {xs: "13px", sm: "14px"},
              lineHeight: "21px",
            }}
          >
            Copyright © 2022 Maxplatt.se Org 550964-4584 {">"} Onic webbyrå
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, minWidth: "120px" }}
          >
            <Box
              href="#"
              component="a"
              color="inherit"
              sx={{
                fontFamily: "Source Serif Pro",
                textDecoration: "none",
                ml: "12px",
                fontSize: {xs: "13px", sm: "14px"},
                lineHeight: "21px",
              }}
            >
              Integritetspolicy
            </Box>

            <Box
              href="#"
              component="a"
              color="inherit"
              sx={{
                fontFamily: "Source Serif Pro",
                textDecoration: "none",
                ml: { xs: "12px", sm: "25px", md: "45px" },
                fontSize: {xs: "13px", sm: "14px"},
                lineHeight: "21px",
              }}
            >
              Allmänna villkor
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
