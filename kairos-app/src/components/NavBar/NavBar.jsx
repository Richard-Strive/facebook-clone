import React, { useState } from "react";

import "./NavBar.css";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { withStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const styles = {
  root: {
    height: 70,
    boxShadow: "none",
  },
};

function NavBar(props) {
  const [value, setValue] = useState(2);
  const { classes } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_search_input">
        <div className="search_input">
          <input type="text" placeholder="Search Facebook" />
        </div>

        <hr />
      </div>

      {/**
       *  change the input height
       */}
      <div className="navbar_center_icons">
        <Paper className={clsx(classes.root)} square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="tabs"
          >
            <Tab label="Posts" />
            <Tab label="About" />
            <Tab label="Friends" />
          </Tabs>
        </Paper>
      </div>
      <div className="navbar_right_icons"></div>
    </div>
  );
}

export default withStyles(styles)(NavBar);
