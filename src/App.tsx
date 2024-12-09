import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react"; // Import useBreakpointValue
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Menu from "./components/Menuu";
import Branches from "./components/Branchess";
import Contact from "./components/Contactt";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { DirectionProvider } from "../src/assets/DirectionContext"; // Import DirectionProvider
import ReactGA from "react-ga4";

ReactGA.initialize("G-GKPZ9CHJYL");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const App: React.FC = () => {
  useEffect(() => {
    document.title = "COCO";
  }, []);

  // Set padding-top based on the breakpoint
  const paddingTop = useBreakpointValue({
    base: "105px", // No padding on mobile
    md: "215px", // 200px padding on larger screens
  });

  return (
    <DirectionProvider>
      <Router>
        {/* Navbar is fixed at the top, rendering outside of the grid system */}
        <NavBar />

        {/* Main content container */}
        <Flex
          direction="column"
          minHeight="100vh"
          pt={paddingTop} // Dynamically set padding-top based on screen size
        >
          {/* Main content */}
          <Box flex="1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="*" element={<p>Page not found</p>} />
            </Routes>
          </Box>

          {/* Footer at the bottom */}
          <Footer />
        </Flex>
      </Router>
    </DirectionProvider>
  );
};

export default App;
