import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Typography, Link} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getAge} from "../../utils/dateUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin : 10
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardTitle : {
    textDecoration : 'none'
  },
  cardEmail : {
    textDecoration : 'none'
  }
}));

CardView.propTypes = {
  id : PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  dob : PropTypes.string.isRequired
};

export default function CardView(props) {
  const {id, avatar, name, email, dob} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={avatar}>
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="Edit Action" onClick={()=>props.history.push(`/person/edit/${id}`)} >
            <EditIcon />
          </IconButton>
        }
      title={<RouterLink className={classes.cardTitle} to={`/person/edit/${id}`}>{name}</RouterLink>}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Email:</strong> <Link className={classes.cardEmail}>{email}</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Age:</strong> {getAge(dob)} yr
        </Typography>
      </CardContent>
    </Card>
  );
}
