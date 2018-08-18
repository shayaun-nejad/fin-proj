import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DenseAppBar from './DenseAppBar.jsx';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';



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
    width: '40rem',
    alignSelf: 'center'
  },
  log: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '100px'
  },

  button: {
      backgroundColor: 'white',
      marginTop: '20%',
      marginLeft: '40%'
  },

  allLog: {
  }
};

const Login = (props) => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.card}>
        <CardContent >
            <DenseAppBar title={'Log-In'}/>
            <div className={classes.allLog}>
            <div className={classes.log}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <AccountCircle />
                         </Grid>
                        <Grid item>
                         <TextField id="input-with-icon-grid" label="Username" />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                             <Lock />
                         </Grid>
                        <Grid item>
                         <TextField id="input-with-icon-grid" label="Password" />
                        </Grid>
                    </Grid>
                </div>
                </div>
                <Button variant="outlined" size="large" color="primary" className={classes.button}>
                Log-in
                </Button>
            </div>
        </CardContent>
        </Card>
    );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
