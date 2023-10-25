import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getProducts, handleAddCart } from "../Redux/product/action";
import { FilterComp } from "../Components/FilterComp";
import { StarIcon } from "@chakra-ui/icons";

export const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const products = useSelector((state) => state.ProductReducer.products);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  console.log("isAUth", isAuth);

  const cart = useSelector((state) => state.ProductReducer.cart);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || products.length === 0) {
      let getProductsParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search]);

  const addCart = (product) => {
    const productExist = cart?.filter((item) => item.id === product.id);
    if (productExist.length === 0) {
      dispatch(handleAddCart(product));
    } else {
      alert("Product Already Exist");
    }
  };

  return (
    <Flex>
      <Box w="20%" p="20px">
        <FilterComp />
      </Box>
      <SimpleGrid columns={3} spacing={10} p="10px">
        {products?.map((item) => (
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
              <Box
                onClick={() => navigate(`/product/${item.id}`)}
                key={item.id}
              >
                <Img
                  src={item.image}
                  alt="Product Image"
                  maxWidth="200px"
                  maxHeight="150px"
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
                    onClick={() => addCart(item)}
                    colorScheme="orange"
                    size="md"
                  >
                    ADD TO CART
                  </Button>
                  <Button colorScheme="orange" size="md">
                    BUY NOW
                  </Button>
                </Flex>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
