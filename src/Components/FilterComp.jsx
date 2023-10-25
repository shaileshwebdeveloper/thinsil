import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrandFilters = searchParams.getAll("category");
  const [category, setBrand] = useState(initialBrandFilters || []);

  const handleBrandFilterCheckbox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    console.log(newCategory);
    setBrand(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
      setSearchParams(params);
    }
  }, [setSearchParams, category]);

  return (
    <Box style={{ textAlign: "left" }}>
      <Text fontSize="xl" fontWeight="900" mb="10px" color={"orange"}>
        CATEGORIES
      </Text>
      <Box style={{ borderBottom: "0.2rem solid grey" }} pb="1rem">
        <Box>
          <input
            type="checkbox"
            value="Tv"
            checked={category.includes("Tv")}
            onChange={handleBrandFilterCheckbox}
            style={{ marginRight: "5px" }}
          />
          <label>TV</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Watch"
            checked={category.includes("Watch")}
            onChange={handleBrandFilterCheckbox}
            style={{ marginRight: "5px" }}
          />
          <label>Watch</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Mobile"
            checked={category.includes("Mobile")}
            onChange={handleBrandFilterCheckbox}
            style={{ marginRight: "5px" }}
          />
          <label>Mobile</label>
        </Box>
      </Box>
    </Box>
  );
};
