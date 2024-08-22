import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useCart } from "./CartContext"; // Import the useCart hook
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cart, removeItem, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const itemBgColor = useColorModeValue("gray.100", "gray.900");
  const totalBgColor = useColorModeValue("gray.50", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box p={5} bg={bgColor} color={textColor}>
      <Heading as="h1" mb={4} color={headingColor}>
        Your Cart
      </Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {cart.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="md"
              p={4}
              bg={itemBgColor}
              boxShadow="md"
            >
              <HStack spacing={4}>
                <Image
                  src={item.image}
                  alt={item.name}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <VStack align="start" spacing={2}>
                  <Heading size="md" color={headingColor}>
                    {item.name}
                  </Heading>
                  <Text color={textColor}>Size: {item.size}</Text>
                  <Text color={textColor}>Price: {item.price} EGP</Text>
                  <HStack spacing={4}>
                    <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                    <Text color={textColor}>Quantity: {item.quantity}</Text>
                    <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                    <Button
                      onClick={() => removeItem(item.id)}
                      colorScheme="red"
                    >
                      Remove
                    </Button>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ))}
          <Box
            w="full"
            pt={4}
            borderTopWidth="1px"
            borderColor={textColor}
            bg={totalBgColor}
            p={4}
            borderRadius="md"
          >
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>
              Total: {totalPrice} EGP
            </Text>
          </Box>
          <Button colorScheme="teal" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default CartPage;
