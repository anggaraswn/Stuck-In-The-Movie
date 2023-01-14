import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "../listItems";
import Head from "next/head";
import ListItemm from "../listItemm";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import {
    InsertTerminationLetter,
    getEmployee,
    getEmployeeByusername,
    getTerminationLettersToApprroveReject,
    getWarningLetterCount,
    getWarningLettersToApprroveReject,
    updateTerminationLetter,
    updateWarningLetter,
    updateWarningLetterCount,
} from "../firebase/database";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import { InsertWarningLetter } from "../firebase/database";
import { StringLike } from "@firebase/util";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 240,
    },
}));

function ListTerminationLetter() {
    const [open, setOpen] = React.useState(false);
    const [terminationLetters, setTerminationLetters] = React.useState<any[]>(
        []
    );
    const [terminationLetter, setTerminationLetter] = React.useState<any>();

    const handleClose = () => setOpen(false);
    const handleClick = (index: number) => {
        setTerminationLetter(terminationLetters[index]);
        console.log(terminationLetters[index]);
        setOpen(true);
    };

    function handleAction(description: string) {
        handleClose();
        updateTerminationLetter(description, terminationLetter.id).then(() => {
            getTerminationLettersToApprroveReject().then((e) => {
                setTerminationLetters(e);
                console.log(e);
            });
        });
        var count = 0;
        const data = getWarningLetterCount(terminationLetter.employeeUsername);
    }

    React.useEffect(() => {
        getTerminationLettersToApprroveReject().then((e) => {
            setTerminationLetters(e);
            // setRender(render + 1);
        });
    }, []);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    {"Accept or Reject Termination Letter"}
                </DialogTitle>
                <DialogContent>
                    {/* <Typography
                        variant="subtitle1"
                        display="block"
                        align="left"
                    >
                        Reason:
                    </Typography> */}
                    <DialogContentText id="alert-dialog-description">
                        {terminationLetter
                            ? terminationLetter.description
                            : "loading..."}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={(e) => handleAction("Rejected")}
                        color="primary"
                    >
                        Reject
                    </Button>
                    <Button
                        onClick={(e) => handleAction("Accepted")}
                        color="primary"
                        autoFocus
                    >
                        Accept
                    </Button>
                </DialogActions>
            </Dialog>
            {terminationLetters.map((e, idx) => (
                <div>
                    <ListItem
                        key={idx}
                        button
                        onClick={(e) => handleClick(idx)}
                    >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={e.employeeUsername} />
                    </ListItem>
                </div>
            ))}
        </div>
    );
}

function AcceptRejectTermination() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [fullname, setFullname] = React.useState<string>("");
    const [role, setRole] = React.useState<string>("");

    React.useEffect(() => {
        if (typeof localStorage !== "undefined") {
            setFullname(localStorage.getItem("fullname"));
            setRole(localStorage.getItem("role"));
            // console.log(username);
            // console.log(role);
        }
    }, []);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        <Typography>Issue Termination Letter</Typography>
                    </Typography>
                    <Typography>{fullname}</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}></div>
                <Divider />
                <List>{ListItemm(role)}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* <Grid container spacing={3}>
                                Test
                            </Grid>
                            <Box pt={4}>
                                Ini Box
                            </Box> */}
                    <div>
                        <ListTerminationLetter />
                    </div>
                </Container>
            </main>
        </div>
    );
}

export default AcceptRejectTermination;
