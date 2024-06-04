import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";

// const hoverStyle=`background: rgb(2,34,62);
//   background: linear-gradient(90deg, rgba(2,34,62,1) 0%, rgba(2,53,74,1) 35%, rgba(3,92,103,1) 100%);`

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Typography m={4} variant="h5" style={{ flexGrow: 1 }}>
        System Clinic
      </Typography>
      <List>
        <ListItem className="listItem" component={Link} to="/dashboard">
          <GridViewIcon />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem className="listItem" component={Link} to="/patients">
          <PeopleAltIcon />
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem className="listItem" component={Link} to="/employees">
          <GroupsIcon />
          <ListItemText primary="Employees" />
        </ListItem>
        <ListItem className="listItem" component={Link} to="/reports">
          <DataUsageIcon />
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem className="listItem" component={Link} to="/financial">
          <QueryStatsIcon />
          <ListItemText primary="Financial" />
        </ListItem>
        <ListItem className="listItem" component={Link} to="/settings">
          <SettingsIcon />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
