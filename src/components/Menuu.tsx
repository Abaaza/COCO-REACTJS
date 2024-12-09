import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer"; // Use the imported Footer

// ExternalLinkComponent with no position fixed, so it will scroll with the page
const ExternalLinkComponent: React.FC = () => {
  return (
    <Box
      bg="gray.100"
      p={0}
      w="100%" // Full width of the container
      h="100vh" // Takes up full viewport height
      mx="auto"
    >
      <iframe
        src="https://dev-coco-viral21.pantheonsite.io/"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="External Website"
      />
    </Box>
  );
};

// Menu component that renders ExternalLinkComponent and Footer
const Menu: React.FC = () => {
  return (
    <Box>
      <ExternalLinkComponent />
    </Box>
  );
};

export default Menu;
