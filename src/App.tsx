import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
import CheckoutPage from "./components/CheckoutPage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

import ThankYouPage from "./components/ThankYouPage";
import { DirectionProvider } from "../src/assets/DirectionContext"; // Import DirectionProvider
import { ReactGAImplementation } from "react-ga4";
import ReactGA from "react-ga4";
import { BsWindowSidebar } from "react-icons/bs";

ReactGA.initialize("G-Z3HCP2S7R3");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Wall Masters";
  }, []);

  return (
    <DirectionProvider>
      <Router>
        <CartProvider>
          <Flex direction="column" minHeight="100vh">
            <NavBar />
            <Grid
              templateAreas={{
                base: `"main"`,
                lg: `"main"`,
              }}
              templateRows="auto 1fr"
              flex="1"
              paddingTop="60px"
            >
              <GridItem area="main">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product-grid" element={<ProductGrid />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="*" element={<p>Page not found</p>} />
                  <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
              </GridItem>
            </Grid>
            <Footer />
          </Flex>
        </CartProvider>
      </Router>
    </DirectionProvider>
  );
};

export default App;
