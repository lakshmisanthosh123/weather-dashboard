
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addCity, removeCity } from '../redux/reducers/cityReducer';
import { IconButton, InputAdornment, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {
  TopBar,
  SearchBar,
  StyledTable,
  CityCell,
  Container
} from '../styles/DashboardStyles';
const CityList: React.FC = () => {
  const [cityInput, setCityInput] = useState('');
  const [search, setSearch] = useState('');
  const cities = useSelector((state: any) => state.city.cities);
  const dispatch = useDispatch();

  const handleAddCity = () => {
    if (cityInput.trim()) {
      dispatch(addCity(cityInput));
      setCityInput('');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

 
  return (
    
    <Container>
    <TopBar>
      <TextField
        label="Add City"
        variant="outlined"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        style={{ flex: 1, marginRight: '10px' }}
      />
      <IconButton color="primary" onClick={handleAddCity}>
        <AddIcon />
      </IconButton>
    </TopBar>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cities.map((city:any) => (
            <TableRow >
              <TableCell>
              <Link to={`/city/${city}`}>{city}</Link>
              </TableCell>
              <button onClick={() => dispatch(removeCity(city))}>Remove</button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  
  );
};

export default CityList;


