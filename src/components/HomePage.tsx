import React from "react";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AutoSlideShow from "./AutoSlideShow";
import leftpicture from "../assets/19.webp";
import rightpicture from "../assets/21.webp";
import image1 from "../assets/37.webp";
import image2 from "../assets/16.webp";
import image4 from "../assets/15.webp";
import image5 from "../assets/17.webp";
import image7 from "../assets/29.webp";
import image8 from "../assets/36.jpg";
import image9 from "../assets/38.jpg";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Array of slideshow images
  const imagesToShow = [image1, image7, image9, image5, image8, image2, image4];

  // Dynamically adjust the grid layout for mobile and larger screens
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr", // Single column layout for mobile
    md: "1fr auto 1fr", // Two equal columns with an auto-sized divider in between
  });

  // Adjust image size and alignment for mobile and larger screens
  const imageSize = useBreakpointValue({
    base: "100vw", // Force the image to be 85% of the viewport width for mobile
    md: "500px", // Larger image size for desktop
  });

  // Adjust font sizes for mobile and desktop
  const fontSize = useBreakpointValue({
    base: "s", // Smaller font size for mobile
    md: "l", // Larger font size for desktop
  });

  const goToProductGrid = () => {
    navigate("/product-grid");
  };

  return (
    <Box p={5}>
      {/* AutoSlideShow Component for images */}
      <Box onClick={goToProductGrid} cursor="pointer">
        <AutoSlideShow images={imagesToShow} />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={50}>
        <Divider orientation="horizontal" borderColor="gray.300" width="90%" />
      </Box>
      {/* Two square images with a vertical divider */}
      <Grid
        templateColumns={gridTemplateColumns}
        gap={6}
        alignItems="stretch" // Ensure both columns stretch to the same height
        justifyItems="center"
        mt={10}
        px={{ base: 0, md: 16 }} // Add padding on the left and right for both mobile and desktop
      >
        {/* First Image and Text */}
        <GridItem display="flex" justifyContent="center" alignSelf="stretch">
          <VStack
            spacing={4}
            align="center"
            justifyContent="space-between" // Ensures even spacing between image and text
            h="100%"
          >
            <Image
              src={leftpicture}
              alt="First Image"
              boxSize={imageSize}
              objectFit="cover"
            />
            <Text fontSize="xl" fontWeight="bold" color="#d3ad62">
              {t("Come Dine with Us")}
            </Text>
            <VStack spacing={2} align="center">
              <Text fontSize={fontSize}>{t("Almaza City Center")}</Text>
              <Text fontSize={fontSize}>{t("Cairo Festival City")}</Text>
              <Text fontSize={fontSize}>{t("River Walk")}</Text>
              <Text fontSize={fontSize}>{t("Heliopolis")}</Text>
              <Text fontSize={fontSize}>{t("Arkan Plaza")}</Text>
              <Text fontSize={fontSize}>{t("Madinaty Open Air Mall")}</Text>
            </VStack>
          </VStack>
        </GridItem>

        {/* Vertical Divider (shown only on larger screens) */}
        {useBreakpointValue({
          base: null,
          md: (
            <GridItem
              display="flex"
              justifyContent="center"
              alignSelf="stretch"
            >
              <Divider
                orientation="vertical"
                borderColor="gray.300"
                height="100%" // Stretch divider to full height of grid
              />
            </GridItem>
          ),
        })}

        {/* Second Image and Text */}
        <GridItem display="flex" justifyContent="center" alignSelf="stretch">
          <VStack
            spacing={4}
            align="center"
            justifyContent="space-between"
            h="100%"
          >
            <Image
              src={rightpicture}
              alt="Second Image"
              boxSize={imageSize}
              objectFit="cover"
            />
            <Text fontSize="xl" fontWeight="bold" color="#d3ad62">
              {t("Opening Hours")}
            </Text>
            <VStack spacing={2} align="center">
              <Text fontSize={fontSize}>{t("Sat-Wed")}</Text>
              <Text fontSize={fontSize}>{t("10am - 12pm")}</Text>
              <Text fontSize={fontSize}>{t("  ")}</Text>
              <Text fontSize={fontSize}>{t("Thu & Fri")}</Text>
              <Text fontSize={fontSize}>{t("10am - 1am​")}</Text>
              <Text fontSize={fontSize}>{t("  ")}</Text>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
