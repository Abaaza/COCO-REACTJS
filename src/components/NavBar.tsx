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
// Removed the navbar background import since we no longer need it
import logo from "../assets/COCO-Friendly-Dining-Logo.png"; // Logo image

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      p={4}
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      height={isMobile ? "100px" : "220px"}
      color="white"
      // Removed background image, replaced with a gradient
      bgColor="#1e1d18"
    >
      <Flex
        alignItems="center"
        direction={{ base: "row", md: "column" }}
        justifyContent={{ base: "space-between", md: "center" }}
        position="relative"
        height="100%"
      >
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            icon={isOpen ? <FaTimes /> : <FaBars />}
            aria-label="Menu"
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            bg="transparent"
            border="none"
            ml="0"
            display={{ base: "block", md: "none" }}
            zIndex={1100}
            color="#d3ad62"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent", boxShadow: "none" }}
            _active={{ bg: "transparent" }}
          />
        )}

        {/* Logo */}
        <Image
          src={logo}
          w={isMobile ? "80px" : "120px"}
          cursor="pointer"
          onClick={handleLogoClick}
          position={isMobile ? "absolute" : "static"}
          left={isMobile ? "50%" : "auto"}
          transform={isMobile ? "translateX(-50%)" : "none"}
          p={1}
          mb={isMobile ? 0 : 4}
          zIndex={1100}
        />

        {/* Desktop Links */}
        {!isMobile && (
          <HStack spacing={8} align="center">
            {[
              { label: t("home"), path: "/" },
              { label: t("branches"), path: "/branches" },
              { label: t("menu"), path: "/menu" },
              { label: t("contact"), path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                position="relative"
                color={isActive(item.path) ? "#d3ad62" : "white"}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{
                  color: "#d3ad62",
                  _after: { width: "100%" },
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: isActive(item.path) ? "100%" : "0",
                  height: "2px",
                  bg: "#d3ad62",
                  transition: "width 0.3s",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="#000"
                color="white"
                _hover={{ bg: "#4b4745" }}
              >
                {i18n.language === "en" ? "English" : "العربية"}
              </MenuButton>
              <MenuList bg="#000" borderColor="#4b4745">
                <MenuItem
                  onClick={() => handleLanguageChange("en")}
                  color="black"
                  _hover={{ bg: "#4b4745", color: "white" }}
                >
                  English
                </MenuItem>
                <MenuItem
                  onClick={() => handleLanguageChange("ar")}
                  color="black"
                  _hover={{ bg: "#4b4745", color: "white" }}
                >
                  العربية
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        )}

        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100vh"
            zIndex={1000}
            backgroundColor="rgba(0,0,0,0.8)"
            p={4}
            pt="120px"
          >
            <VStack spacing={6} alignItems="center">
              {[
                { label: t("home"), path: "/" },
                { label: t("branches"), path: "/branches" },
                { label: t("menu"), path: "/menu" },
                { label: t("contact"), path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  fontSize="2xl"
                  fontWeight="bold"
                  position="relative"
                  color={isActive(item.path) ? "#d3ad62" : "white"}
                  _hover={{
                    color: "#d3ad62",
                    _after: { width: "100%" },
                  }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: isActive(item.path) ? "100%" : "0",
                    height: "2px",
                    bg: "#d3ad62",
                    transition: "width 0.3s",
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Switcher in Mobile */}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="#000"
                  color="white"
                  _hover={{ bg: "#4b4745" }}
                >
                  {i18n.language === "en" ? "English" : "العربية"}
                </MenuButton>
                <MenuList bg="#000" borderColor="#4b4745">
                  <MenuItem
                    onClick={() => handleLanguageChange("en")}
                    color="black"
                    _hover={{ bg: "#4b4745", color: "white" }}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleLanguageChange("ar")}
                    color="black"
                    _hover={{ bg: "#4b4745", color: "white" }}
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
