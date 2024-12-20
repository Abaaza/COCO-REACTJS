import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import MenuItemCard from "./MenuItemCard"; // Ensure this exists
import { apiService } from "../components/api";

interface MenuItem {
  _id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: string;
}

type Language = "en" | "ar";

const baseCategories: string[] = [
  "salads",
  "hot sandwich",
  "soups",
  "breakfast",
  "cold sandwich",
  "starters",
  "pasta",
  "fajitas",
  "chicken",
  "beef",
  "seafood",
  "pizza",
  "side dishes",
  "kids meals",
  "desserts",
  "beverages",
];

type ItemsMap = Record<string, MenuItem[]>;

export default function MenuScreen() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const [items, setItems] = useState<ItemsMap>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("salads");

  const categories = useMemo(() => {
    return currentLanguage === "ar"
      ? [...baseCategories].reverse()
      : baseCategories;
  }, [currentLanguage]);

  useEffect(() => {
    void fetchAllItems();
  }, []);

  async function fetchAllItems(): Promise<void> {
    try {
      setLoading(true);
      setError(null);
      const all: ItemsMap = {};
      for (const cat of baseCategories) {
        try {
          const res = await apiService.getMenuItems(cat);
          all[cat] = res.data;
        } catch (e: any) {
          console.error("Error fetching category:", cat, e);
          setError(e.message || "Failed to fetch menu items");
          break;
        }
      }
      setItems(all);
    } catch (e: any) {
      console.error("Error in fetchAllItems:", e);
      setError(e.message || "Failed to fetch menu items");
    } finally {
      setLoading(false);
    }
  }

  function translateCategory(category: string, lang: Language): string {
    if (lang === "ar") {
      const translations: Record<string, string> = {
        salads: "سلطات",
        "hot sandwich": "ساندويتش ساخنه",
        soups: "شوربات",
        breakfast: "فطار",
        "cold sandwich": "ساندويتش بارده",
        starters: "مقبلات",
        pasta: "مكرونة",
        fajitas: "فاهيتا",
        chicken: "دجاج",
        beef: "لحم",
        seafood: "مأكولات بحرية",
        pizza: "بيتزا",
        "side dishes": "أطباق جانبية",
        "kids meals": "وجبات أطفال",
        desserts: "حلويات",
        beverages: "مشروبات",
      };
      return translations[category] || category;
    }
    return category;
  }

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="#d3ad62" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center flexDir="column" height="100vh">
        <Text color="red.500" mb={4}>
          {error}
        </Text>
        <Button onClick={() => void fetchAllItems()} bg="#d3ad62" color="white">
          {t("Retry")}
        </Button>
      </Center>
    );
  }

  return (
    <Box
      p={{ base: 4, md: 10 }}
      bgGradient="linear(to-b, gray.100, white)"
      minHeight="100vh"
    >
      {/* Categories navigation */}
      <Box
        overflowX="auto"
        mb={6}
        borderBottom="1px"
        borderColor="gray.200"
        sx={{
          "&::-webkit-scrollbar": {
            height: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#d3ad62",
            borderRadius: "4px",
          },
        }}
      >
        <HStack
          spacing={2}
          pb={4}
          minW="max-content"
          px={2}
          flexDir={currentLanguage === "ar" ? "row-reverse" : "row"}
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <Button
                key={cat}
                variant="ghost"
                onClick={() => setActiveCategory(cat)}
                fontSize={{ base: "sm", md: "md" }}
                px={3}
                py={2}
                flexShrink={0}
                fontWeight={isActive ? "bold" : "normal"}
                color={isActive ? "#d3ad62" : "gray.600"}
                _hover={{ bg: "gray.50" }}
                height="auto"
                whiteSpace="nowrap"
              >
                {translateCategory(cat, currentLanguage)}
              </Button>
            );
          })}
        </HStack>
      </Box>

      {/* Menu Items */}
      {categories.map((cat) => {
        if (cat !== activeCategory) return null;
        const categoryItems = items[cat] || [];
        if (!Array.isArray(categoryItems) || categoryItems.length === 0) {
          return (
            <Text key={cat} fontSize="lg" color="gray.500">
              {t("No items available.")}
            </Text>
          );
        }
        return (
          <Box key={cat}>
            <Heading
              as="h2"
              size="lg"
              mb={4}
              color="#d3ad62"
              textTransform="capitalize"
              textAlign={currentLanguage === "ar" ? "right" : "left"}
            >
              {translateCategory(cat, currentLanguage)}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {categoryItems.map((item: MenuItem) => (
                <MenuItemCard
                  key={item._id}
                  item={item}
                  currentLanguage={currentLanguage}
                />
              ))}
            </SimpleGrid>
          </Box>
        );
      })}
    </Box>
  );
}
