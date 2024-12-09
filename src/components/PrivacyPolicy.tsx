import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Divider,
  useColorModeValue,
  Stack,
  Card,
  CardBody,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  const bgColor = useColorModeValue("black.100", "gray.900");
  const cardBg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <Container maxW="4xl">
        <Card bg={cardBg} shadow="lg" rounded="xl">
          <CardBody p={8}>
            {/* Header Section */}
            <VStack spacing={3} align="center" mb={10}>
              <Heading as="h1" size="2xl" textAlign="center">
                Privacy Policy for Coco Restaurants
              </Heading>
              <Text fontSize="md" color="gray.500" fontStyle="italic">
                Last updated: December 09, 2024
              </Text>
            </VStack>

            {/* Introduction */}
            <VStack spacing={8} align="stretch">
              <Text fontSize="lg" lineHeight="tall">
                Welcome to Coco Restaurants ("we," "our," or "us"). We respect
                your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we handle your
                personal information when you use our mobile application ("App")
                and tell you about your privacy rights.
              </Text>

              {/* Information Collection Section */}
              <Stack spacing={6}>
                <Heading as="h2" size="xl">
                  Information We Collect
                </Heading>

                <Box>
                  <Heading as="h3" size="md" mb={4}>
                    Information you provide to us:
                  </Heading>
                  <UnorderedList spacing={2} pl={4}>
                    <ListItem>Name and contact details</ListItem>
                    <ListItem>Delivery address (if applicable)</ListItem>
                    <ListItem>Order history and preferences</ListItem>
                    <ListItem>
                      Payment information (processed securely through our
                      payment providers)
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box>
                  <Heading as="h3" size="md" mb={4}>
                    Information automatically collected:
                  </Heading>
                  <UnorderedList spacing={2} pl={4}>
                    <ListItem>
                      Device information (model, operating system)
                    </ListItem>
                    <ListItem>App usage data</ListItem>
                    <ListItem>
                      Location data (only when you explicitly allow it for
                      delivery services)
                    </ListItem>
                    <ListItem>IP address</ListItem>
                  </UnorderedList>
                </Box>
              </Stack>

              {/* How We Use Information Section */}
              <Stack spacing={6}>
                <Heading as="h2" size="xl">
                  How We Use Your Information
                </Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem>Process and deliver your orders</ListItem>
                  <ListItem>Manage your account</ListItem>
                  <ListItem>
                    Send you important updates about our services
                  </ListItem>
                  <ListItem>Improve our App and services</ListItem>
                  <ListItem>Provide customer support</ListItem>
                  <ListItem>
                    Send promotional communications (with your consent)
                  </ListItem>
                  <ListItem>Comply with legal obligations</ListItem>
                </UnorderedList>
              </Stack>

              {/* Contact Section */}
              <Card bg="blue.50" variant="filled">
                <CardBody>
                  <Stack spacing={4}>
                    <Heading as="h2" size="xl">
                      Contact Us
                    </Heading>
                    <Text>
                      If you have any questions about this privacy policy or our
                      privacy practices, please contact us at:
                    </Text>
                    <Box pl={4}>
                      <Text fontWeight="bold">Coco Restaurants</Text>
                      <Text>Email: info@cocoegypt.com</Text>
                      <Text>Address: Heliopolis, Cairo, Egypt</Text>
                      <Text>Phone: +20 1222204651 </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>

              {/* Consent Section */}
              <Divider my={6} />
              <Text fontSize="lg" textAlign="center" fontWeight="medium">
                By using our App, you consent to our Privacy Policy and agree to
                its terms.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Footer */}
        <Text textAlign="center" fontSize="sm" color="gray.500" mt={6}>
          © 2024 Coco Restaurants. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
