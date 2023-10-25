import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddCart } from "../Redux/product/action";

export const SingleProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();

  const getProductById = (id) => {
    return axios(`http://localhost:3004/Products/${id}`);
  };

  const addCart = (product) => {
    const productExist = cart?.filter((item) => item.id === product.id);
    if (productExist.length === 0) {
      dispatch(handleAddCart(product));
    } else {
      alert("Product Already Exist");
    }
  };

  useEffect(() => {
    getProductById(id)
      .then((r) => {
        setData(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box w="50%" m="auto" p="2%" key={data.id}>
      <Flex justifyContent={"space-around"}>
        <Img src={data.image} alt="Product Image" w="30%" h="50%" />
        <Box textAlign={"left"}>
          <Img
            w="100px"
            h="50px"
            src={
              "https://media2.giphy.com/media/KyS5Ilk5RR5ygeipqi/200w.webp?cid=ecf05e476q18atyrzctff66i9vajvigsmafau8zinb4ko1xw&ep=v1_gifs_search&rid=200w.webp&ct=g"
            }
            alt="sale"
          />
          <Text fontWeight={900} fontSize={"xl"}>
            {data.title}
          </Text>
          <Text>
            {data.ratings} <StarIcon color={"yellow"} />
          </Text>
          <Text as="b" fontSize="md" color={"purple"} align={"left"}>
            Big Saving Deal
          </Text>
          <Text fontSize="xl" fontWeight={900}>
            {" "}
            ₹ {data.price} <s>{data.strikedPrice}</s>
          </Text>
          <Flex justifyContent={"space-around"} m="10px 0px">
            <Button
              colorScheme="orange"
              size="md"
              mr="10px"
              onClick={() => addCart(data)}
            >
              ADD TO CART
            </Button>
            <Button colorScheme="orange" size="md">
              BUY NOW
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box textAlign={"left"} mt="50px">
        <Text
          fontWeight={"900"}
          fontSize={"2xl"}
          decoration={"underline"}
          p="20px 0px"
        >
          Description
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quae
          sint, quibusdam deleniti nihil alias laudantium neque quaerat dolor
          incidunt perspiciatis consequuntur dicta expedita natus ipsam culpa at
          quam nam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error minima quos, sapiente suscipit eos facilis possimus in porro,
          natus sit nesciunt quia aliquid rerum esse minus optio molestias
          itaque quidem! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Unde placeat quo impedit, eveniet magnam id, cumque quam
          possimus labore est dignissimos, pariatur natus dolorem corporis minus
          magni molestiae. Quia, corrupti!Lorem
        </Text>
      </Box>
    </Box>
  );
};
