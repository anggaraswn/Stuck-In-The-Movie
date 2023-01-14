import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import { app, firestore } from './firebase/firebase';
import { onSnapshot } from 'firebase/firestore';
import 'firebase/auth';
import { getEmployeeByusername } from './firebase/database';
import { seedEmployee } from './firebase/seed';


const useStyles = makeStyles((theme) => ({
paper: {
marginTop: theme.spacing(8),
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
form: {
width: '100%', // Fix IE 11 issue.
marginTop: theme.spacing(1),
},
submit: {
margin: theme.spacing(3, 0, 2),
},
}));

var dbPassword = [];

async function getEmployeeData(username){
const employee = getEmployeeByusername(username);
// console.log('test');
// console.log(employee);

var employeeData = [];

// employee.then(e => {
// console.log(e.password);
// })
// await employee.then(data => {
// dbPassword = data.map(data => data.password);
// console.log(dbPassword);
// employeeData.push(dbPassword);
// });

return employeeData;
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const firebase = firestore;

    const username = (event.target as any).username.value;
    const password = (event.target as any).password.value;

    // console.log(username);
    // console.log(password);

    const employee = getEmployeeByusername(username);
    // console.log(employee);

    employee.then(e =>{
    if(e){
    // console.log(e.password);
    // console.log(e.role);

    if(password === e.password){
    window.location.href = "/home";
    localStorage.setItem('username', username);
    localStorage.setItem('role', e.role);
    localStorage.setItem('fullname', e.name);
    }else{
    window.alert('Incorrect Password');
    }
    }else{
    window.alert('Incorrect Username');
    }
    });
    };

    export default function SignIn() {
    const classes = useStyles();
    if(typeof localStorage !== 'undefined'){
        localStorage.clear();
    }
    
    // seedEmployee();
    // useEffect(() => onSnapshot(testCollection,
    // (snapshot) =>{
    // snapshot.docs.map((doc) => {
    // console.log(doc, "doc");
    // });
    // })
    // );

    // const employee = getEmployee();

    // console.log(employee);

    // var username = [];
    // var password = [];

    // const employeArr = employee.then((result) =>{
    // // console.log(result);
    // username = result.map(result=> result.username);
    // console.log(username);

    // password = result.map(result => result.password);
    // console.log(password);
    // });

    // for(let i = 0; i < password.length; i++){ // } // const emails=employee.map(emloyee=> employee.email);
        // console.log(emails);

        return (
        <React.Fragment>
            <Container component="main" maxWidth="sm">

                <Head>
                    <title>Stuck in The Movie</title>
                </Head>
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography variant='h6' gutterBottom>
                        Welcome to Stuck in The Movie Desktop App
                    </Typography>
                    <Typography variant="h4">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField variant="outlined" margin="normal" fullWidth id="username" label="Username"
                            name="username" autoFocus placeholder='Input your username' />
                        <TextField variant="outlined" margin="normal" fullWidth name="password" label="Password"
                            type="password" id="password" placeholder='Input your password' />
                        <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}
                            id='loginBTN'>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </React.Fragment>
        );
        }