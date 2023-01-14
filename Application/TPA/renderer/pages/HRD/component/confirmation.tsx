import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 500,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function formatRupiah(num: number): string {
    return num.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR'
    });
  }

export default function Confirmation(props) {
  const classes = useStyles();
  console.log(props)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Employee confirmation
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Name" />
          <Typography variant="body1" className={classes.total}>
            {props.name}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Date of Birth" />
          <Typography variant="body1" className={classes.total}>
            {props.dob}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Role" />
          <Typography variant="body1" className={classes.total}>
            {props.role}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Salary" />
          <Typography variant="body1" className={classes.total}>
            {formatRupiah(Number(props.salary))}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Telephone" />
          <Typography variant="body1" className={classes.total}>
            {props.telephone}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Username" />
          <Typography variant="body1" className={classes.total}>
            {props.username}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}