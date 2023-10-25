import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const allUsers = useSelector((state) => state.AuthReducer.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = allUsers.filter((item) => {
      if (
        item.email === formState.email &&
        item.password === formState.password
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (checkUser.length > 0) {
      //  console.log("formstate", formState)

      dispatch(userLogin(formState));
    } else {
      alert("Invalid User, Please Signup");
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>EMAIL</FormLabel>
                <Input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>PASSWORD</FormLabel>
                <Input
                  type="password"
                  required
                  placeholder="Enter Your Password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Text color={"blue.400"} onClick={() => navigate("/signup")}>
                    Forgot password?
                  </Text>
                </Stack>
                <Input
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                />
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};
