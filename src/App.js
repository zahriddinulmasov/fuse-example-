import "./app.css";

import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Header } from "./container/header";
import {Footer} from "./container/footer"

import { Home } from "./pages/home";
import { Prices } from "./pages/prices";
import { Search } from "./pages/search_engine/search";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";

function App() {
  return (
    <Box
      className="app"
    >
      <Box>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </Box>
    </Box>
  );
}

export default App;
