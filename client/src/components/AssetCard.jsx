import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DenseAppBar from './DenseAppBar.jsx';
import CryptoTable from './CryptoTable.jsx';

const styles = {
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  card: {
    marginTop: '4rem',
    marginLeft: '2rem',
    height: '30rem',
    width: '40rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

function AssetCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <DenseAppBar title={'Asset Managment'}/>
          <CryptoTable/>
        </CardContent>
        <CardActions>
          <Button size="small">All</Button>
          <Button size="small">Cryptocurrency</Button>
          <Button size="small">Real Estate Properties</Button>
          <Button size="small">Stocks</Button>
        </CardActions>
      </Card>
    </div>
  );
}

AssetCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssetCard);
