import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddForm from './addForm';
import Confirmation from './confirmation';
import { InsertEmployee } from '../../firebase/database';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { width } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function Notification(){
  return(
    <React.Fragment>
                <Typography align='center'><CheckCircleIcon style={{ fontSize: '200px' }}/></Typography>
                <Typography variant="h5" gutterBottom align='center'>
                  Employee has been added
                </Typography>
              </React.Fragment>
  )
}

const steps = ['Form', 'Confirmation'];

function getStepContent(step) {
    
const [name, setName] = React.useState("");
const [dob, setDOB] = React.useState("");
const [role, setRole] = React.useState("");
const [salary, setSalary] = React.useState<number>(0);
const [email, setEmail] = React.useState("");
const [telephone, setTelephone] = React.useState("");
const [username, setUsername] = React.useState("");
const [workingTime, setWorkingTime] = React.useState<number>(0);

// React.useEffect(() => {
//   if(name !== ""){
//       setName('test');
//       setDOB('test');
//       setRole('test');
//       setSalary(1000);
//       setTelephone('test');
//       setUsername('test');
//       console.log('zzzz');
//       console.log(name);
//   }
// }, []);


switch (step) {
    case 0:
      return <AddForm setName={setName} setDOB={setDOB} setRole= {setRole} setSalary= {setSalary} setEmail= {setEmail} setTelephone= {setTelephone} setUsername= {setUsername} setWorkingTime= {setWorkingTime}/>;
    case 1:
      return <Confirmation name= {name} dob= {dob} role= {role} salary= {salary} email = {email} telephone = {telephone} username = {username} workingTime = {workingTime}/>;
    case 2:
      InsertEmployee(name, dob, role, salary, email, telephone, username);
      return <Notification />
      // default:
      // // throw new Error('Unknown step');
  }
}

export default function Form() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    console.log(activeStep);

  

  const handleNext = () => {

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Add Employee Form
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
                {console.log(activeStep)}
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {(activeStep !== 0 && activeStep !== steps.length) && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {(activeStep !== steps.length) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                  )}
                  {(activeStep === steps.length) && (
                    <div style={{ display: 'block', justifyContent: 'center', minWidth: '100%', alignItems: 'center' }} className='ewqewq' >
                      <Typography align='center'>
                        <Button variant="contained" color="primary" onClick= {() => window.location.href = "../home"} className={classes.button}>
                          Done
                        </Button>
                      </Typography>  
                    </div>
                  )}
                </div>
        </Paper>
      </main>
    </React.Fragment>
  );
}