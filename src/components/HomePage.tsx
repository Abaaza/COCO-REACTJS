import React from "react";
import {
  Box,
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

  const imagesToShow = [image1, image7, image9, image5, image8, image2, image4];

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "1fr auto 1fr",
  });

  const imageSize = useBreakpointValue({
    base: "90vw",
    md: "400px",
  });

  const fontSize = useBreakpointValue({
    base: "md",
    md: "lg",
  });

  const goToProductGrid = () => {
    navigate("/product-grid");
  };

  return (
    <Box
      p={{ base: 4, md: 10 }}
      bgGradient="linear(to-b, gray.100, white)"
      minHeight="100vh"
    >
      {/* Slideshow Section */}
      <Box
        maxW="1200px"
        mx="auto"
        onClick={goToProductGrid}
        cursor="pointer"
        mb={{ base: 0, md: 5 }}
        boxShadow="md"
        borderRadius="md"
        overflow="hidden"
        _hover={{ transform: "scale(1.02)" }}
      >
        <AutoSlideShow images={imagesToShow} />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={{ base: 8, md: 12 }}
      ></Box>

      {/* Two-Column Section */}
      <Grid
        maxW="1200px"
        mx="auto"
        templateColumns={gridTemplateColumns}
        gap={8}
        alignItems="stretch"
        justifyItems="center"
        px={{ base: 0, md: 8 }}
      >
        {/* Left Column */}
        <GridItem display="flex" justifyContent="center" alignSelf="stretch">
          <VStack
            spacing={6}
            align="center"
            justifyContent="space-between"
            h="100%"
            bg="white"
            p={{ base: 4, md: 8 }}
            borderRadius="md"
            boxShadow="sm"
          >
            <Text fontSize="xl" fontWeight="bold" color="#d3ad62">
              {t("Come Dine with Us")}
            </Text>
            <VStack spacing={2} align="center" color="gray.700">
              <Text fontSize={fontSize}>{t("Almaza City Center")}</Text>
              <Text fontSize={fontSize}>{t("Cairo Festival City")}</Text>
              <Text fontSize={fontSize}>{t("River Walk")}</Text>
              <Text fontSize={fontSize}>{t("Heliopolis")}</Text>
              <Text fontSize={fontSize}>{t("Arkan Plaza")}</Text>
              <Text fontSize={fontSize}>{t("Madinaty Open Air Mall")}</Text>
            </VStack>
            <Image
              src={leftpicture}
              alt="First Image"
              boxSize={imageSize}
              objectFit="cover"
              borderRadius="md"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </VStack>
        </GridItem>

        {useBreakpointValue({
          base: null,
          md: (
            <GridItem
              display="flex"
              justifyContent="center"
              alignSelf="stretch"
            ></GridItem>
          ),
        })}

        {/* Right Column */}
        <GridItem display="flex" justifyContent="center" alignSelf="stretch">
          <VStack
            spacing={6}
            align="center"
            justifyContent="space-between"
            h="100%"
            bg="white"
            p={{ base: 4, md: 8 }}
            borderRadius="md"
            boxShadow="sm"
          >
            <Text fontSize="xl" fontWeight="bold" color="#d3ad62">
              {t("Opening Hours")}
            </Text>
            <VStack spacing={2} align="center" color="gray.700">
              <Text fontSize={fontSize}>{t("Sat-Wed")}</Text>
              <Text fontSize={fontSize}>{t("10am - 12pm")}</Text>
              <Text fontSize={fontSize}>&nbsp;</Text>
              <Text fontSize={fontSize}>{t("Thu & Fri")}</Text>
              <Text fontSize={fontSize}>{t("10am - 1am​")}</Text>
              <Text fontSize={fontSize}>&nbsp;</Text>
            </VStack>
            <Image
              src={rightpicture}
              alt="Second Image"
              boxSize={imageSize}
              objectFit="cover"
              borderRadius="md"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
