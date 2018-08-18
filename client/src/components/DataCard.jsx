import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DenseAppBar from './DenseAppBar.jsx';
import DataVisOne from './DataVisOne.jsx';

const styles = {
  bullet: {
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  card: {
    marginTop: '4rem',
    marginLeft: '2rem',
    height: '30rem',
    width: '83rem'

  }
};


function DataCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
        <DenseAppBar title={'Data Visualization'} />
          <Typography component="p">
            This is where your asset graphs will be visualized
          </Typography>
            <DataVisOne />
        </CardContent>
        <CardActions>
          <Button size="small">Assets</Button>
          <Button size="small">Watchlist</Button>
          <Button size="small">Comparison</Button>
        </CardActions>
      </Card>
    </div>
  );
}

DataCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataCard);
