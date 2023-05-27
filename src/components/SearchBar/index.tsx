import { Stack, Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppSelector } from '../../utils/hook';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('');
  const assetsArray: any = useAppSelector((state) => state.assets.assets);
  const navigate = useNavigate();

  return (
    <Stack spacing={2} sx={{ width: '300px' }}>
      <Autocomplete
        value={selectedItem}
        onChange={(event: any, value: string | null) => {
          navigate(`single/${value}`);
          setSelectedItem(null);
        }}
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
