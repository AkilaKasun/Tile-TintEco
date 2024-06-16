import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, selected, theme) {
  return {
    fontWeight:
      selected === name ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

export default function Dropdown({ label, items, selectedItems, onChange }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const { target: { value } } = event;
    onChange(value); // directly use the value without splitting as we are not allowing multiple selections
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={`label-${label}`} sx={{
          color: 'white',  // Label color
          '&.Mui-focused': { color: 'rgb(235, 165, 26)' },
          '&.MuiInputLabel-shrink': {
            color: 'rgb(235, 165, 26)',
          }
        }}>
          {label}
        </InputLabel>
        <Select
          labelId={`label-${label}`}
          id={`select-${label}`}
          value={selectedItems}
          onChange={handleChange}
          input={<OutlinedInput 
            label={label} 
            sx={{
              '&& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(235, 165, 26)',  // Border color
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(235, 165, 26)',  // Hover border color
              },
              '&&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(235, 165, 26)',  // Focused border color
              },
              '&& .MuiInputBase-input': {
                color: 'white',  // Text color inside the input
              }
            }} 
          />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected} // Display the selected item as is
        >
          {items.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedItems, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
 