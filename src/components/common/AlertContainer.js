import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { green } from '@material-ui/core/colors';
import { useSelector } from "react-redux";
import { useActions } from "../../redux/actions";
import * as Actions from "../../redux/actions/auth";

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
};

const useStyles = makeStyles((theme) =>
  createStyles({
    success: {
      backgroundColor: green[600],
        color:'#FFFFFF',
    },
    error: {
      backgroundColor: theme.palette.error.dark,
        color:'#FFFFFF',
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

export default function AlertContainer() {
  const authActions = useActions(Actions);
  const props = useSelector((state) => state.alert);
  const { message, statusCode } = props;


  const openState = !!message;

  const classes = useStyles();
  const [alert, setAlert] = React.useState(openState);

  React.useEffect(() => {
    setAlert(openState);
  }, [openState, message]);

  let variant = 'error';
  if (statusCode === 200) {
    variant = 'success';
  }

  if (!statusCode) {
    return <React.Fragment />;
  }

  const Icon = variantIcon[variant];
  function handleClose (event, reason) {
    authActions.closeAlert();
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      key={"top,center"}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      open={alert}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={statusCode === 200 ? classes.success : classes.error}
        message={<span id="message-id" className={classes.message}><Icon className={clsx(classes.icon, classes.iconVariant)} />{message}</span>}
        action={[<IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>]}
      />
    </Snackbar>
  )
}
