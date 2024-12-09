import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import navbarbackground from "../assets/cocobackground1.jpg"; // Background image
import logo from "../assets/COCO-Friendly-Dining-Logo.png"; // Logo image

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location
  const { isOpen, onOpen, onClose } = useDisclosure(); // For mobile menu
  const { t, i18n } = useTranslation();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleLogoClick = () => {
    navigate("/");
    if (isOpen) onClose();
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    if (isOpen) onClose();
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      p={4}
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      boxShadow="md"
      color="white"
      height={isMobile ? "100px" : "210px"} // Adjust height based on mobile or desktop
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${navbarbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: "scaleY(-1)", // Flip the background vertically
        zIndex: -1, // Ensure the background is behind other content
      }}
    >
      <Flex
        alignItems="center"
        direction={{ base: "row", md: "column" }} // Row on mobile, column on desktop
        justifyContent={{ base: "space-between", md: "center" }} // Adjust for mobile and desktop
        position="relative"
        height="100%" // Set the height for flex items to take full height
      >
        {/* Mobile Menu Button */}
        <IconButton
          icon={
            isOpen ? <FaTimes color="#d3ad62" /> : <FaBars color="#d3ad62" />
          } // Make the hamburger and close icon #d3ad62
          aria-label="Menu"
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          bg="transparent" // Ensure no background behind the icon
          border="none" // Remove any border
          ml="0"
          display={isMobile ? "block" : "none"} // Only show in mobile view
          zIndex={1100} // Ensure it's above other content
          _hover={{ bg: "transparent" }} // Remove background on hover
          _focus={{ bg: "transparent", boxShadow: "none" }} // Remove background and shadow on focus
          _active={{ bg: "transparent" }} // Remove background on click
        />

        {/* Mobile Logo - Centered in full page */}
        {isMobile && (
          <Image
            src={logo}
            w="80px"
            h="auto"
            cursor="pointer"
            onClick={handleLogoClick}
            position="absolute" // Position logo absolutely
            left="50%" // Move the logo to the center horizontally
            transform="translateX(-50%)" // Adjust position to perfectly center
            p={1}
          />
        )}

        {/* Desktop Logo */}
        {!isMobile && (
          <Image
            src={logo}
            w="120px"
            h="auto"
            cursor="pointer"
            onClick={handleLogoClick}
            mb={4} // Add some space between the logo and the links
          />
        )}

        {/* Desktop Links */}
        {!isMobile && (
          <HStack spacing={8} align="center">
            <Link
              onClick={() => handleLinkClick("/")}
              color={isActive("/") ? "#d3ad62" : "white"} // Highlight active link
              _hover={{ color: "#d3ad62" }} // Hover effect
            >
              {t("home")}
            </Link>
            <Link
              onClick={() => handleLinkClick("/branches")}
              color={isActive("/branches") ? "#d3ad62" : "white"} // Highlight active link
              _hover={{ color: "#d3ad62" }}
            >
              {t("branches")}
            </Link>
            <Link
              onClick={() => handleLinkClick("/menu")}
              color={isActive("/menu") ? "#d3ad62" : "white"} // Highlight active link
              _hover={{ color: "#d3ad62" }}
            >
              {t("menu")}
            </Link>
            <Link
              onClick={() => handleLinkClick("/contact")}
              color={isActive("/contact") ? "#d3ad62" : "white"} // Highlight active link
              _hover={{ color: "#d3ad62" }}
            >
              {t("contact")}
            </Link>

            {/* Language Switcher with Menu */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="#555250"
                color="white"
                _hover={{ bg: "#4b4745" }}
              >
                {i18n.language === "en" ? "English" : "العربية"}
              </MenuButton>
              <MenuList bg="#555250" borderColor="#4b4745">
                <MenuItem
                  onClick={() => handleLanguageChange("en")}
                  color="white"
                  _hover={{ bg: "#4b4745", color: "white" }} // Ensure text stays visible on hover
                >
                  English
                </MenuItem>
                <MenuItem
                  onClick={() => handleLanguageChange("ar")}
                  color="white"
                  _hover={{ bg: "#4b4745", color: "white" }} // Ensure text stays visible on hover
                >
                  العربية
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        )}

        {/* Mobile Menu - Open */}
        {isMobile && isOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100vh"
            backgroundImage={`url(${navbarbackground})`} // Same background as navbar
            backgroundSize="cover" // Ensure the image covers the entire background
            backgroundPosition="center" // Center the background image
            backgroundRepeat="no-repeat" // Prevent the image from repeating
            color="white"
            zIndex={1000}
            p={4}
          >
            <VStack spacing={4} alignItems="center">
              {/* Mobile Links with Larger Font Size */}
              <Link
                onClick={() => handleLinkClick("/")}
                fontSize="2xl" // Increase text size in mobile open view
                color={isActive("/") ? "#d3ad62" : "white"} // Highlight active link in mobile
                _hover={{ color: "#d3ad62" }}
              >
                {t("home")}
              </Link>
              <Link
                onClick={() => handleLinkClick("/branches")}
                fontSize="2xl" // Increase text size in mobile open view
                color={isActive("/branches") ? "#d3ad62" : "white"} // Highlight active link in mobile
                _hover={{ color: "#d3ad62" }}
              >
                {t("branches")}
              </Link>
              <Link
                onClick={() => handleLinkClick("/menu")}
                fontSize="2xl" // Increase text size in mobile open view
                color={isActive("/menu") ? "#d3ad62" : "white"} // Highlight active link in mobile
                _hover={{ color: "#d3ad62" }}
              >
                {t("menu")}
              </Link>
              <Link
                onClick={() => handleLinkClick("/contact")}
                fontSize="2xl" // Increase text size in mobile open view
                color={isActive("/contact") ? "#d3ad62" : "white"} // Highlight active link in mobile
                _hover={{ color: "#d3ad62" }}
              >
                {t("contact")}
              </Link>

              {/* Language Switcher in Mobile */}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="#555250"
                  color="white"
                  _hover={{ bg: "#4b4745" }}
                >
                  {i18n.language === "en" ? "English" : "العربية"}
                </MenuButton>
                <MenuList bg="#555250" borderColor="#4b4745">
                  <MenuItem
                    onClick={() => handleLanguageChange("en")}
                    color="black"
                    _hover={{ bg: "#4b4745", color: "white" }} // Ensure text stays visible on hover
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleLanguageChange("ar")}
                    color="black"
                    _hover={{ bg: "#4b4745", color: "white" }} // Ensure text stays visible on hover
                  >
                    العربية
                  </MenuItem>
                </MenuList>
              </Menu>
            </VStack>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default NavBar;
