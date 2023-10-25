import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, handleRemoveCart } from "../Redux/product/action";

export const Cart = () => {
  const cart = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();

  const removeFromCart = (payload) => {
    dispatch(handleRemoveCart(payload));
  };

  useEffect(() => {
    dispatch(getCartProducts());
  }, [cart]);

  return (
    <>
      {" "}
      <SimpleGrid columns={3} spacing={10} mt="20px" width={"80%"} m="auto">
        {cart?.map((item) => (
          <>
            <Box
              key={item.id}
              p="10%"
              w="350px"
              h="400px"
              textAlign={"left"}
              borderRadius={"5%"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <Box>
                <Img
                  src={item.image}
                  alt="Product Image"
                  w="50%"
                  h="50%"
                  mb="5px"
                />
                <Text fontSize={"lg"} fontWeight={"bold"} mb="5px">
                  {item.title}
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Text as="b" fontSize="md" mb="5px">
                    ₹ {item.price} <s>{item.strikedPrice}</s>
                    <span style={{ color: "orange" }}>
                      <Img
                        w="70px"
                        h="25px"
                        src={
                          "https://media2.giphy.com/media/KyS5Ilk5RR5ygeipqi/200w.webp?cid=ecf05e476q18atyrzctff66i9vajvigsmafau8zinb4ko1xw&ep=v1_gifs_search&rid=200w.webp&ct=g"
                        }
                        alt="sale"
                      />
                    </span>
                  </Text>
                  <Text>
                    {item.ratings} <StarIcon color={"yellow"} />
                  </Text>
                </Flex>
                <Text as="b" fontSize="md" color={"purple"} align={"left"}>
                  Big Saving Deal
                </Text>
              </Box>
              <Box>
                <Flex justifyContent={"space-around"} m="10px 0px">
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    colorScheme="orange"
                    size="md"
                  >
                    REMOVE
                  </Button>
                </Flex>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};
