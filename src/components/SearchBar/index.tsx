import { Stack, Autocomplete, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector } from '../../utils/hook';
const SearchBar = () => {
  const assetsArray: any = useAppSelector((state) => state.assets.assets);
  return (
    <Stack spacing={2} sx={{ width: '300px' }}>
      <Autocomplete
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Поиск...'
            InputProps={{ ...params.InputProps, type: 'search' }}
            variant='outlined'
            fullWidth
          />
        )}
        options={assetsArray.map((item: { name: string }) => item.name)}
      />
    </Stack>
  );
};

export default SearchBar;
