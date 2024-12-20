import React, { useState } from "react";
import { Box, Text, Button, Image, Flex, IconButton } from "@chakra-ui/react";

interface Variation {
  _id: string;
  name: string;
  nameAr: string;
  price: number;
}

interface MenuItem {
  _id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: string;
  image?: string;
  variations?: Variation[];
}

type Language = "en" | "ar";

const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

function toArabicDigits(num: number | undefined): string {
  if (num === undefined || num === null) return "0";
  return num
    .toString()
    .split("")
    .map((digit: string) =>
      /\d/.test(digit) ? arabicDigits[parseInt(digit, 10)] : digit
    )
    .join("");
}

interface MenuItemCardProps {
  item: MenuItem;
  currentLanguage: Language;
}

export default function MenuItemCard({
  item,
  currentLanguage,
}: MenuItemCardProps) {
  // Find lowest price variation
  const lowestPriceVariation =
    item.variations && item.variations.length > 0
      ? item.variations.reduce(
          (prev, current) => (prev.price < current.price ? prev : current),
          item.variations[0]
        )
      : undefined;

  const [selectedVariation, setSelectedVariation] = useState<
    Variation | undefined
  >(lowestPriceVariation);

  const name = currentLanguage === "ar" ? item.nameAr : item.name;
  const description =
    currentLanguage === "ar" ? item.descriptionAr : item.description;

  const currentPrice = selectedVariation?.price ?? item.price;
  const priceText =
    currentLanguage === "ar"
      ? `${toArabicDigits(currentPrice)} جنيه`
      : `${currentPrice} EGP`;

  const renderVariations = () => {
    if (!item.variations || item.variations.length === 0) return null;

    const sortedVariations = [...item.variations].sort(
      (a, b) => a.price - b.price
    );

    return (
      <Box mt={4}>
        {sortedVariations.map((variation) => {
          const variationName =
            currentLanguage === "ar" ? variation.nameAr : variation.name;
          const isSelected = selectedVariation?._id === variation._id;
          const priceDifference =
            variation.price - (lowestPriceVariation?.price || 0);

          return (
            <Button
              key={variation._id}
              onClick={() => setSelectedVariation(variation)}
              variant={isSelected ? "solid" : "outline"}
              colorScheme="yellow"
              size="sm"
              mb={2}
              mr={2}
              backgroundColor={isSelected ? "#d3ad62" : "transparent"}
              color={isSelected ? "white" : "#d3ad62"}
              borderColor="#d3ad62"
              _hover={{
                backgroundColor: isSelected ? "#c19b52" : "#fff5e6",
              }}
            >
              {variationName}
              {priceDifference > 0 &&
                ` (+${currentLanguage === "ar" ? toArabicDigits(priceDifference) : priceDifference} ${currentLanguage === "ar" ? "جنيه" : "EGP"})`}
            </Button>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      p={4}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.02)" }}
      textAlign={currentLanguage === "ar" ? "right" : "left"}
      border="1px"
      borderColor="gray.200"
    >
      <Box
        mb={4}
        width="100%"
        height="200px"
        borderRadius="md"
        overflow="hidden"
      >
        <Image
          src={item.image || "/api/placeholder/400/400"}
          alt={name}
          width="100%"
          height="100%"
          objectFit="cover"
          fallbackSrc="/api/placeholder/400/400"
        />
      </Box>

      <Flex justifyContent="space-between" alignItems="flex-start" mb={2}>
        <Text fontSize="lg" fontWeight="bold" color="gray.800" flex={1}>
          {name}
        </Text>
      </Flex>

      <Text fontSize="sm" color="gray.600" mb={4} minHeight="3em">
        {description}
      </Text>

      {renderVariations()}

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Text fontSize="md" color="#d3ad62" fontWeight="600">
          {priceText}
        </Text>
      </Flex>
    </Box>
  );
}
