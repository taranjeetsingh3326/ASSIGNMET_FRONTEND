import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin : 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

AddCard.propTypes = {
  message : PropTypes.string.isRequired,
  buttonText : PropTypes.string.isRequired,
  rediectUrl : PropTypes.string.isRequired
};

export default function AddCard(props) {
  const {message, buttonText, rediectUrl} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {message}
        </Typography>
        <Button 
          size="small" 
          variant="contained" 
          color={"primary"} 
          onClick={()=> {
            props.history.push(rediectUrl)}
          }
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}