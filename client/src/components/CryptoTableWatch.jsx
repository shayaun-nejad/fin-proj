import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: '20px',
      overflowX: 'auto',
    },
    // table: {
    //   minWidth: 700,
    // },
  });


  let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Pos.io', 159, 6.0, 24, 4.0),
  createData('DogeCoin', 237, 9.0, 37, 4.3),
  createData('Prellium', 262, 16.0, 24, 6.0),
  createData('Redinx', 305, 3.7, 67, 4.3),
  createData('Golem', 356, 16.0, 49, 3.9),
];

function CryptoTableWatch(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell numeric>Current Price</TableCell>
            <TableCell numeric>Percent Change</TableCell>
            <TableCell numeric>Buy Recommended </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CryptoTableWatch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CryptoTableWatch);
