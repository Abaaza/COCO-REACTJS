import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
  Divider,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
  Spacer,
  Center,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import leftpicture from "../assets/19.webp";
import rightpicture from "../assets/21.webp";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email || !comment) {
      alert(t("formAlert"));
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      user_comment: comment,
    };

    emailjs
      .send(
        "service_4hrebk8", // Service ID
        "template_1zxs0jz", // Template ID
        templateParams,
        "1mIy5IpEpJPFCN01g" // User ID
      )
      .then((response) => {
        alert(t("successMessage"));
      })
      .catch((error) => {
        alert(t("errorMessage"));
      });

    setName("");
    setEmail("");
    setComment("");
  };

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "1fr auto 1fr",
  });

  const imageSize = useBreakpointValue({
    base: "85vw",
    md: "500px",
  });

  const fontSize = useBreakpointValue({
    base: "s",
    md: "l",
  });

  return (
    <Box
      p={{ base: 4, md: 10 }}
      bgGradient="linear(to-b, gray.100, white)"
      minHeight="100vh"
    >
      {/* Two square images with a vertical divider */}
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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={50}
      ></Box>
      {/* Contact Form */}
      <Box p={5} textAlign="center">
        <Heading as="h1" mb={4} color="black">
          {t("privateOccasionsHeading")} {/* Translated heading */}
        </Heading>
        <Text color="black">
          {t("privateOccasionsText")} {/* Translated text */}
        </Text>

        <Box mt={10} width="85%" mx="auto">
          <Heading as="h2" size="lg" mb={4} textAlign="center" color="black">
            {t("contactUs")}
          </Heading>
          <VStack spacing={4} align="stretch" textAlign="center">
            <FormControl id="name" color="black">
              <FormLabel>{t("nameLabel")}</FormLabel>
              <Input
                placeholder={t("namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" color="black">
              <FormLabel>{t("emailLabel")}</FormLabel>
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="comment" color="black">
              <FormLabel>{t("commentLabel")}</FormLabel>
              <Textarea
                placeholder={t("commentPlaceholder")}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormControl>

            <Button
              colorScheme="teal"
              size="lg"
              alignSelf="center"
              onClick={handleSubmit}
            >
              {t("submitButton")}
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
