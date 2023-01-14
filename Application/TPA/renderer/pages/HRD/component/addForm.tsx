import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


interface Parameter{
    setName: Function,
    setDOB: Function,
    setRole: Function,
    setSalary: Function,
    setEmail: Function,
    setTelephone: Function,
    setUsername: Function,
    setWorkingTime: Function
}
export default function AddForm(props: Parameter) {

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setName(event.target.value);
    };

    const handleDOBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setDOB(event.target.value);
    };

    const handleRole = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setRole(event.target.value);
    };

    const handleSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSalary(event.target.value);
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setEmail(event.target.value);
    };

    const handleTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTelephone(event.target.value);
    };

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setUsername(event.target.value);
    };

return (
<React.Fragment>
    
    <Typography variant="h6" gutterBottom>
        Employee Data
    </Typography>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <TextField required id="name" name="name" label="Name" fullWidth onChange={handleNameChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField required id="DOB" name="DOB" label="Date of Birth" fullWidth onChange={handleDOBChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField required id="role" name="role" label="Role" fullWidth onChange={handleRole}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField required id="salary" name="salary" label="Salary" fullWidth onChange={handleSalary} type='number'/>
        </Grid>
        <Grid item xs={12}>
            <TextField required id="email" name="email" label="Email" fullWidth type="email" onChange={handleEmail}/>
        </Grid>
        <Grid item xs={12}>
            <TextField required id="username" name="username" label="Username" fullWidth onChange={handleEmail}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField required id="telephone" name="telephone" label="Telephone Number" fullWidth type="tel" onChange={handleTelephone}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField required id="workingTime" name="workingTime" label="Working Time" type="number" fullWidth onChange={handleUsername} />
        </Grid>
    </Grid>
</React.Fragment>
);
}