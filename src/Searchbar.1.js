import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("hamburger");
  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=c2e997aa&app_key=8770737d9f2b773a82584be82e3f95e8`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <TextField
      label="Search"
      onChange={handleChange}
      sx={{ padding: "10px" }}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
