import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feeds from "./components/Feeds";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  }
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feeds />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
          
      </Grid>
      <Add />

    </div>
  );
}

export default App;
