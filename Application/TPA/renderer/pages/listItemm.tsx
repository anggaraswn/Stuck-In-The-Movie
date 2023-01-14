import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import FeedbackIcon from "@mui/icons-material/Feedback";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CreateIcon from "@mui/icons-material/Create";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import RuleIcon from "@mui/icons-material/Rule";

export default function ListItemm(role) {
    if (role === "Human Resource Department") {
        return (
            <React.Fragment>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() =>
                            (window.location.href = "../HRD/viewEmployee")
                        }
                    >
                        <ListItemIcon>
                            <VisibilityIcon />
                        </ListItemIcon>
                        <ListItemText primary="View employees" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() =>
                            (window.location.href = "../HRD/addEmployee")
                        }
                    >
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add employees" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() =>
                            (window.location.href = "../HRD/issueWarningLetter")
                        }
                    >
                        <ListItemIcon>
                            <FeedbackIcon />
                        </ListItemIcon>
                        <ListItemText primary="Issue warning letter" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() =>
                            (window.location.href =
                                "../HRD/issueTerminationLetter")
                        }
                    >
                        <ListItemIcon>
                            <IndeterminateCheckBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Issue a termination letter" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() =>
                            (window.location.href =
                                "../HRD/salaryAdjustmentRequest")
                        }
                    >
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Salary adjusment requests" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ChangeCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Employees' working time" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Personal leave requests" />
                    </ListItem>
                </div>
            </React.Fragment>
        );
    } else if (role === "Storage Department") {
        return (
            <React.Fragment>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => (window.location.href = "")}
                    >
                        <ListItemIcon>
                            <VisibilityIcon />
                        </ListItemIcon>
                        <ListItemText primary="View fund request details" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() =>
                            (window.location.href =
                                "../Storage_Department/viewFacilitiesEquipments")
                        }
                    >
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="View facilities & equipments" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FeedbackIcon />
                        </ListItemIcon>
                        <ListItemText primary="Issue warning letter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <IndeterminateCheckBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Issue a termination letter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ChangeCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Employees' working time" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Personal leave requests" />
                    </ListItem>
                </div>
            </React.Fragment>
        );
    } else if (role === "Manager") {
        return (
            <React.Fragment>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <RuleIcon />
                            {/* <div style={{ padding: '16px' }}></div> */}
                            <Typography
                                style={{
                                    position: "absolute",
                                    left: "70px",
                                    overflow: "auto",
                                }}
                            >
                                {" "}
                                Accept / Reject
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem
                                button
                                onClick={() =>
                                    (window.location.href =
                                        "../Manager/acceptRejectWL")
                                }
                            >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Issued Warning Letter" />
                            </ListItem>
                        </AccordionDetails>
                        <AccordionDetails>
                            <ListItem
                                button
                                onClick={() =>
                                    (window.location.href =
                                        "../Manager/acceptRejectTermination")
                                }
                            >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Issued Termination Letter" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </React.Fragment>
        );
    }
}
