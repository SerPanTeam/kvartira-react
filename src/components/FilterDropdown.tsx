import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import RealEstateObject from "../interfaces/RealEstateObject";

interface FilterDropdownProps {
  label: string;
  currentObjects: RealEstateObject[];
  defaultValue: string;
  type: string;
  subType: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  currentObjects,
  defaultValue,
  type,
  subType,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const handleReset = () => {
    setSelectedOption(defaultValue); // Сбрасываем фильтр до значения по умолчанию
  };
  let listFromArray = [];
  if (!subType)
    listFromArray = Array.from(
      new Set(currentObjects.map((item) => item[type]))
    );
  else
    listFromArray = Array.from(
      new Set(currentObjects.map((item) => item[type][subType]))
    );
  listFromArray.sort();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          key={label}
          value={listFromArray.includes(selectedOption) ? selectedOption : ""}
          label={label}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {listFromArray.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleReset}>
        Сбросить
      </Button>
    </Box>
  );
};

export default FilterDropdown;
