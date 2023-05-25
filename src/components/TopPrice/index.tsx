import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStyles } from './styles';

const TopPrice = (props: any) => {
  const classes = useStyles();
  const { assets } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align='right'>Цена($)</TableCell>
            <TableCell align='right'>Изменение (%)</TableCell>
            <TableCell align='right'>Изменение ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((element: any) => (
            <TableRow
              key={element.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {element.name}
              </TableCell>
              <TableCell align='right'>{element.current_price}</TableCell>
              <TableCell
                className={
                  element.price_change_percentage_24h > 0
                    ? classes.priceUp
                    : classes.priceDown
                }
                align='right'
              >
                {element.price_change_percentage_24h}
              </TableCell>
              <TableCell
                className={
                  element.price_change_percentage_24h > 0
                    ? classes.priceUp
                    : classes.priceDown
                }
                align='right'
              >
                {element.price_change_24h.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopPrice;
