import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userSignup } from "../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";

export const Signup = () => {
  const allUsers = useSelector((state) => state.AuthReducer.signup);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: "",
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
      if (item.email === formState.email) {
        return true;
      } else {
        return false;
      }
    });

    if (checkUser.length > 0) {
      alert("USER ALREADY EXIST");
    } else {
      dispatch(userSignup(formState));
      alert("SIGNUP SUCCESSFUL");
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(allUsers));
  }, [allUsers]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Register Today!</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={20}
          >
            <Stack spacing={4}>
              <FormControl id="firstname" isRequired>
                <FormLabel>FIRST NAME</FormLabel>
                <Input
                  type="text"
                  required
                  placeholder="Enter Your First Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </FormControl>

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
                  {/* <Checkbox>Remember me</Checkbox>
                    <Text color={"blue.400"}>Forgot password?</Text> */}
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
