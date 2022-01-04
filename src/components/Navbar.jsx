import { alpha, AppBar, Avatar, Badge, Button, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Person, Search } from "@material-ui/icons";
// import { Search } from "@mui/icons-material";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },

  },
  LogoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    }
  },
  LogoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    }
  },
  input: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    width: "100%",
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    }
  },
    cancel: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });

    return (
        <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.LogoLg}>
          Dev Logo
          </Typography>
        <Typography variant="h6" className={classes.LogoSm}>
          DEV
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search..." className={classes.input} />
            <Cancel className={classes.cancel} onClick={()=> setOpen(false)} />
          </div>
          <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=> setOpen(true)} />
          <Badge color="secondary" badgeContent={4} className={classes.badge}>
            <Mail />
          </Badge>
          <Badge color="secondary" badgeContent={2} className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" />
          </div>
          
      </Toolbar>
    </AppBar>
    )
}

export default Navbar
