import { NavLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// NavLinks
const baseStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: 900,
};

const activeStyle = {
  color: "Yellow",
  fontSize: "20px",
  fontWeight: 900,
  textDecoration: "none",
};

export const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  // console.log("isaut", isAuth)

  const links = [
    {
      to: "/",
      title: "HOME",
    },
    {
      to: "/about",
      title: "ABOUT",
    },
    {
      to: "/contact",
      title: "CONTACT",
    },
    {
      to: "/cart",
      title: "CART",
    },
    {
      to: "/signup",
      title: "SIGNUP",
    },
    isAuth
      ? {
          to: "/logout",
          title: "LOGOUT",
        }
      : {
          to: "/login",
          title: "LOGIN",
        },
  ];

  return (
    <Box
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        backgroundColor: "#dd6b20",
        padding: "20px",
      }}
    >
      {links.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </Box>
  );
};
